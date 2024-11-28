
gsap.registerPlugin(ScrollTrigger)

let timeline = gsap.timeline();


timeline.from(".bigName", {
	y: getYDistance(".bigName"),
	duration: 1,
}).from(".bigName", {
	left:"6%",
	duration: 1,
}, 1).from(".hide",{
	opacity: "0", 
	duration: 1,
}, 1).from("main",{
	backgroundColor: "rgba(0,0,0,1)",
	duration: 1,
}, 1).to(".imageWrap",{
	rotation: 360,
	ease: "expo.out",
	duration: 2.5,
	repeat: -1,
	repeatDelay: 5,
}, 2.5);

function getYDistance(el) {
	return(
	window.innerHeight - document.querySelector(el).getBoundingClientRect().
	top
	);
}

gsap.to("html", {
	scrollTrigger:{
		trigger:".content",
		start:"-50 80%",
		end:"+=0 0%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	backgroundColor:"black",
});

gsap.to("main", {
	scrollTrigger:{
		trigger:".content",
		start:"-50 80%",
		end:"+=0 0%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	opacity:"0"
});



ScrollTrigger.create({
	trigger:".titaniumPin",
	start:"top top",
	end:"100% top",
	pin:true,
	scrub:true,
});


gsap.from("#title1",{
	scrollTrigger:{
		trigger:".bigPin",
		id:"1",
		start:"12% 0",
		end:"37% 0",
		scrub:1,
		ease: "power3.out",
		
	},
	y: () => window.innerHeight,
})
gsap.from("#title2",{
	scrollTrigger:{
		trigger:".bigPin",
		id:"2",
		start:"8% top",
		end:"33% top",
		scrub:1,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title3",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"2% top",
		end:"27% top",
		scrub:1,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title4",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"14% top",
		end:"39% top",
		scrub:1,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title5",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"0% top",
		end:"25% top",
		scrub:1,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title6",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"8% top",
		end:"34% top",
		scrub:1,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title7",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"6% top",
		end:"31% top",
		scrub:1,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title8",{
	scrollTrigger:{
		trigger:".bigPin",
		ease: "power3.out",
		start:"4% top",
		end:"29% top",
		scrub:1,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from(".titaniumImage",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"20% top",
		end:"45% top",
		scrub:1,
		ease: "power3.out",
	},
	yPercent:-100,
})
gsap.from(".titaniumImageContainer",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"20% top",
		end:"45% top",
		scrub:1,
		ease: "power3.out",
	},
	yPercent:100,
	y:500,
})
gsap.from("#intro1",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"10% top",
		end:"35% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro2",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"11% top",
		end:"36% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro3",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"12% top",
		end:"37% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro4",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"14% top",
		end:"39% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro5",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"13% top",
		end:"38% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro6",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"16% top",
		end:"41% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro7",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"17% top",
		end:"42% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro8",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"18% top",
		end:"43% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro9",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"19% top",
		end:"44% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro10",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"20% top",
		end:"45% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro11",{
	scrollTrigger:{
		trigger:".bigPin",
		start:"21% top",
		end:"46% top",
		scrub:1,
	},
	y: () => window.innerHeight,
})

gsap.from(".TiGrText",{
	scrollTrigger:{
		trigger:".TiGr",
		start:"40% 90%",
		end:"60% 70%",
		scrub:1,
		
	},
	transform: "scale(0.8)",
})
gsap.from(".TiGrText2",{
	scrollTrigger:{
		trigger:".TiGr",
		start:"50% 90%",
		end:"70% 70%",
		scrub:1,
		
	},
	transform: "scale(0.8)",
})
gsap.from(".TiCXText",{
	scrollTrigger:{
		trigger:".TiCX",
		start:"40% 90%",
		end:"60% 70%",
		scrub:1,
		
	},
	transform: "scale(0.8)",
})
gsap.from(".TiCXText2",{
	scrollTrigger:{
		trigger:".TiCX",
		start:"50% 90%",
		end:"70% 70%",
		scrub:1,
		
	},
	transform: "scale(0.8)",
})
gsap.from(".TiXCText",{
	scrollTrigger:{
		trigger:".TiXC",
		start:"40% 90%",
		end:"60% 70%",
		scrub:1,
		
	},
	transform: "scale(0.8)",
})
gsap.from(".TiXCText2",{
	scrollTrigger:{
		trigger:".TiXC",
		start:"50% 90%",
		end:"70% 70%",
		scrub:1,
		
	},
	transform: "scale(0.8)",
})

ScrollTrigger.refresh();






