
/*
In gsap agar humlog chate ha ke mera koi v element ka animation kahi se ho kar mera element ka orginal state ha wha thak aaye to uske liye humlog from ka use kar ta ha

and gsap.to ka mtlub ho ta ha ke mera jo element hai wo apne orginal position se animation ka traf jaye ga

if we want to apply same animation on two element or collection of element then we can use the array bracket and apply the animation syntac is :- gsap.from([element1, element2,....element.N],{
    
})
*/




// ! this entire code is for create a custom cursor
const crsr = document.querySelector("#cursor");
const crsrBlur = document.querySelector("#cursor-blur");

// humlog apna pura page me eventlistener laga diye and name of the event listner is mousemove and call back function lega mera ek dets parameter and ya dets humlog ko dega jaise he humlog mouse ko move kar te ha to mouse ka sath kiya kiya ho ta ha wo bateya ga
document.addEventListener("mousemove", function(dets){
    // humlog jaise he apna cursor ko x-axis me lejate chaiye koi v direction me to mera jo custom cursor ha wo v mera x direction me jana chaiye and same for y-axis and ya par humlog 30 islye kiye kuki jub humlog h4 tag me ja rahe ha to humlog scal 1 and 0 kar rahe ha to wo thora fast fast ho rahe ha jo ke acha nhi lag rahe ha to humlog custom pointer ko thora dur rakhe ha apna orginal pointer se
    crsr.style.left = dets.x+30+ "px"; 
    crsr.style.top = dets.y+ "px"; 

    // same mera blur v sath me jaye ga and ek problem humlog dekh skte he ke mera jo blur section ha wo mera sath nhi chal rha ha uska left corner chal rahe ha mera sath to wo problem ko solve kar na ho ga
    crsrBlur.style.left = dets.x - 200 + "px"; 
    crsrBlur.style.top = dets.y- 200+ "px"; 
})


// humlog access kar liye mera jitna ha h4 of nav-section
var h4all = document.querySelectorAll(".nav-section h4");

h4all.forEach(function(element){
    element.addEventListener("mouseenter", function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent"
    })

    element.addEventListener("mouseleave", function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid ##95C11E";
        crsr.style.backgroundColor = "#95C11E"
    })
})


// humlog ka jaise he page load ho ga mera nav-section lage ga ke upper se aa rahe ha wo animation use kare ge
gsap.from(".nav-section",{
    opacity: 0,
    scale:1.7,
    duration:1, 
})

// same for the page-1 ka h1
gsap.from(".page-1 h1",{
    opacity:0,
    scale: 1.3,
    duration:1
})
// sub se phele humlog ko bata na ho ta ha ke kon se element par animation laga na ha and ek set of properity define kar ta ha ke ya properity use kar na ha jub scroll kare ge tub

// to humlog ka smoth scrol ready ho gya ha jaise he humlog scrol kare ge to humlog ka nav bar ka background change ho jaye ga height kam ho jaye ga with the help of gsap
gsap.to(".nav-section", {
    backgroundColor: "#000",
    duration:0.5,
    height: "90px",

    scrollTrigger:{
        trigger:".nav-section",

        
        scroller:"body",

        // markers:true,

        // humlog jo jo properity set kiye ha wo kub start ho ga wo set kar diye and end kub ho ga wo set kar diye
        start: "top -10%",
        end:"top -11%",

        // scub use ho ta ha jaise he mera animation apply ho ga wo smooth way agar kar na chate ha to humlog ko scrub ka use kar na 
        scrub:1
    }
})

// ab humlog jaise he 2nd page ka under jate ha to humlog ka background change ho jata ha to wo effect ko lane ka liye humlog phir se gsap ka use kar ge

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger:{

        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 0.5
    }
})


// ab humlog jaise humlog page 2 scroll kare ga to humlog kuch animation add kar na chate ha to humlog uske liye gsap lagye ge and humlog page 2 ka under about-us and about-us-in ka under animation lagye ge and ainmation ho ga phele to jaise he humlog scroll kare ge to mera content ek ek kar ke upper ana start ho ga
gsap.from("#about-us img,#about-us-in", {
    y:50,
    opacity:0,
    duration:1,
    // stagger mean ho ta ha ke ek ek kar ke element upper ayye ga
    stagger: 0.4,
    
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub:2
    }
})

// same animation humlog card me v apply kar de
gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start: "top 70%",
        end: "top 65%",
        scrub:1
    }
})

// ab humlog colon jo tha usme animation lagaye ge
gsap.from("#colon-1",{

    // humlog ka ya y ya phir x mera direction represent kar ta ha
    y: -70,
    x: -70,

    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})

gsap.from("#colon-2",{

    // humlog ka ya y ya phir x mera direction represent kar ta ha
    y: 70,
    x: 70,

    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})

// now we apply animation for the page 4 and the animation will be the same as card animation

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        start: "top 75%",
        end: "top 70%",
        scrub:3
    }
})