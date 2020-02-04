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

let btn = document.getElementById("game-btn");
btn.addEventListener("click", function() {
	var tl = new TimelineMax();

	tl.to(".logo-wrapper-end, .end-body, .btn-inverse", 1, {
		opacity: 0,
		y: 15,
		ease: "power4.out"
	});

	console.log("ya clicked?");
	setTimeout(function() {
		window.location.href = "game.html";
	}, 500);
});
