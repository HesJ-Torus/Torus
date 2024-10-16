
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

gsap.from(".titaniumText",{
	scrollTrigger:{
		trigger:".titaniumText",
		start:"top 90%",
	},
	fontSize:"2rem",
})

gsap.from(".titanium1",{
	scrollTrigger:{
		trigger:".titanium1",
		start:"top 100%",
		end:"bottom 80%",
		duration:1,
	},
	left:"0%",
})

gsap.from(".titanium2",{
	scrollTrigger:{
		trigger:".titanium2",
		start:"top 100%",
		end:"bottom 80%",
		duration:1,
	},
	
	left:"0%",
})

gsap.from(".titanium3",{
	scrollTrigger:{
		trigger:".titanium3",
		start:"top 100%",
		end:"bottom 80%",
		duration:1,
	},
	
	left:"0%",
})






