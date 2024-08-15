
let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")



starters.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Starters"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);

})
breakfast.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Breakfast"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);

   
   
})
dinner.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Dinner"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);
  

   
})
lunch.addEventListener("click",()=>{
    let a = document.querySelector(".title")
    let b = document.querySelector("#menu")
    a.textContent = "Lunch"
    b.classList.add("animated")
    setTimeout(() => {
        b.classList.remove("animated")
    }, 3000);


 
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
})




let modal = document.getElementById("loginModal");
let btn = document.querySelector(".btn1");
btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}