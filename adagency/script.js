gsap.from("#stats-div, #stats-img, #stats-text, #speak-div-2",{
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
gsap.from("#offer-div, #offer-1, #offer-2, #offer-1 :is(span,p)",{
    y:50,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#offer-div",
        scroller:"body",
        start:"top 80%",
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