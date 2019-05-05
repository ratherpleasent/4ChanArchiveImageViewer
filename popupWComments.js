document.body.style.backgroundColor = "gray";
var count =0; 
var imagesArray = document.getElementsByClassName("fileThumb"); 
var first; 
var bumper=0; 
	
	var $input = $('<p><input type="button" value="Start" id="b" > &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp  <input type="button" value="forward - press \'w\'" id="w" > &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  &nbsp <input type="button" value="backward - press \'s\'" id="s" > </p>');
     $input.prependTo($("body"));
	 
	 
	 $("#w").hide(); 
		$("#s").hide(); 
	 
	 
	 $("#w").click(function()
	 {
		 count++;
	 bumper++; 
	 func(); 
		 
	 }
	 );
	 
	 $("#s").click(function()
	 {
		  if(count!=0)
	 {
		 count--;
		 bumper--; 
		 
		 var elements = document.getElementsByTagName("article");
	
	//console.log("Elements length : "+elements.length); 
	
	 
	var className = elements[bumper].className;
	
	//console.log("Current classname : "+className); 
	//console.log("ClassName String length : "+className.length); 
	
	var issue = 0; 
	//console.log("Bumper before : "+bumper); 
	//console.log("Count : "+count); 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		bumper--;
		className = elements[bumper].className;
		
		//console.log("Current classname : "+className); 
	    //console.log("ClassName String length : "+className.length); 
		
		issue=1; 
		
	}
		 func(); 
	 }
		 
	 }
	 );
	 
	 $("#b").click(function(){ 
	 if(localStorage.getItem("in")=="null" || localStorage.getItem("in") == null )
	{
		  
		localStorage.setItem("in",1); 
		$("#w").show();
		$("#s").show(); 
		func();
	}
	else if(localStorage.getItem("in") == 1)
	{
		localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","open"); 
		$(".myImage").remove();
		$("#w").hide(); 
		$("#s").hide(); 
		
		
		
		return;
	}
	else if(localStorage.getItem("in") == 0)
	{
		localStorage.setItem("in",1); 
			$("#w").show();
		$("#s").show(); 
		func();
	} });
	
	
	
	 $("#b").after("<div id=\"message\" ></div>"); 
	 $("#message").after("<div id=\"imageView\" ></div>"); 
	 
function func()
{//NOT : Find way to get first image to be before the second one, instead of at bottom of page.
 
	 
	
	
	
	var id = goForward(); 
	
	
	//console.log(" DOM ID : "+id); 
	
	
	/*if(count==0)
	{
		first=elements[bumper+1].id; 
	}*/
	
	var view = document.getElementById("imageView"); 
	
	 
	
 
 
	
	window.location.hash = ("#"+id);
	
	

	
	//console.log("In func."); 
	
	$("#b").prop("value","esc"); 
 
	//write.innerHTML +="<b>It works.!</b>";
	/*Magic of the DOM*/
	
	//4chan var thread = document.getElementsByClassName("fileThumb"); 
	//Archive
	
	var thread = document.getElementsByClassName("post_file_filename")
 
      //console.log("\n image url : "+thread[count]); 
		var string = thread[count].toString();
		//console.log(string.substring(0,5));
		
		if(string.substring(0,5) != "https")
        {
			string = "https"+string.substring(4,string.length);
		}
		var end = string.substring(string.length-4,string.length);
		//console.log("End of string : "+end); 
		//console.log("New string/url : "+string); 
	 
        /*for(i=0; i<thread.length;i++)
		{
			console.log("\n "+i+""+thread[i]);
		}*/
	 
	
	
	/**/
	
	
 	 
		
		
	if(end!="webm")  
	{
	/*if(count==0)
	{
		var $zero= $("<center><img id=\"theImage"+count+"\" class=\"myImage\" src=\""+string+"\" ></center>");
		$("#"+first).prepend($zero); 
		
	}
	else
	{
	//view.innerHTML+="<img id=\"theImage"+count+"\" class=\"myImage\" src=\""+thread[count]+"\" >";
	$("#"+id).after("<img id=\"theImage"+count+"\" class=\"myImage\" src=\""+string+"\" >");
	}*/
	view.innerHTML += "<img id=\"theImage"+count+"\" class=\"myImage\" src=\""+string+"\" >";
	}
	else
	{
		if(count==0)
		{
			/*var $zero= $("<video id=\"theImage"+count+"\" width=\"auto\" height=\"650\" class=\"myImage\" controls autoplay ><source src=\""+string+"\" type=\"video/webm\">");
		$("#"+first).prepend($zero); */
		view.innerHTML += "<video id=\"theImage"+count+"\" width=\"auto\" height=\"650\" class=\"myImage\" controls autoplay ><source src=\""+string+"\" type=\"video/webm\">";
		
		document.getElementById("theImage"+count).volume = 0.2; 
		}
		else
		{
		/*$("#"+id).after("<video id=\"theImage"+count+"\" width=\"auto\" height=\"650\" class=\"myImage\" controls autoplay ><source src=\""+string+"\" type=\"video/webm\">");*/
		
		view.innerHTML += "<video id=\"theImage"+count+"\" width=\"auto\" height=\"650\" class=\"myImage\" controls autoplay ><source src=\""+string+"\" type=\"video/webm\">";
		
		document.getElementById("theImage"+count).volume = 0.2; 
		}
	}
	
	
	
    $("#theImage"+(count-1)).remove(); 
	
	
 
	
}

$(document).keydown(function(e){
	
 //console.log(e.keyCode); 
 
 //w== 87
 //s== 83
 if(localStorage.getItem("in")==1)
 {
 if(e.keyCode==87)
 {
	 count++;
	 bumper++; 
	 func(); 
	 return;
 }
 
 if(e.keyCode==83)
 {
	 goBack();
     func(); 
	 }
	 
	 return; 
	 
 }
 
 if(e.keyCode==27)
 {
	 localStorage.setItem("in",0); 
		
		
		$("#b").prop("value","open"); 
		$(".myImage").remove();
		
		$("#w").hide(); 
		$("#s").hide(); 
		
		return;
	 
 }
 
 }
 
});

function goBack()
{
	if(count!=0)
	 {
		 count--;
		 bumper--; 
		 
		 var elements = document.getElementsByTagName("article");
	
	//console.log("Elements length : "+elements.length); 
	
	 
	var className = elements[bumper].className;
	
	//console.log("Current classname : "+className); 
	//console.log("ClassName String length : "+className.length); 
	
	var issue = 0; 
	//console.log("Bumper before : "+bumper); 
	//console.log("Count : "+count); 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		bumper--;
		className = elements[bumper].className;
		
		//console.log("Current classname : "+className); 
	    //console.log("ClassName String length : "+className.length); 
		
		issue=1; 
		
	}
	
	
}

function goForward()
{
	var elements = document.getElementsByTagName("article");
	
	//console.log("Elements length : "+elements.length); 
	
	 
	var className = elements[bumper].className;
	
	//console.log("Current classname : "+className); 
	//console.log("ClassName String length : "+className.length); 
	
	var issue = 0; 
	//console.log("Bumper before : "+bumper); 
	//console.log("Count : "+count); 
	while(className.toString().substring(className.length-9,className.length) != "has_image")
	{
		bumper++;
		className = elements[bumper].className;
		
		//console.log("Current classname : "+className); 
	    //console.log("ClassName String length : "+className.length); 
		
		issue=1; 
		
	}
	
	 
	//console.log("Bumper after : "+bumper); 
    var id = elements[bumper].id;
	
	return id; 
	
	
}









