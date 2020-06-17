
function displaydropdown(){
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "block";
};

function hidedropdown(){
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
};

function Home(){
	document.documentElement.scrollTop = 0;
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
};

function About(){
	var elmnt = document.getElementById("AM");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
};

function MoreItems(){
	var elmnt = document.getElementById("MI");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
};

function WhereandWhen(){
	var elmnt = document.getElementById("WW");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
};

function Contact(){
	var elmnt = document.getElementById("C");
	elmnt.scrollIntoView();
	var disdropdown = document.getElementById("dropdown");
		disdropdown.style.display = "none";
};