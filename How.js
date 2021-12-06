
/*Email Copy-----------------------------------------------------------------*/
function copyemail(){
	var textcopy = document.getElementById("email_P");
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

/*Number Copy-----------------------------------------------------------------*/
function copnumber(){
	var textcopy = document.getElementById("number_p");
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
	 alert("Number copyed to clipboard.");
};