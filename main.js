const slideList = [{
    img: "images/img1.jpg",
    text: "Neptun"
},
{
    img: "images/img2.jpg",
    text: "Old Town"
},
{
    img: "images/img3.jpg",
    text: "Baltic Sea"
},

]


const time = 3000;
let activeImage = 0;


const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')]



const changeSlide = () => {
    dots[activeImage].className = ""
    activeImage++
    if (activeImage === slideList.length) {
        activeImage = 0;
    }
    image.src = slideList[activeImage].img
    h1.textContent = slideList[activeImage].text
    dots[activeImage].className = "active"



}


let indexInterval = setInterval(changeSlide, time)

window.addEventListener("keydown", changeImage);

function changeImage(event) {

    if (event.keyCode == "37") {
        clearInterval(indexInterval)
        dots[activeImage].className = ""
        activeImage--

        if (activeImage < 0) {
            activeImage = slideList.length - 1
        }

        image.src = slideList[activeImage].img
        h1.textContent = slideList[activeImage].text
        dots[activeImage].className = "active"
    } else if (event.keyCode == "39") {
        clearInterval(indexInterval)
        dots[activeImage].className = ""
        activeImage++
        if (activeImage > slideList.length - 1) {
            activeImage = 0
        }

        image.src = slideList[activeImage].img
        h1.textContent = slideList[activeImage].text
        dots[activeImage].className = "active"
    }

    indexInterval = setInterval(changeSlide, time)

}