
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

gsap.to(".content", {
	scrollTrigger:{
		trigger:".content",
		start:"-50 80%",
		end:"+=0 50%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	backgroundColor:"black",
});

gsap.to("main", {
	scrollTrigger:{
		trigger:".content",
		start:"-50 80%",
		end:"+=0 50%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	opacity:"0"
});

gsap.to(".mainAni", {
	scrollTrigger:{
		trigger:".content",
		start:"0 80%",
		end:"+=0 60%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	backgroundColor:"black"
});

ScrollTrigger.create({
	trigger:".titaniumPin",
	start:"top top",
	end:"+=1300",
	pin:true,
	scrub:true,
});


gsap.from("#title1",{
	scrollTrigger:{
		trigger:".content",
		id:"1",
		start:"top top",
		end:"+500 top",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title2",{
	scrollTrigger:{
		trigger:".content",
		id:"2",
		start:"200 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title3",{
	scrollTrigger:{
		trigger:".content",
		start:"90 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title4",{
	scrollTrigger:{
		trigger:".content",
		start:"top top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title5",{
	scrollTrigger:{
		trigger:".content",
		start:"150 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title6",{
	scrollTrigger:{
		trigger:".content",
		start:"top top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title7",{
	scrollTrigger:{
		trigger:".content",
		start:"270 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#title8",{
	scrollTrigger:{
		trigger:".content",
		start:"60 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from(".titaniumImage",{
	scrollTrigger:{
		trigger:".content",
		start:"200 top",
		end:"+=500",
		scrub:1,
	},
	yPercent:-100,
})
gsap.from(".titaniumImageContainer",{
	scrollTrigger:{
		trigger:".content",
		start:"200 top",
		end:"+=500",
		scrub:1,
	},
	yPercent:100,
	y:100,
})
gsap.from("#intro1",{
	scrollTrigger:{
		trigger:".content",
		start:"320 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight,
})
gsap.from("#intro2",{
	scrollTrigger:{
		trigger:".content",
		start:"340 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight + 150,
})
gsap.from("#intro3",{
	scrollTrigger:{
		trigger:".content",
		start:"360 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro4",{
	scrollTrigger:{
		trigger:".content",
		start:"380 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro5",{
	scrollTrigger:{
		trigger:".content",
		start:"400 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro6",{
	scrollTrigger:{
		trigger:".content",
		start:"420 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro7",{
	scrollTrigger:{
		trigger:".content",
		start:"440 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro8",{
	scrollTrigger:{
		trigger:".content",
		start:"460 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro9",{
	scrollTrigger:{
		trigger:".content",
		start:"480 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro10",{
	scrollTrigger:{
		trigger:".content",
		start:"500 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})
gsap.from("#intro11",{
	scrollTrigger:{
		trigger:".content",
		start:"520 top",
		end:"+=500",
		scrub:2,
	},
	y: () => window.innerHeight - 40,
})









