/*Dropdown Navigation////////////////////////////////////////////////////////////*/ 
function displaydropdown(){
	var disdropdown = document.getElementById("dropdown");
	var icondown = document.getElementById("drop");
	var iconup = document.getElementById("hidedrop");
		disdropdown.style.display = "block";
		icondown.style.display = "none";
		iconup.style.display = "block";
};

function hidedropdown(){
	var disdropdown = document.getElementById("dropdown");
	var icondown = document.getElementById("drop");
	var iconup = document.getElementById("hidedrop");
		disdropdown.style.display = "none";
		icondown.style.display = "block";
		iconup.style.display = "none";
};

function Home(){
	document.documentElement.scrollTop = 0;
	var disdropdown = document.getElementById("dropdown");
	var icondown = document.getElementById("drop");
		disdropdown.style.display = "none";
		icondown.style.display = "block";
};

function About(){
	var elmnt = document.getElementById("AM");
	var icondown = document.getElementById("drop");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
		icondown.style.display = "block";
};

function MoreItems(){
	var elmnt = document.getElementById("MI");
	var icondown = document.getElementById("drop");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
		icondown.style.display = "block";
};

function WhereandWhen(){
	var elmnt = document.getElementById("WW");
	var icondown = document.getElementById("drop");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
		icondown.style.display = "block";
};

function Contact(){
	var elmnt = document.getElementById("C");
	var icondown = document.getElementById("drop");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
		icondown.style.display = "block";
};

/*Stock Info//////////////////////////////////////////////////////////////////////*/

function hexpot(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "block";
	PotDiv.style.display = "none";
	hexdiv.style.display = "block";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
};

function potIS(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "block";
	hexpick.style.display = "none";
	PotDiv.style.display = "block";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
};

function roundpot(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "block";
	roundiv.style.display = "block";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
};

function hexmould(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	hexmouldpick.style.display = "block";
	hexmouldiv.style.display = "block";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
};

function roundmould(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "block";
	roundmouldiv.style.display = "block";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	
};

function roundmouldtwo(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "block";
	roundmoultwodiv.style.display = "block";
	
};






































