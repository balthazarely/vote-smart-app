// document.addEventListener("DOMContentLoaded", function() {
// 	console.log("asasfhi");
// });

var tl = new TimelineMax();
tl.from(".logo-wrapper-end", 1.7, {
	opacity: 0,
	y: 15,
	ease: "power4.out",
	delay: 0.25
});
tl.from(".end-body", 1.7, {
	opacity: 0,
	y: 15,
	ease: "power4.out",
	delay: -1.5
});
tl.from(".btn-inverse", 1.7, {
	opacity: 0,
	y: 15,
	ease: "power4.out",
	delay: -1.5
});
