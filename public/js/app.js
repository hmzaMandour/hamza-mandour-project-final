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
    let a = document.querySelector(".title")
    let b = document.querySelector(".topdiv")
    a.textContent = "Starters"
    b.style.animation = "up-down 2s ease-in-out  alternate-reverse both"
   

})
breakfast.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector(".topdiv")
    a.textContent = "Breakfast"
    b.style.animation = "up-down 2s ease-in-out  alternate-reverse both"

   
   
})
dinner.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector(".topdiv")
    a.textContent = "Dinner"
    b.style.animation = "up-down 2s ease-in-out  alternate-reverse both"

  

   
})
lunch.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector(".topdiv")
    a.textContent = "Lunch"
    b.style.animation = "up-down 2s ease-in-out  alternate-reverse both"


 
})



let nextBtns = document.querySelectorAll(".next")
let containers = document.querySelectorAll(".carousel-container")



let currentIndex = 0
const slideImage = (index, myBtn) => {

    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn")

    containers.forEach(container => {
        if (container.id == carouselBtnAttribute) {

            let slides = container.querySelectorAll(".slide")
            let camera = container.querySelector(".carousel")
            let slideWidth = slides[0].clientWidth
            let indicators = container.querySelectorAll('.indicator')
            if (index < 0) {
                index = slides.length - 1
            } else if (index >= slides.length) {
                index = 0
            }

            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator')
            });
            indicators[index].classList.add("activeIndicator")
            camera.style.transform = `translateX(-${slideWidth * index}px)`
            currentIndex = index
        }
    });


}

nextBtns.forEach(next => {
    next.addEventListener("click", (event) => { slideImage(currentIndex + 1, event.target) })
    setInterval(() => {
        next.click()
    }, 3000);
});
// 





containers.forEach(container => {
    let slides = container.querySelectorAll(".slide")
    let indicatorsGrp = document.createElement("div")
    indicatorsGrp.classList.add("indicators-grp")
    container.appendChild(indicatorsGrp)

    slides.forEach(slide => {
        let indicator = document.createElement("div")
        indicator.classList.add("indicator")
        indicatorsGrp.appendChild(indicator)
    });
    indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator')
});
