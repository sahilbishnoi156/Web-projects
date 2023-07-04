gsap.from("#stats-div, #stats-img, #stats-text",{
    y:50,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#stats-div",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
});
gsap.from("#offer-1, #offer-2, #offer-1 p",{
    y:50,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"#offer-div",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
});
gsap.from("#companies, .company",{
    y:50,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:"#companies",
        scroller:"body",
        start:"top 80%",
        end:"top 85%",
        scrub:2
    }
});

var companies_li = document.getElementById("#companies-li")
var services_li = document.getElementById("#services-li")
var revenue_li = document.getElementById("#revenue-li")