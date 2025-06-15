const paint = document.getElementById('paint');
const paintRoller = document.getElementById('paintRoller');

window.addEventListener("scroll",() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    paint.style.height = `${scrollPosition}px`;
    paintRoller.style.top = `${scrollPosition}px`;
});

document.addEventListener("DOMContentLoaded",() => {
    const aboutSection = document.querySelector(".about-section");
    const stripes = document.querySelectorAll(".stripe");

    function isInView(element){
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >=0
        );
    }

    function animationStripes(){
        if(isInView(aboutSection)){
            stripes.forEach((stripe,index) =>{
                stripe.style.height = "100%";
                stripe.style.transition = `height 0.5s ease ${index * 0.2}s`;
            });
        } else {
            stripes.forEach((stripe) => {
                stripe.style.height = "0";
                stripe.style.transition = "none";
            });
        }
    }

    window.addEventListener("scroll",animationStripes)
});