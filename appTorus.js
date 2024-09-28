
gsap.registerPlugin(ScrollTrigger)

let timeline = gsap.timeline();


timeline.to(".imageWrap",{
	height: "500px",
	width: "17rem",
	duration: 1,
	ease: "power4.Out",
}).to(".imageWrap",{
	height: "300px",
	width: "12rem",
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
		start:"0 80%",
		end:"+=0 60%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	backgroundColor:"black",
});

gsap.to("main", {
	scrollTrigger:{
		trigger:".content",
		start:"-150 80%",
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


gsap.to(".imageWrap", {
	scrollTrigger:{
		trigger:".content",
		start:"top 100%",
		end:"+=300 50%",
		scrub:"true",
		toggleActions:"restart none reverse none",
	},
	bottom:"100%",
});

gsap.from(".titanium",{
	scrollTrigger:{
		trigger:".titanium",
		start:"top 100%",
		end:"bottom 80%",
		
		scrub:1,
	},
	fontSize:"4rem",
});

gsap.from(".titaniumText",{
	scrollTrigger:{
		trigger:".titaniumText",
		start:"top 100%",
		end:"bottom 80%",
		
		scrub:1,
	},
	fontSize:"2rem",
})

gsap.from(".section1Text",{
	scrollTrigger:{
		trigger:".section1Text",
		start:"top 100%",
		end:"bottom 80%",
		
		scrub:1,
	},
	fontSize:"1.5rem",
});

gsap.from(".section1Image",{
	scrollTrigger:{
		trigger:".section1Text",
		start:"bottom 90%",
		end:"bottom 90%",
		scrub:2,
	},
	x:1000,
});

gsap.from(".section2Text",{
	scrollTrigger:{
		trigger:".section2Text",
		start:"top 100%",
		end:"bottom 80%",
		scrub:1,
	},
	fontSize:"1.5rem",
});

gsap.from(".section2Image",{
	scrollTrigger:{
		trigger:".section2Text",
		start:"bottom 90%",
		end:"bottom 90%",
		scrub:2,
	},
	x:-1000,
});

gsap.from(".section3Text",{
	scrollTrigger:{
		trigger:".section3Text",
		start:"top 100%",
		end:"bottom 80%",
		scrub:1,
	},
	fontSize:"1.5rem",
});

gsap.from(".section3Image",{
	scrollTrigger:{
		trigger:".section3Text",
		start:"top 80%",
		end:"bottom 60%",
		scrub:2,
	},
	y:500
});




