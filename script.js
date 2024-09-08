const menuButton = document.querySelector("#menu-button")
let iconChange = 0

menuButton.addEventListener('click', ()=>{
    const navigationBar = document.querySelector("#navigation-container")
    navigationBar.classList.toggle("menu-entry")

    const header = document.querySelector("header")
    header.classList.add("shadow")

    if(iconChange == 0){
        menuButton.src = "/images/icon-close.svg"
        ++iconChange
    }else if(iconChange == 1){
        menuButton.src = "/images/icon-hamburger.svg"
        --iconChange
    }
})
const texts = [
    {
        title: "Discover innovative ways to decorate",
        content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        title: "We are available all across the globe",
        content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        title: "Manufactured with the best materials",
        content: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
];

let currentSlide = 1

const previousButton = document.querySelector("#previous-button")
const nextButton = document.querySelector("#next-button")
const image = document.querySelector("header")
const articleTitle = document.querySelector(".article-title-1");
const articleText = document.querySelector(".article-text-1");

const changeSlide = () => {
    if (window.screen.width >= 1440) {
        image.style.backgroundImage = `url(images/desktop-image-hero-${currentSlide}.jpg)`
    }else{
        image.style.backgroundImage = `url(images/mobile-image-hero-${currentSlide}.jpg)`
    }
    articleTitle.textContent = texts[currentSlide - 1].title;
    articleText.textContent = texts[currentSlide - 1].content;
}

const nextSlide = () => {
    currentSlide = currentSlide + 1
    if(currentSlide > 3){
        currentSlide = 1
    }
    changeSlide();
}

const previousSlide = () => {
    currentSlide = currentSlide - 1
    if(currentSlide < 1){
        currentSlide = 3
    }
    changeSlide();
}

nextButton.addEventListener('click', ()=>{
    nextSlide();
})

previousButton.addEventListener('click', ()=>{
    previousSlide();
})
