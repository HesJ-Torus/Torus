


let timeline = gsap.timeline();


timeline.to(".imageWrap",{
	height: "500px",
	width: "15rem",
	duration: 1,
	ease: "power4.Out",
}).to(".imageWrap",{
	height: "300px",
	width: "10rem",
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

gsap.registerPlugin(ScrollTrigger) 

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
		toggleActions:"restart none reverse none"
	},
	bottom:"100%",
});

gsap.from(".contentHead",{
	scrollTrigger:{
		trigger:".content",
		start:"0 80%",
		end:"+=0 10%",
		scrub:1,
		toggleActions:"restart none reverse none"
	},
	opacity:"0",
	fontSize: "6rem",
	
});

gsap.to(".content1", {
	scrollTrigger:{
		trigger:".content1",
		markers:true,
		start:"center 65%",
		end:"+=0 50%",
		scrub:2,
		toggleActions:"restart none reverse none",
	},
	width:"100%"
});



gsap.to(".content2", {
	scrollTrigger:{
		trigger:".content2",
		start:"center 65%",
		end:"+=0 50%",
		scrub:2,
		toggleActions:"restart none reverse none"
	},
	width:"100%",
});
gsap.to(".content3", {
	scrollTrigger:{
		trigger:".content3",
		start:"center 65%",
		end:"+=0 50%",
		scrub:2,
		toggleActions:"restart none reverse none"
	},
	width:"100%",
});








function getYDistance(el) {
	return(
	window.innerHeight - document.querySelector(el).getBoundingClientRect().
	top
	);
}
