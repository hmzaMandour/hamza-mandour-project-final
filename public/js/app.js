// let nextBtns = document.querySelectorAll(".next")
// let previousBtns = document.querySelectorAll(".previous")
// let containers = document.querySelectorAll(".carousel-container")




// //* auto slide 
// containers.forEach(container => {
//     //* check wach  l element 3ando attribute auto slide   
//     if (container.getAttribute("autoslide")) {
//         let nextBtn = container.querySelector(".next")

//         setInterval(() => {
//             //* method  kanwarek  biha  3la  btn 
//             nextBtn.click()
//         }, 3000);
//     }
// });

// //* indicators 

// containers.forEach(container => {
//     //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna  
//     let slides = container.querySelectorAll(".slide")
//     let indicatorsGrp = document.createElement("div")
//     indicatorsGrp.classList.add("indicators-grp")
//     container.appendChild(indicatorsGrp)

//     slides.forEach(slide => {
//         let indicator = document.createElement("div")
//         indicator.classList.add("indicator")
//         indicatorsGrp.appendChild(indicator)
//     });
//     indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
// });



let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")


starters.addEventListener("click",()=>{
    let a = document.querySelector(".smalldiv")
    let b = document.querySelector(".topdiv")
    a.children[1].textContent = "Starters"
   

})
breakfast.addEventListener("click",()=>{
    let a = document.querySelector(".smalldiv")
    let b = document.querySelector(".topdiv")
    a.children[1].textContent = "Breakfast"
    b.style.background = "red"
   
   
})
dinner.addEventListener("click",()=>{
    let a = document.querySelector(".smalldiv")
    let b = document.querySelector(".topdiv")
    a.children[1].textContent = "Lunch"

   
})
lunch.addEventListener("click",()=>{
    let a = document.querySelector(".smalldiv")
    let b = document.querySelector(".topdiv")
    a.children[1].textContent = "Dinner"

 
})