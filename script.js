// mobile menu
const nav = document.querySelector("nav");
const menuOpen = document.querySelector(".fa-bars");
const menuClose = document.querySelector(".fa-xmark");

menuOpen.onclick = function () {
	nav.style.insetInlineStart = "0";
};

menuClose.onclick = function () {
	nav.style.insetInlineStart = "-100%";
};

// mobile menu submenu
const arrow = document.querySelector(".fa-angle-down");

arrow.onclick = function () {
	nav.classList.toggle("show");
};

// preview color changer

const btnV2R = document.querySelector("#V2-red-btn");
const btnV2W = document.querySelector("#V2-white-btn");
const imgV2 = document.querySelector("#V2-img");

const btnV4 = document.querySelector("#V4-btn");
const btnV4S = document.querySelector("#V4S-btn");
const imgV4 = document.querySelector("#V4-img");

const btn950 = document.querySelector("#SS950-btn");
const btn950S = document.querySelector("#SS950S-btn");
const cbtn950R = document.querySelector("#SS950-red-btn")
const cbtn950W = document.querySelector("#SS950-white-btn")
const img950 = document.querySelector("#SS950-img");

btnV2R.onclick = function () {
	imgV2.classList.replace("V2-white-img", "V2-red-img");
	btnV2R.classList.add("btn-active");
	btnV2W.classList.remove("btn-active");
};

btnV2W.onclick = function () {
	imgV2.classList.replace("V2-red-img", "V2-white-img");
	btnV2R.classList.remove("btn-active");
	btnV2W.classList.add("btn-active");
};

btnV4.onclick = function () {
	imgV4.classList.replace("V4S-img", "V4-img");
	btnV4.classList.add("btn-active");
	btnV4S.classList.remove("btn-active");
};

btnV4S.onclick = function () {
	imgV4.classList.replace("V4-img", "V4S-img");
	btnV4.classList.remove("btn-active");
	btnV4S.classList.add("btn-active");
};

btn950.onclick = function () {
	if (img950.classList.contains("SS950SR-img")) {
		img950.classList.replace("SS950SR-img", "SS950-img");
	} else {
		img950.classList.replace("SS950SW-img", "SS950-img");
	}
	cbtn950W.classList.add("rmvbtn");
	btn950.classList.add("btn-active");
	btn950S.classList.remove("btn-active");
};

btn950S.onclick = function () {
	img950.classList.replace("SS950-img", "SS950SR-img");
	cbtn950W.classList.remove("rmvbtn");
	btn950.classList.remove("btn-active");
	btn950S.classList.add("btn-active");
};

cbtn950R.onclick = function () {
	img950.classList.replace("SS950SW-img", "SS950SR-img");
	cbtn950R.classList.add("btn-active");
	cbtn950W.classList.remove("btn-active");
};

cbtn950W.onclick = function () {
	img950.classList.replace("SS950SR-img", "SS950SW-img");
	cbtn950R.classList.remove("btn-active");
	cbtn950W.classList.add("btn-active");
};

// Google maps

function initMap() {
	// The location
	const myHome = { lat: 52.553514857741845, lng: 4.656801945786362 };
	// The map, centered
	const map = new google.maps.Map(document.getElementById("map-container"), {
		zoom: 16,
		center: myHome,
	});
	// The marker, positioned
	const marker = new google.maps.Marker({
		position: myHome,
		map: map,
	});
}

window.initMap = initMap;