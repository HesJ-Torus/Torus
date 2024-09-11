


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
	duration: 1.5,
	repeat: -1,
	repeatDelay: 5,
}, 2.5);

gsap.registerPlugin(ScrollTrigger) 

gsap.to(".content", {
	scrollTrigger:{
		trigger:".content",
		start:"80 80%",
		end:"+=300 50%",
		scrub:"true",
		markers: true,
		toggleActions:"restart none reverse none"
	},
	backgroundColor:"black",
});
gsap.to("main", {
	scrollTrigger:{
		trigger:".content",
		start:"80 80%",
		end:"+=300 50%",
		scrub:"true",
		markers: true,
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
	bottom:"100%"
});
gsap.to(".bigName", {
	scrollTrigger:{
		trigger:".content",
		start:"top 100%",
		end:"+=200 50%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	x:1000
});
gsap.to(".line", {
	scrollTrigger:{
		trigger:".content",
		start:"top 100%",
		end:"+=200 50%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	x:-1000
});
gsap.to(".scroll", {
	scrollTrigger:{
		trigger:".content",
		start:"top 100%",
		end:"+=200 50%",
		scrub:"true",
		toggleActions:"restart none reverse none"
	},
	x:1000
});
gsap.to(".socials", {
	scrollTrigger:{
		trigger:".content",
		start:"top 100%",
		end:"+=200 50%",
		scrub:"true",
		toggleActions:"restart none none none"
	},
	x:500
});
gsap.to(".bottomSection", {
	scrollTrigger:{
		trigger:".content",
		start:"top 100%",
		end:"+=200 50%",
		scrub:"true",
		toggleActions:"restart none none none"
	},
	x:-250
});








function getYDistance(el) {
	return(
	window.innerHeight - document.querySelector(el).getBoundingClientRect().
	top
	);
}
