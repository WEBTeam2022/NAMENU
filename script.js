const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();
tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
    .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")


function ScrollUp() {
    var t, s;
    s = document.body.scrollTop || window.pageYOffset;
    t = setInterval(function() {
        if (s > 0) window.scroll(0, s -= 80);
        else clearInterval(t)
    }, 1);
}

let numOfWorksItem = querySelectorAll('.works-photo').length
console.log(numOfWorksItem)
querySelectorAll('.works-item').animated('bounceInLeft', 'fadeOut')