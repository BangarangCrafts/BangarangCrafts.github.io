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

function howto(){
	var elmnt = document.getElementById("HowToMould");
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
/*pots//////////////////////////////////////////////////////////////////////*/
function hexpot(){
	/*HoneyCombClick()*/
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "block";
	PotDiv.style.display = "none";
	hexdiv.style.display = "block";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";
	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function potIS(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "block";
	hexpick.style.display = "none";
	PotDiv.style.display = "block";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";
	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function roundpot(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "block";
	roundiv.style.display = "block";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";
	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function recpot(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "block";
	recdiv.style.display = "block";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";
	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function Pollypot(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "block";
	pollypotdiv.style.display = "block";
	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function Oddpot(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";
	Oddpot.style.display = "block";
	Oddpotdiv.style.display = "block";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

/*Stock Info//////////////////////////////////////////////////////////////////////*/
/*Moulds//////////////////////////////////////////////////////////////////////*/

function hexmould(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "block";
	hexmouldiv.style.display = "block";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function roundmould(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "block";
	roundmouldiv.style.display = "block";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function roundmouldtwo(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "block";
	roundmoultwodiv.style.display = "block";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};

function recmould(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "block";
	recmoulpick.style.display = "block";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
	
};

function Pollymould(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "block";
	pollymoulpick.style.display = "block";	Oddmouldiv.style.display = "none";
	Oddmoulpick.style.display = "none";
};function Oddmould(){
	var elmnt = document.getElementById("IS");
	var Pickplus = document.getElementById("pot");
	var hexpick = document.getElementById("hexpick");
	var recpot = document.getElementById("recpick");
	var recpotdiv = document.getElementById("recdiv");
	var PotDiv = document.getElementById("potdiv");
	var hexdiv = document.getElementById("hexdiv");
	var roundpick = document.getElementById("roundpick")
	var roundiv = document.getElementById("roundiv")
	var pollypot = document.getElementById("PollyPick");
	var pollypotdiv = document.getElementById("Pollydiv");
	var Oddpot = document.getElementById("oddpick");
	var Oddpotdiv = document.getElementById("Odddiv");
	var hexmouldpick = document.getElementById("hexmouldpick")
	var hexmouldiv = document.getElementById("hexmouldiv")
	var roundmouldpick = document.getElementById("roundmouldpick")
	var roundmouldiv = document.getElementById("roundmouldiv")
	var roundmouldtwopick = document.getElementById("roundmoultwodpick")
	var roundmoultwodiv = document.getElementById("roundmoultwodiv")
	var recmoulpick = document.getElementById("recmouldpick")
	var recmouldiv = document.getElementById("recmouldiv")
	var pollymoulpick = document.getElementById("PollyMouldpick")
	var pollymouldiv = document.getElementById("PollyMouldiv")
	var Oddmoulpick = document.getElementById("OddMouldpick")
	var Oddmouldiv = document.getElementById("OddMouldiv")
	elmnt.scrollIntoView();
	Pickplus.style.display = "none";
	hexpick.style.display = "none";
	PotDiv.style.display = "none";
	hexdiv.style.display = "none";
	roundpick.style.display = "none";
	roundiv.style.display = "none";
	recpot.style.display = "none";
	recdiv.style.display = "none";
	pollypot.style.display = "none";
	pollypotdiv.style.display = "none";
	Oddpot.style.display = "none";
	Oddpotdiv.style.display = "none";
	hexmouldpick.style.display = "none";
	hexmouldiv.style.display = "none";
	roundmouldpick.style.display = "none";
	roundmouldiv.style.display = "none";
	roundmouldtwopick.style.display = "none";
	roundmoultwodiv.style.display = "none";
	recmouldiv.style.display = "none";
	recmoulpick.style.display = "none";
	pollymouldiv.style.display = "none";
	pollymoulpick.style.display = "none";
	Oddmouldiv.style.display = "block";
	Oddmoulpick.style.display = "block";
};
/*Copy to clipboard Function/////////////////////////////////*/
function copyemail(){
	var textcopy = document.getElementById("E_Button_P");
	var currentRange;
	if(document.getSelection().rangeCount > 0)
     {
          currentRange = document.getSelection().getRangeAt(0);
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          currentRange = false;
     } 
     var CopyRange = document.createRange();
     CopyRange.selectNode(textcopy);
     window.getSelection().addRange(CopyRange);
     document.execCommand("copy");
 
     window.getSelection().removeRange(CopyRange);
 
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
	 alert("email copyed to clipboard.");
};