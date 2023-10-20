// var string = "";
// var buttons = document.querySelectorAll(".cal");
// Array.from(buttons).forEach((val)=>{
//     val.addEventListener("click",(e)=>{
//         if (e.textContent === "="){
//             string = eval(string)
//         }
//         string = string +e.textContent 
//         document.getElementById("cal_input").textContent = string
//         console.log(string)
//     })
// })


let string = "";
let buttons = document.querySelectorAll("#button");
var input = document.getElementById("cal_input");
input.value = 0

function Select(val){
    
    if (val.target.textContent === "="){
        console.log(val.target.textContent);
        string = eval(string)
        console.log(string);    
        input.value = string;
        string = ""
    }
    else if (val.target.textContent === "AC"){
        string = ""
        input.value = string 
    }
    else{
        console.log(val.target.textContent);
        string += val.target.textContent
        console.log(string);
        input.value = string;

    }
}




Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",Select)
})