
gsap.registerPlugin(ScrollTrigger)

let timeline = gsap.timeline();


timeline.to(".imageWrap",{
	height: "500px",
	width: "17rem",
	duration: 1,
	ease: "power4.Out",
}).to(".imageWrap",{
	height: "300px",
	width: "13rem",
	duration: 1,
	y: "0",
	ease: "power4.Out",
}, 1).from(".bigName", {
	y: getYDistance(".bigName"),
	duration: 1,
}, 1).from(".hide",{
	opacity: "0", 
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
	end:"+=1600",
	pin:true,
	scrub:true,
});


gsap.from("#title1",{
	scrollTrigger:{
		trigger:".content",
		id:"2",
		start:"225 top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title2",{
	scrollTrigger:{
		trigger:".content",
		id:"2",
		start:"425 top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title3",{
	scrollTrigger:{
		trigger:".content",
		start:"600 top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title4",{
	scrollTrigger:{
		trigger:".content",
		start:"75 top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title5",{
	scrollTrigger:{
		trigger:".content",
		start:"500 top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title6",{
	scrollTrigger:{
		trigger:".content",
		start:"top top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title7",{
	scrollTrigger:{
		trigger:".content",
		start:"550 top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title8",{
	scrollTrigger:{
		trigger:".content",
		ease: "power3.out",
		start:"150 top",
		end:"+=500",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight - 40,
})
gsap.from(".titaniumImage",{
	scrollTrigger:{
		trigger:".content",
		start:"500 top",
		end:"+=500",
		scrub:1,
		ease: "power3.out",
	},
	yPercent:-100,
})
gsap.from(".titaniumImageContainer",{
	scrollTrigger:{
		trigger:".content",
		start:"500 top",
		end:"+=500",
		scrub:1,
		ease: "power3.out",
	},
	yPercent:100,
	y:100,
})
gsap.from("#intro1",{
	scrollTrigger:{
		trigger:".content",
		start:"620 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro2",{
	scrollTrigger:{
		trigger:".content",
		start:"640 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight + 150,
})
gsap.from("#intro3",{
	scrollTrigger:{
		trigger:".content",
		start:"660 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro4",{
	scrollTrigger:{
		trigger:".content",
		start:"680 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro5",{
	scrollTrigger:{
		trigger:".content",
		start:"700 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro6",{
	scrollTrigger:{
		trigger:".content",
		start:"720 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro7",{
	scrollTrigger:{
		trigger:".content",
		start:"740 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro8",{
	scrollTrigger:{
		trigger:".content",
		start:"760 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro9",{
	scrollTrigger:{
		trigger:".content",
		start:"780 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro10",{
	scrollTrigger:{
		trigger:".content",
		start:"800 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro11",{
	scrollTrigger:{
		trigger:".content",
		start:"820 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})









