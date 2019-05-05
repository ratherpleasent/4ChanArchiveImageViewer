document.body.style.backgroundColor = "gray";
var count =0; 
var imagesArray = document.getElementsByClassName("fileThumb"); 
var first; 
var bumper=0; 
var t;
var urlArray=[]; 
var ch=0; 
var imageID=[]; 

	
	var $input = $('<p><input type="button" value="Start" id="b" >');
     $input.prependTo($("body"));
	 $("#b").after("<img src=\"https://web.njit.edu/~ic56/archive/white.png\" class=\"whiteImage\" id=\"white\">");
	 
	 $input = $('<p><input type="button" value="Hide " id="h" >');
     $input.prependTo($("body"));
	 $("#h").after("<img src=\"https://web.njit.edu/~ic56/archive/white.png\" class=\"whiteImage2\" id=\"white2\">");
	 
	 $("#w").hide(); 
		$("#s").hide(); 
		$("#h").hide(); 
		$("#white2").hide(); 
		
		 $("#b").after("<div id=\"message\" ></div>"); 
	 $("#message").after("<div id=\"imageView\" ></div>"); 
	 
	 var image = document.getElementById("message"); 
	 
	 image.innerHTML +='<img src="https://web.njit.edu/~ic56/archive/w.png" class="next" id="w" >';
	 $("#w").hide();
	 
	 image.innerHTML +='<img src="https://web.njit.edu/~ic56/archive/s.png" class="back" id="s" >';
	 $("#s").hide();
	 
	 image.innerHTML +='<img src="https://web.njit.edu/~ic56/archive/d.png" class="download" id="d" >';
	 $("#d").hide();
	 
	 image.innerHTML +='<img src="https://web.njit.edu/~ic56/archive/escape.png" class="exit" id="e">';
	 $("#e").hide(); 
	 
	 console.log("Before pre load."); 
preLoad(); 
console.log("After pre load."); 
console.log("urlArray length : "+urlArray.length); 
$(".myImage").hide(); 
	 
	 $("#w").click(function()
	 {
		count++;
		console.log("t : "+t);
		console.log("count : "+count); 
	 if(count>=t)
	 {count=0;
		 $("#b").prop("value","Open"); 
		$(".myImage").hide();
		$("#w").hide(); 
		$("#s").hide();
		return;
	 }
	 bumper++; 
	    $("#theImage"+(count-1)).hide(); 
	document.getElementById("theImage"+(count-1)).volume=0.0; 
	 func(); 
	 return; 
		 
	 }
	 );
	 
	 $("#s").click(function()
	 {
		$("#theImage"+(count)).hide(); 
	document.getElementById("theImage"+(count)).volume=0.0; 
	 goBack();
     func();  
	 return; 
	 }
 
	 );
	 
	 $("#b").click(function(){ 
	 if(localStorage.getItem("in")=="null" || localStorage.getItem("in") == null )
	{
		  
		localStorage.setItem("in",1); 
		$("#b").prop("value","ESC."); 
		$("#w").show();
		$("#s").show(); 
		$("#e").show(); 
		$("#d").show(); 
		$("#h").show(); 
		$("#white2").show(); 
		func();
	}
	else if(localStorage.getItem("in") == 1)
	{
		localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","Open"); 
		$(".myImage").hide();
		$("#w").hide(); 
		$("#s").hide(); 
		$("#e").hide(); 
		$("#d").hide();
		$("#h").hide(); 
		$("#white2").hide();
		
		
		return;
	}
	else if(localStorage.getItem("in") == 0)
	{
		localStorage.setItem("in",1); 
		$("#b").prop("value","ESC."); 
			$("#w").show();
		$("#s").show();
        $("#e").show(); 
		$("#d").show(); 
        $("#h").show();		
		$("#white2").show(); 
		func();
	} });
	
	 $("#e").click(function(){ 
	 if(localStorage.getItem("in")=="null" || localStorage.getItem("in") == null )
	{
		  
		localStorage.setItem("in",1); 
		$("#b").prop("value","ESC."); 
		$("#w").show();
		$("#s").show(); 
		$("#e").show(); 
		$("#d").show(); 
		$("#h").show(); 
		$("#white2").show(); 
		func();
	}
	else if(localStorage.getItem("in") == 1)
	{
		localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","Open"); 
		$(".myImage").hide();
		$("#w").hide(); 
		$("#s").hide(); 
		$("#e").hide(); 
		$("#d").hide(); 
		$("#white2").hide(); 
		$("#h").hide(); 
		
		
		return;
	}
	else if(localStorage.getItem("in") == 0)
	{
		localStorage.setItem("in",1); 
		$("#b").prop("value","ESC."); 
			$("#w").show();
		$("#s").show();
        $("#e").show(); 
		$("#d").show(); 
$("#white2").show(); 
$("#h").show(); 		
		func();
	} });
	
	$("#h").click(function(){
		
		if(ch%2==0)
		{
		$("#w").hide(); 
		$("#s").hide(); 
		$("#e").hide(); 
		$("#d").hide();
		
		$("#h").prop("value","Show"); 
		
		ch++;
		}
		else
		{
	    $("#w").show();
		$("#s").show(); 
		$("#e").show(); 
		$("#d").show(); 
		
		$("#h").prop("value","Hide"); 
		
		ch++; 
			
		}
		
	}
	);
		
	
	$("#d").click(function() {
    
     var link = document.createElement('a');
                  link.href = urlArray[count];  // use realtive url 
                  link.download = urlArray[count];
                  document.body.appendChild(link);
                  link.click();  
});
	
	
	
	
	 
function func()
{ 
console.log("in Func"); 
	var id = goForward(); 
 
	var view = document.getElementById("theImage"+count); 
	console.log("theImage"+count); 
 
	window.location.hash = ("#"+id);
 
	
	
 
 
 	 
		
		
	 
		view.style.display="block";
		view.volume = 0.2; 
		view.autoplay = false;
		view.autoplay = true;
 
	
	
	
 
	
	
 
	
}

$(document).keydown(function(e){
	
  console.log(e.keyCode); 
 
 //w== 87
 //s== 83
 if(localStorage.getItem("in")==1)
 {
 if(e.keyCode==87)
 {
	 count++;
	 if(count>=t)
	 {count=0;
		 $("#b").prop("value","Open"); 
		$(".myImage").hide();
		$("#w").hide(); 
		$("#s").hide();
		$("#e").hide(); 
		$("#white2").hide();
		$("#h").hide();
		$("#d").hide();
		return;
	 }
	 bumper++; 
	    $("#theImage"+(count-1)).hide(); 
	document.getElementById("theImage"+(count-1)).volume=0.0; 
	 func(); 
	 return;
 }
 
 if(e.keyCode==83)
 {
	    $("#theImage"+(count)).hide(); 
	document.getElementById("theImage"+(count)).volume=0.0; 
	 goBack();
     func(); 
	  return; 
	 }
	 
	
	 
 }
 
 if(e.keyCode==27)
 {
	 console.log("Here in escape."); 
	 localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","Open"); 
		$(".myImage").hide();
		
		$("#w").hide(); 
		$("#s").hide(); 
		$("#e").hide(); 
		$("#d").hide();
		$("#h").hide();
		$("#white2").hide(); 
		
		return;
	 
 }
 
 if(e.keyCode==68)
 {
	 //download
	 
	  var link = document.createElement('a');
                  link.href = urlArray[count];  // use realtive url 
                  link.download = urlArray[count];
                  document.body.appendChild(link);
                  link.click();  
 }
 
  
 
});

function goBack()
{
	$("#theImage"+count).hide(); 
	document.getElementById("theImage"+count).volume=0.0; 
	if(count!=0)
	 {
		 count--;
		 bumper--; 
		 
		 var elements = document.getElementsByTagName("article");
 
	var className = elements[bumper].className;
 
	var issue = 0; 
 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		bumper--;
		className = elements[bumper].className;
 
		issue=1; 
		
	}
	}
}

function goForward()//just returns id and increments bumper
{
	var elements = document.getElementsByTagName("article");
 
	 
	var className = elements[bumper].className;
 
	
	var issue = 0; 
 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		bumper++;
		className = elements[bumper].className;
 
		
		issue=1; 
		
	}
 
    var id = elements[bumper].id;
	
	return id; 
	
	
}



function preLoad()
{
	
	var thread = document.getElementsByClassName("post_file_filename")
	t=thread.length;
	console.log("Files length : "+t); 
	var view = document.getElementById("imageView"); 
	var post="";
	for(i=0;i<thread.length;i++)
	{
		post=""; 
	
     if(i>1)
	 {
		 $("#theImage"+(i-1)).hide;
		 document.getElementById("theImage"+(i-1)).volume=0.0; 
		// console.log("Append."); 
	 }
 
 
	
	  
 
	 
  
		var string = thread[i].toString();
		
	  
       console.log("string of i : "+string); 
		
		if(string.substring(0,5) != "https")
        {
			string = "https"+string.substring(4,string.length);
		}
		var end = string.substring(string.length-4,string.length);
 
 	 
		
		
	if(end!="webm")  
	{
 
	post += "<img id=\"theImage"+i+"\" class=\"myImage\" src=\""+string+"\" >";
	//view.style.display="hidden"; 
	urlArray[i]=string; 
	}
	else
	{ 
		post += "<video id=\"theImage"+i+"\" width=\"auto\" height=\"650\" class=\"myImage\" controls autoplay ><source src=\""+string+"\" type=\"video/webm\">";
		
		//document.getElementById("theImage"+i).volume = 0.0; 
		//view.style.display="hidden";
		urlArray[i]=string; 
	 
	}
	
	$("#imageView").after(post);  
	
	// console.log(i); 
	 console.log("Post : "+post); 
}//End of for loop

 $("#theImage"+(thread.length-1)).hide;
		 document.getElementById("theImage"+(thread.length-1)).volume=0.0; 
 
 
 //Now to get the ids of the image's 'article' tag 
 var go =0; 
 for(i=0;i<thread.length;i++)
 {
 var elements = document.getElementsByTagName("article");
 
	 
	var className = elements[go].className;
 
	
	
 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		go++;
		className = elements[go].className;
 
		
		issue=1; 
		
	}
 
    imageID[i] = elements[go].id;
	
 }
 
 console.log("imageID.length : "+imageID.length); 
 console.log("thread.length "+thread.length); 
 

	
}






