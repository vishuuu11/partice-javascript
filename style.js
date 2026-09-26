// let incrementBtn = document.querySelector("#incre");
// let decrementBtn = document.querySelector("#decre");
// let heading = document.querySelector("h2");
// let count = 0;
// incrementBtn.addEventListener("click", () =>{
//  if(count >= 0){
//     count++;
//     heading.innerText = count;
//  }
// });
// decrementBtn.addEventListener("click", () =>{
//     if(count >0){
//         count--;
//         heading.innerText = count;
//     };
// });

const { jsx } = require("react/jsx-runtime");

// let btn = document.querySelector(".btn");
// let para = document.querySelector("p");
// console.log(para);
// btn.addEventListener("dbclick", () =>{
//     console.log("kese ho");
//     para.classList.toggle("para");
// });

// let heading = document.querySelector("h2");
// let city = document.querySelector(".city");
// city.addEventListener("change", () =>{
//    console.log(city.value);
//    heading.innerText = city.value;
// });
// let colorChange = document.querySelector(".colorChange");
// colorChange.addEventListener("change", () =>{
//     document.body.style.backgroundColor = colorChange.value;
//     document.body.style.backgroundColor="green";

// })

// let inputValue = document.querySelector("input");
// inputValue.addEventListener("input",() =>{
//     console.log(inputValue.value);
//     if(inputValue.value.length== 10) {
//         alert("limit reached");
//     };
// });
// let  forSubmit = document.querySelector(".submit");
// let firstName = document.querySelector("#firstName");
// let lastNmae = document.querySelector("#lastName");
// forSubmit.addEventListener("submit", (event) =>{
//     event.preventDefault();
//     const user ={
//         firstName:firstName.value,
//         lastNmae: lastNmae.value,
//     };
//     console.log(user);
// })

// let btn .addEv(() =>{
//     const div = document.createElement("div");
//     div.setAttribute("class","card");
//     div.innerHTML = `h3car4{Math.floor(Math.random()* 100)}`
//     contains.append(div)
// });
// CSSContainerRule.addEvem("click", () =>{
//     event.target.parentElement.remove();
//     console.log("item removed");
// })
// let log = function(user, password){
// if(user != String && password != Number){
//     console.log("not login");
// }
// else{
//     console.log("login");
// }
// }
// log("vishakha", 1234);

//     console.log("order pizza");
//     console.timeLog("Oder placed");
//     console.log("pizza Ready ho raha");
//     console.log("enjoy pizza");

//     console.log("order pizza");
//     console.log("Order place");
//     setTimeout(() =>{
//         console.log("pizza ready ho raha")
//     },0);
//     setTimeout(() =>{
//         console.log("pizza deliver ho rha")
//     },0);
//     console.log("enjoy pizza");
//     setTimeout(() =>{
//         console.log("helo")
//     },2000);
//     let btn = document.querySelector("#btn");
//     console.log(btn);
//     btn.addEventListener("click",()) =>{
//         clearInterval(id);
//     }

//     let id = setInterval(() =>{
//         console.log("helllo")
//     },2000);
// function greet(name, cb) {
//     console.log(`hello ${name}`)
//     cb()
// }
// function loginUser(userId,userName, cb){
//     console.log("User login ho rha");
//     setTimeout()=>{
//         cb([{postId: "1001", title: "Toxuc"}])
//     }
// }

// //https://randomuser.me/api/
// let userNmae = documnet.getElementById("username");
// let btn = document.getElementById("btn");
// function getData(){
//     fetch(`https:??ranndomuser.me/api`)
//     .then((raw))
// }

// setTimeEOUT(() =>{
//     CONSOLE.LOG("PIZZA DELIVER HO RAHA H");
// }0);
// CONSOLE.LOG(()=>{

// })
// let id = setInterval(() =>{
//     console.log({"hello"});
// },2000);

// function greet(name, cb){
//     console.log(`hello ${name}`);
//     cb()
// }
// function sayBye(){
//     console.log("bye bye");
// }
// greet("vishakha",sayBye);

// function loginUser(userId, userName, cb){
//     console.log("User login ho rha h...");
//     setTimeout(() =>{
//         cb({userId: userId, userName: userName});
//     },2000);

// }
// function getPost(userId, cb){
//     console.log("post fetch ki js ");
//     setTimeout(() =>{
//         cb([{postId:"1001", title:"toxic"}]);
//     }2000);

// }
// let commenData = [{commenId: "1002", text: "bakwaas"},
//     {commenId: "1003", text: "good"},
// ];
// function getAllComments(postId, cb){

// }
// const prm = new Promise((resolve, reject) =>{
//     reject ("promise reject  hua h");
//     let   age = 15;
//     if(age< 18){
//         reject("not eligible");
//     }else{
//         resolve("eligible");
//     }
// });

// prm
// .then((meassage)=>{

// })
function getData(){
    return new Promise((resolve,reject)=>{
        resolve("data a gya");
    });
}
getData().then((result) =>{
    console.log(result);
})
async function = gettingData() {
const data = await getData();
console.log(data);
}
gettingData();
let data = fetch(`https:??jsonplaceholder.tyicode.com/todod/`);
data.then((rawData) =>{
    console.log(rawData);
    return rawData.json();
})
.then((rawData) =>{
    console.log(rawData);
    return rawData.json();
})
.then((actuaalData) =>{
    return rawData.json();
})
.catch((actualData)=>{
    console.log(actualData);
})
.catch((err) =>{
    console.log(err);
});
async function getData() {
    try{
        let data = await fetch(`https://jsonplaceholder.tyicode.com/todos/`);
        const result = await data.json();
        const actualData = result;
        console.log(actualData);
    } catch(err){
        console.log(err);
    }

}
getData();
 function loginUser(userId, userName) {
    console.log("User");
    return new Promise(resolve, reject) =>{
        setTimeout(() =>{
            resolve({userId: userId, userName: userName});
        },2000);
    }
 }
 function getPost(userId){
    console.log("Post fetch ki ja rahi h");
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve([{postId: "1001", title:"Toxic"}])
        },2000);
    }
 }