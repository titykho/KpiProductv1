

let brand, items,category = []; // GLOBAL ITEM NAME
const MySrp = 1.67
// async function getJSONitems() {
//   try {
//  // const response = await fetch('./json/items.json');
//   const response = await fetch(FILE);
//     if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//         }
//         const data = await response.json();
//         data.sort();
//         items= [...data];
//   } catch (error) {
//     console.error(error.message);
//     alert("file not found")
//   }
// }  dropboc getfile share to dropbox files AND SHARE REPL WITH DL dropboxusercontent.com

function getJSONitems(){
//const dropboxUrl ='https://dl.dropboxusercontent.com/scl/fi/998tf3rypwb4kidt396d8/items.json?rlkey=h4gebw2odff7tbktvs9ki64sl&st=fccps9wz&raw=1';
const dropboxUrl ="https://dl.dropboxusercontent.com/scl/fi/998tf3rypwb4kidt396d8/items.json?rlkey=h4gebw2odff7tbktvs9ki64sl&st=htups6st&raw=1"
//https://www.dropbox.com/scl/fi/998tf3rypwb4kidt396d8/items.json?rlkey=h4gebw2odff7tbktvs9ki64sl&st=zlgmpg0k&dl=0

fetch(dropboxUrl)
  .then(response => response.json())
  .then(jsonData => {
    let jsonData1=JSON.parse(JSON.stringify(jsonData));
  
     items = [...jsonData1];
    // console.log("json string ",myitem)    // console.log("JSON Data:", jsonData);
  })
  .catch(error => console.error("Error fetching JSON:", error));
}
//https://www.dropbox.com/scl/fi/v7yf90wau5mce5iamcpok/brand.json?rlkey=04guyov5k6sqmq88caczt2qla&st=i1usyq1n&&raw=1
function getJSONbrand(){
const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/v7yf90wau5mce5iamcpok/brand.json?rlkey=04guyov5k6sqmq88caczt2qla&st=3p6lpyfg&raw=1'
fetch(dropboxUrl)
  .then(response => response.json())
  .then(jsonData => {
    let jsonData1=JSON.parse(JSON.stringify(jsonData));
     
     brand = [...jsonData1];
      brand.sort();
    // console.log("json string ",myitem)    // console.log("JSON Data:", jsonData);
  })
  .catch(error => console.error("Error fetching JSON:", error));
}

function getJSONcategory(){
const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/gfmaqxh87yt9om7qthq6m/category.json?rlkey=di2ky1i8td20kz9gc8x6s2yvy&st=wlp957qv&raw=1'
//const dropboxUrl= 'https://dl.dropboxusercontent.com/scl/fi/v7yf90wau5mce5iamcpok/brand.json?rlkey=04guyov5k6sqmq88caczt2qla&st=3p6lpyfg&raw=1'
fetch(dropboxUrl)
  .then(response => response.json())
  .then(jsonData => {
    let jsonData1=JSON.parse(JSON.stringify(jsonData));  
     category = [...jsonData1];
      category.sort();
    // console.log("json string ",myitem)    // console.log("JSON Data:", jsonData);
  })
  .catch(error => console.error("Error fetching JSON:", error));
}

getJSONcategory();
getJSONbrand();
getJSONitems();

// **************************  items search ***********************88

function saveclick(){
    let myx='';
    myx = document.getElementById("mysearch").value.toUpperCase(); 
    ViewItem2(items,myx);
}


function ViewItem2(data1,LookItem) {
const myimage = document.querySelector(".image");
//   const output = document.querySelector("box1");
  //data1.sort((a,b) => a.partno.localeCompare(b.partno))
  data1.sort((a,b) => a.brand.localeCompare(b.brand) || a.category.localeCompare(b.category) || a.partno.localeCompare(b.partno));
  myimage.innerHTML = "";

        data1.forEach((data1, index) => {             
               if(data1.partno.includes(LookItem) || data1.desrip.includes(LookItem)){
                        const row = document.createElement("div");
                        const formatted = data1.price.toLocaleString('en-US', {  // format numerica no.
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        });

                        row.className='boxes'
                        row.dataset.index = index; 
                        row.innerHTML = `<img src=${data1.photo}>
                        <p>PART NO: ${data1.partno}
                        <br>BRAND: ${data1.brand} /   PRICE: ${formatted} <br> ${data1.desrip}</p> `

                        row.addEventListener("click", function() {
                                      let  nsrp = con_price(data1.price * MySrp); 
                                      let xprice =con_price(data1.price);                        
      
                                          document.getElementById('customAlert').style.display = 'block';
                                          document.getElementById("photoimg").src = data1.photo;
                                          document.getElementById('p0').innerText= `BRAND : ${data1.brand}`;
                                          document.getElementById('p1').innerText= `PART NO : ${data1.partno}`;
                                          document.getElementById('p2').innerText= `PRICE : ${xprice},    SRP : ${nsrp}`;
                                          document.getElementById('p3').innerText= `DESCRIPTION : ${data1.desrip}`; 
                                          document.getElementById('p4').innerText= `CATEGORY : ${data1.category}`; 
                                          document.getElementById("p5").innerText =`AVAILABLE : ${data1.active ? "YES":"NO"}`; 
                         });
                        myimage.appendChild(row);   
                   
                }
            } )  
} 
function con_price(nPrice){
           return nPrice = nPrice.toLocaleString('en-US', {  // format numerica no.
                    minimumFractionDigits: 2,
                     maximumFractionDigits: 2
              });
    }          
// ************************888   brand ******************************8


function ViewBrand2(data1,LookItem) {
const myimage = document.querySelector(".image");
//   const output = document.querySelector("box1");
//  data1.sort((a,b) => a.brand.localeCompare(b.brand));
   data1.sort((a,b) => a.brand.localeCompare(b.brand) || a.category.localeCompare(b.category) ||a.partno.localeCompare(b.partno));
  myimage.innerHTML = "";
        data1.forEach((data1, index) => {             
               if(data1.brand.includes(LookItem)){
                        const row = document.createElement("div");
                        const formatted = data1.price.toLocaleString('en-US', {  // format numerica no.
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        });
                        row.className='boxes'
                        row.dataset.index = index; 
                        row.innerHTML = `<img src=${data1.photo}>
                        <p>PART NO: ${data1.partno}
                        <br>BRAND: ${data1.brand} /   PRICE: ${formatted} <br> ${data1.desrip}</p> `

                        row.addEventListener("click", function() {
                                      let  nsrp = con_price(data1.price * MySrp); 
                                      let xprice =con_price(data1.price)

                                          document.getElementById('customAlert').style.display = 'block';
                                          document.getElementById("photoimg").src = data1.photo;
                                          document.getElementById('p0').innerText= `BRAND : ${data1.brand}`;
                                          document.getElementById('p1').innerText= `PART NO : ${data1.partno}`;
                                          document.getElementById('p2').innerText= `PRICE : ${xprice},    SRP : ${nsrp}`; 
                                          document.getElementById('p3').innerText= `DESCRIPTION : ${data1.desrip}`; 
                                          document.getElementById('p4').innerText= `CATEGORY : ${data1.category}`; 
                                          document.getElementById("p5").innerText =`AVAILABLE : ${data1.active ? "YES":"NO"}`; 
                                      
                                        // Pick the item
                                        // document.getElementById("photoimg").src = data1.photo;
                                        // document.getElementById("displayActive").innerText =   data1.active ? "YES":"NO"; 
                                        // document.getElementById("displayBrand").innerText =   data1.brand; 
                                        // document.getElementById("displayPartno").textContent =   data1.partno;    
                                        // document.getElementById("displayCategory").textContent =   data1.category;
                                        // document.getElementById("displayDescrip").textContent =   data1.desrip; 
                                        // document.getElementById("displayPrice").textContent =   data1.price;  
                                         });
                        myimage.appendChild(row);   
                   
                }
            } ) 
   
} 

function closeCustomAlert() {
        document.getElementById('customAlert').style.display = 'none';
}


function toggleBrand(){
const btn2= document.querySelector(".ListBrand")
    btn2.style.display = btn2.style.display === "none" ? "block" : "none";
  const listContainer = document.getElementById("mybList");
  listContainer.innerHTML = "";
  brand.forEach(brand => {
        const li = document.createElement("li");
        li.textContent = brand;
        li.style.cursor = 'pointer'; // Make it look clickable
        li.addEventListener('click', function() {
                const value = this.textContent; 
                document.querySelector('.image').innerHTML= value;
                ViewBrand2(items,value)
            });
    listContainer.appendChild(li);
  });
}

// ********************************  category ****************************

function ViewCategory2(data1,LookItem) {
const myimage = document.querySelector(".image");
//   const output = document.querySelector("box1");
//  data1.sort((a,b) => a.partno.localeCompare(b.partno));
   data1.sort((a,b) => a.category.localeCompare(b.category) || a.brand.localeCompare(b.brand) || a.partno.localeCompare(b.partno));
  myimage.innerHTML = "";

        data1.forEach((data1, index) => {             
               if(data1.category.includes(LookItem)){
                        const row = document.createElement("div");
                        row.className='boxes'
                        const formatted = data1.price.toLocaleString('en-US', {  // format numerica no.
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                        });
                        row.dataset.index = index; 
                        row.innerHTML = `<img src=${data1.photo}>
                        <p>PART NO: ${data1.partno}
                        <br>BRAND: ${data1.brand}, / PRICE: ${formatted } <br> ${data1.desrip}</p> `

                        row.addEventListener("click", function() {
                                      let  nsrp = con_price(data1.price * MySrp); 
                                      let xprice =con_price(data1.price)

                                          document.getElementById('customAlert').style.display = 'block';
                                          document.getElementById("photoimg").src = data1.photo;
                                          document.getElementById('p0').innerText= `BRAND : ${data1.brand}`;
                                          document.getElementById('p1').innerText= `PART NO : ${data1.partno}`;
                                          document.getElementById('p2').innerText= `PRICE : ${xprice},"    "SRP : ${nsrp}`;
                                          document.getElementById('p3').innerText= `DESCRIPTION : ${data1.desrip}`; 
                                          document.getElementById('p4').innerText= `CATEGORY : ${data1.category}`; 
                                          document.getElementById("p5").innerText =`AVAILABLE : ${data1.active ? "YES":"NO"}`;                                               
                                })
                       myimage.appendChild(row);     
                }
            } )       
} 


function toggleCategory(){
let myvalue='';
const btn2= document.querySelector(".ListCategory")
    btn2.style.display = btn2.style.display === "none" ? "block" : "none";

  const listContainer = document.getElementById("mycList");
  listContainer.innerHTML = "";
  category.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;   
        li.style.cursor = 'pointer'; // Make it look clickable
        li.addEventListener('click', function() {
                const value = this.textContent; 
                myvalue=value;
                ViewCategory2(items,myvalue)
            });
    listContainer.appendChild(li);  
  });
}


