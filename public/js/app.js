
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


// let galleryContainer = document.querySelector(".gallery-container");
// let galleryNavContainer = document.querySelector(".gallery-nav");
// let galleryItems = document.querySelectorAll(".gallery-item");

// class Carousel1 {
//     constructor(container, items, nav) {
//         this.carouselContainer = container;
//         this.carouselArray = [...items];
//         this.carouselNav = nav;
//         this.currentItemIndex = 0;
//         this.autoSlideInterval = null;
//     }

//     updateGallery() {
//         this.carouselArray.forEach(ele => {
//             ele.classList.remove("gallery-item-1")
//             ele.classList.remove("gallery-item-2")
//             ele.classList.remove("gallery-item-3")
//             ele.classList.remove("gallery-item-4")
//             ele.classList.remove("gallery-item-5")
//             ele.classList.remove("gallery-item-6")
//             ele.classList.remove("gallery-item-7")
//             ele.classList.remove("gallery-item-8")
//         })

//         this.carouselArray.slice(0, 8).forEach((ele, i) => {
//             ele.classList.add(`gallery-item-${i + 1}`)
//         })

//         this.updateIndicators()
//     }

//     updateIndicators() {
//         if (this.carouselNav && this.carouselNav.childNodes.length > 0) {
//             this.carouselNav.childNodes.forEach(indicator => {
//                 if (indicator.classList) {
//                     indicator.classList.remove('active')
//                 }
//             })
//             if (this.currentItemIndex < this.carouselNav.childNodes.length) {
//                 this.carouselNav.childNodes[this.currentItemIndex].classList.add('active')
//             }
//         }
//     }

//     setCurrentState(index) {
//         this.currentItemIndex = index
//         this.carouselArray = this.carouselArray.slice(index).concat(this.carouselArray.slice(0, index))
//         this.updateGallery()
//     }

//     setIndicators() {
//       while (this.carouselNav.firstChild) {
//           this.carouselNav.removeChild(this.carouselNav.firstChild)
//       }
  
//       this.carouselArray.forEach((index) => {
//           let li = document.createElement('li')
//           li.addEventListener('click', () => {
//               this.setCurrentState(index)
//               this.stopAutoSlide() 
//           })
//           this.carouselNav.appendChild(li)
//       })

//       this.updateIndicators()
//   }
  

//     startAutoSlide() {
//         this.autoSlideInterval = setInterval(() => {
//             this.currentItemIndex = (this.currentItemIndex + 1) % this.carouselArray.length
//             this.setCurrentState(this.currentItemIndex)
//         }, 2000) 
//     }

//     stopAutoSlide() {
//         clearInterval(this.autoSlideInterval)
//     }

//     init() {
//         this.updateGallery()
//         this.setIndicators()
//         this.startAutoSlide()
//     }
// }

// const exampleCarousel = new Carousel1(galleryContainer, galleryItems, galleryNavContainer)
// exampleCarousel.init()