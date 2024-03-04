const cl = console.log; 

const hidebtn = document.getElementById("hidebtn");
const showbtn = document.getElementById("showbtn");
const togglebtn = document.getElementById("togglebtn");
const showhidebtn = document.getElementById("showhidebtn");

const hideBoxHandler = () => {
    box.classList.add("d-none")
};
const showBoxHaanddler = () => {
    box.classList.remove("d-none")
};
const toggleBoxHandler = () => {
    box.classList.toggle("d-none")
};

function showhideBoxHandler() {
   let boxclassNames = box.className;
   if(!boxclassNames.includes("d-none")){
    box.classList.add("d-none")
    this.innerHTML = "Show Box"
   }else{
    box.classList.remove("d-none")
    this.innerHTML = "Hide Box"
   }
};

hidebtn.addEventListener("click",hideBoxHandler);
showbtn.addEventListener("click",showBoxHaanddler);
togglebtn.addEventListener("click",toggleBoxHandler);
showhidebtn.addEventListener("click",showhideBoxHandler);
