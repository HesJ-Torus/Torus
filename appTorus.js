
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
	end:"100% top",
	pin:true,
	scrub:true,
});


gsap.from("#title1",{
	scrollTrigger:{
		trigger:".titaniumPin",
		id:"2",
		start:"0% 0",
		end:"+50% 0",
		scrub:2,
		ease: "power3.out",
		
	},
	y: () => window.innerHeight,
})
gsap.from("#title2",{
	scrollTrigger:{
		trigger:".titaniumPin",
		id:"2",
		start:"0% top",
		end:"+50% top",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title3",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+50% top",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title4",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+50% top",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title5",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+50% top",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title6",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+50% top",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title7",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+50% top",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from("#title8",{
	scrollTrigger:{
		trigger:".titaniumPin",
		ease: "power3.out",
		start:"0% top",
		end:"+50% top",
		scrub:2,
		ease: "power3.out",
	},
	y: () => window.innerHeight,
})
gsap.from(".titaniumImage",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:1,
		ease: "power3.out",
	},
	yPercent:-100,
})
gsap.from(".titaniumImageContainer",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:1,
		ease: "power3.out",
	},
	yPercent:100,
	y:100,
})
gsap.from("#intro1",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro2",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro3",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro4",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro5",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro6",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro7",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro8",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro9",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro10",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro11",{
	scrollTrigger:{
		trigger:".titaniumPin",
		start:"0% top",
		end:"+80% top",
		scrub:2,
	},
	y: () => window.innerHeight,
})









