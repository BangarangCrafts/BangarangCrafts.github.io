/*variables ####################################################*/
/*rand=parseFloat(rand).toFixed(1);*/
var quant = 1;
var rand = 40;
var aramex = 100;
var totalvar = 0; 


/*Function Plus ###############################################*/

function plus(){	
	++quant
 document.getElementById("Pquan")
.innerHTML = +quant
if(quant <=2){
	rand =40*quant
}
if(quant >=3){
	 rand =35*quant
	
}
document.getElementById("Prand")
.innerHTML = +rand
if(quant >=1){
	var min = document.getElementById("minus")
	min.style.display = "block";
}
if(quant >=9){
	var plu = document.getElementById("plus")
	plu.style.display = "none";
}
if(quant >=7){
	aramex =100*2
	document.getElementById("prara")
	.innerHTML = +aramex
}

document.getElementById("TotalInP")
.innerHTML = rand +0	


if(totalvar == 1){
document.getElementById("TotalInP")
.innerHTML = rand+100

}

if(totalvar == 1 && quant >= 7){
document.getElementById("TotalInP")
.innerHTML = rand+200

}

};


/*Function Minus ###############################################*/

function minus(){
	
	--quant
 document.getElementById("Pquan")
.innerHTML = +quant
if(quant <=2){
	rand =40*quant
}
if(quant >=3){
	 rand =35*quant
	
}
document.getElementById("Prand")
.innerHTML = +rand
if(quant <=1){
	var min = document.getElementById("minus")
	min.style.display = "none";
}
if(quant <=9){
	var plu = document.getElementById("plus")
	plu.style.display = "block";
}
if(quant <7){
	aramex =100*1
	document.getElementById("prara")
	.innerHTML = +aramex 
}

if(totalvar == 0){
document.getElementById("TotalInP")
.innerHTML = rand+0

}

if(totalvar == 1){
document.getElementById("TotalInP")
.innerHTML = rand+100

}

if(totalvar == 1 && quant >= 7){
document.getElementById("TotalInP")
.innerHTML = rand+200

}

};

/*Function Display toggle ###############################################*/

function toggleA(){
	
	ARPlus()

	var AraButton = document.getElementById("PickAra")
	AraButton.style.border ="2px solid green"
	var DisplayA = document.getElementById("pship")
	DisplayA.style.display ="block"
	var DisplayC = document.getElementById("pshipC")
	DisplayC.style.display ="none"
	var ColButton = document.getElementById("Pickup")
	ColButton.style.border ="1px solid black"
	var Displayara = document.getElementById("divara")
	Displayara.style.display ="block"
	var Displayaratwo = document.getElementById("divaratwo")
	Displayaratwo.style.display ="none"		
	
};


function toggleC(){
	
	ARminus()

	var ColButton = document.getElementById("Pickup")
	ColButton.style.border ="2px solid green"
	var Displaycol = document.getElementById("pshipC")
	Displaycol.style.display ="block"
	var DisplayA = document.getElementById("pship")
	DisplayA.style.display ="none"
	var AraButton = document.getElementById("PickAra")
	AraButton.style.border ="1px solid black"
	var Displayara = document.getElementById("divara")
	Displayara.style.display ="none"
	var Displayaratwo = document.getElementById("divaratwo")
	Displayaratwo.style.display ="block"
};

/*Function Total ###############################################*/

function ARPlus(){
	
	totalvar =0+1
	
	if(totalvar == 1){
document.getElementById("TotalInP")
.innerHTML = rand+100

}
	if(totalvar == 1 && quant >= 7){
document.getElementById("TotalInP")
.innerHTML = rand+200

}
};

function ARminus(){

	totalvar =0+0
	if(totalvar == 0){
document.getElementById("TotalInP")
.innerHTML = rand+0

}
};
