

$(document).ready(function (){
	
	var QuoteTap = "";
	// jQuery.each(ancientArray, function()


function quoteShow() {
	
	var ancientArray = ["\"Without struggle, there is no progress\" - Frederick Douglass", "\"With great power comes great responsibility\"-Voltaire", "\"A happy life consists in tranquility of mind.\" -Cicero"       
	, "\"Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners.\"- Vladimir Lenin", "\"The best way to find yourself is to lose yourself in the service of others.\" -Mahatma Gandhi",
	"\"For everyone who exalts himself will be humbled, and everyone who humbles himself will be exalted.\"- Jesus Christ"
	,"\"Stumbling is not falling.\" - Malcolm X", "\"The mind is everything. What you think, you become.\"-Buddha", "\"Our greatest glory is not in never falling, but in rising everytime we fall.\" -Confucius",
	"\"It's fine to celebrate success but it is more important to heed the lessons of failure\" -Confucius",
 	"\"It is always more difficult to fight against faith than against knowledge.\"-Adolf Hitler",
 	"\"All grand thoughts come from the heart\"- Luc de Clapiers","\"The man who has no imagination has no wings.\"- Muhammad Ali",
 	"\"Faith is taking the first step even when you don't see the whole staircase.\"- Martin Luther King, Jr.", "\"Prayer is as natural an expression of faith as breathing is of life.\" -Jonathan Edwards",
 	"\"It seems like every time you come up something happens to bring you back down\"-Tupac Shakur"];
	var slapIt = "" ;
	


		slapIt+= "<p>" + ancientArray[Math.floor(Math.random() * ancientArray.length)];
	

return slapIt;


}

document.getElementById("ancientArray").innerHTML=quoteShow();





})

function reload() {
location.reload();


}

//var AncientQuotesList = ["\"Without struggle, there is no progress\" - Frederick Douglass"];


// $(document).ready(function()




// $("#QuoteSpot").click()function {

// ShowQuote();




// } 




// function ShowQuote(){s
	
// alert("we dont need no stinkin badap");
// }

// function alertMsg() {
// 	alert("we dont neeed no stinking badap")
// }

