
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





let links = document.querySelector(".links")
let menu = document.querySelector(".menu")
let close = document.querySelector(".closee")
menu.addEventListener("click" , ()=>{
    links.style.display = "flex"
    close.style.display = "flex"
    menu.style.display  ="none"
})
close.addEventListener("click" , ()=>{
    links.style.display = "none"
    close.style.display = "none"
    menu.style.display = "flex"

})




document.addEventListener('DOMContentLoaded', function() {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });
});





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








let nextBtns2 = document.querySelectorAll(".next2");
let containers2 = document.querySelectorAll(".carousel-container2");

let currentIndex2 = 0;

const slideImage2 = (index, myBtn) => {
    let carouselBtnAttribute = myBtn.getAttribute("carouselBtn");

    containers2.forEach(container => {
        if (container.id == carouselBtnAttribute) {
            let slides = container.querySelectorAll(".slide2");
            let camera = container.querySelector(".carouselll");
            let slideWidth = slides[0].clientWidth;
            let indicators = container.querySelectorAll('.indicator1');

            if (index < 0) {
                index = slides.length - 1;
            } else if (index >= slides.length) {
                index = 0;
            }



            indicators.forEach(indicator => {
                indicator.classList.remove('activeIndicator1');
            });
            indicators[index].classList.add("activeIndicator1");

            camera.style.transform = `translateX(-${slideWidth * index}px)`;
            currentIndex2 = index; 
            if (currentIndex2 == slides) {
                setTimeout(() => {
                    currentIndex2=0
                    camera.style.transform = translateX(0);
                }, 500);
            }
        }
    });
};

nextBtns2.forEach(next => {
    next.addEventListener("click", (event) => { slideImage2(currentIndex2 + 1, event.target) });

    setInterval(() => {
        next.click() 
    }, 3000);
});

containers2.forEach(container => {
    let slides = container.querySelectorAll(".slide2");
    let indicatorsGrp = document.createElement("div");
    indicatorsGrp.classList.add("indicators-grp");
    container.appendChild(indicatorsGrp);

    slides.forEach(slide => {
        let indicator = document.createElement("div");
        indicator.classList.add("indicator1");
        indicatorsGrp.appendChild(indicator);
    });

    indicatorsGrp.querySelector(".indicator1").classList.add('activeIndicator1');
});
