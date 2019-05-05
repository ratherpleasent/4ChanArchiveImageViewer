document.body.style.backgroundColor = "gray";
var count =0;
var imagesArray = document.getElementsByClassName("fileThumb");
var first;
var bumper=0;
var t;
var urlArray=[];
var ch=0;
var imageID=[];
localStorage.setItem("ch","show");

	var $input = $('<p><input type="button" value="Start" class="buttons" id="b" >');
     $input.prependTo($("body"));
	 $("#b").after("<img src=\"https://i.imgur.com/RusCo13.png\" class=\"whiteImage\" id=\"white\">");

	 $input = $('<p><input type="button" value="Hide " class="buttons" id="h" >');
     $input.prependTo($("body"));
	 $("#h").after("<img src=\"https://i.imgur.com/RusCo13.png\" class=\"whiteImage2\" id=\"white2\">");

	 $("#w").hide();
		$("#s").hide();
		$("#h").hide();
		$("#white2").hide();

		 $("#b").after("<div id=\"message\" ></div>");
	 $("#message").after("<div id=\"imageView\" ></div>");

	 var image = document.getElementById("message");

	 image.innerHTML +='<img src="https://i.imgur.com/rmF0e71.png" class="buttons" id="w" >';
	 $("#w").hide();

	 image.innerHTML +='<img src="https://i.imgur.com/tu6zRLk.png" class="buttons" id="s" >';
	 $("#s").hide();

	 image.innerHTML +='<img src="https://i.imgur.com/4e2uvdR.png" class="buttons" id="d" >';
	 $("#d").hide();

	 image.innerHTML +='<img src="https://i.imgur.com/1oKn0Xp.png" class="buttons" id="e">';
	 $("#e").hide();

	 //////console.log("Before pre load.");
preLoad();
//////console.log("After pre load.");
//////console.log("urlArray length : "+urlArray.length);
$(".myImage").hide();

	 $("#w").click(function()
	 {
		count++;
		//////console.log("t : "+t);
		//////console.log("count : "+count);
	 if(count>=t)
	 {count=0;
		 $("#b").prop("value","Open");
		$(".myImage").hide();
		$("#w").hide();
		$("#s").hide();
		return;
	 }
	 //Show newest image immediately, then hide previous one.
	 bumper++;
	 func();
	    $("#theImage"+(count-1)).hide();
	document.getElementById("theImage"+(count-1)).volume=0.0;

	 return;

	 }
	 );

	 $("#s").click(function()
	 {

		 //Show newest image immediately, then hide previous one.

		$("#theImage"+(count)).hide();
	document.getElementById("theImage"+(count)).volume=0.0;
	 	  count--;
     func();
	  return; //no longer need goBack

	 }

	 );

	 $("#b").click(function(){
	 if(localStorage.getItem("in")=="null" || localStorage.getItem("in") == null )
	{
		open();
		func();
	}
	else if(localStorage.getItem("in") == 1)
	{


		 close();
	}
	else if(localStorage.getItem("in") == 0)
	{
		open();
		func();
	} });

	 $("#e").click(function(){


	close();

	  });

	$("#h").click(function(){

		if(ch%2==0)
		{
			//////console.log("h hide");
		$(".buttons").hide();
		$("#h").show();
		$("#b").show();
		$("#h").prop("value","Show");
		localStorage.setItem("ch","hide");
		ch++;
		}
		else
		{
			//////console.log("h show");
	    $(".buttons").show();
		$("#h").show();
		$("#b").show();
		$("#h").prop("value","Hide");
		localStorage.setItem("ch","show");
		ch++;

		}

	}
	);


	$("#d").click(function() {

     var link = document.createElement('a');
                  link.href = urlArray[count];  // use realtive url
                  link.download = urlArray[count];
				  link.className = "buttons";
                  document.body.appendChild(link);
                  link.click();  //Activates the download, as if it was clicked.
});


function func()
{
 ////console.log("in Func");
 //alert("HIN IG%JIKG$IJ.");


	var id = imageID[count];

	var view = document.getElementById("theImage"+count);
	//////console.log("theImage"+count);
     ////console.log("The ID : "+id);
	window.location.hash = ("#"+id);

       view.style.display="block";
		view.volume = 0.2;
		view.autoplay = false;
		view.autoplay = true;

}

function func(id)
{
	var id = id;
////console.log("id : "+id);
if(id==undefined || id=="undefined")
{
	id= imageID[count];
}

	var view = document.getElementById("theImage"+count);
	//////console.log("theImage"+count);

	window.location.hash = ("#"+id);
 ////console.log("FUNC(ID).");
 view.style.display="block";
		view.volume = 0.2;
		view.autoplay = false;
		view.autoplay = true;

}

$(document).keydown(function(e){

  ////console.log(e.keyCode);

 //w== 87
 //s== 83
 if(localStorage.getItem("in")==1)
 {
 if(e.keyCode==87) //w
 {
	 ////console.log("In 87.");
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

	 func();
	    $("#theImage"+(count-1)).hide();
	document.getElementById("theImage"+(count-1)).volume=0.0;
	////console.log("Calling func");

	 return;
 }

 if(e.keyCode==83) //s
 {

	    $("#theImage"+(count)).hide();
	document.getElementById("theImage"+(count)).volume=0.0;
	count--;
	 func();

	  return;
	 }



 }

 if(e.keyCode==27) //esc
 {
	 //////console.log("Here in escape.");
	 localStorage.setItem("in",0);


		$("#b").prop("value","Open");
		$(".myImage").hide();

		$("#w").hide();
		$("#s").hide();
		$("#e").hide();
		$("#d").hide();
		$("#h").hide();
		$("#white2").hide();

		ch=0;

		return;

 }

 if(e.keyCode==68) //d
 {
	 //download

	  var link = document.createElement('a');
                  link.href = urlArray[count];  // use realtive url
                  link.download = urlArray[count];
				  link.className = "buttons";
                  document.body.appendChild(link);
                  link.click();  //Activates the download, as if it was clicked.
 }



});





function preLoad() //This function exists to add images to the page, hide them, and then we can show them later on. This makes image loading about two seconds faster (only takes about 1 second to load now).
{

	var thread = document.getElementsByClassName("post_file_filename")
	t=thread.length;
	//////console.log("Files length : "+t);
	var view = document.getElementById("imageView");
	var post="";
	for(i=0;i<thread.length;i++)
	{
		post="";

     if(i>1)
	 {
		 $("#theImage"+(i-1)).hide;
		 document.getElementById("theImage"+(i-1)).volume=0.0;
		// ////console.log("Append.");
	 }


		var string = thread[i].toString();


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

	// ////console.log(i);
	 //////console.log("Post : "+post);
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
		//////console.log("Gets in here.");
		go++;
		className = elements[go].className;


		issue=1;

	}

    imageID[i] = elements[go].id;
	go++;
 }

 //////console.log("imageID.length : "+imageID.length);
 //////console.log("thread.length "+thread.length);




}

//Pay attention to currently clicked element, get its ID.

$(document).ready($(document.body).click(function(event)
{
	 var className = event.target.className;
	 if(className == "text")
	 {
		 ////console.log("Got to class text.");
		 count=0;
		 func();

	 }
	////console.log("Class : "+event.target.className);
	////console.log("ID : "+event.target.id);
	if(event.target.className!="buttons")
	{////console.log("Inside of it m8.");
		$(".myImage").hide();
	open();
	//var id = event.target.parentNode.parentNode.parentNode.parentNode.id;
	var id = event.target.id;
	 //////console.log("True ID : "+event.target.id);

	//////console.log(" ID : "+id);

	for(i=0; i<imageID.length;i++)
	{//////console.log("in for loop>");
     //////console.log(imageID[i]);
	 //////console.log("id : "+id);



		if(imageID[i]==id)
		{

		 count = i;
		 func(id);
			return;
		}
	}
	}



}
)
);



function open()
{

		localStorage.setItem("in",1);
		$("#b").prop("value","ESC.");

		if(localStorage.getItem("ch")=="show")
		{
		$("#w").show();
		$("#s").show();
		$("#e").show();
		$("#d").show();
        }
		$("#h").show();
		$("#white2").show();
		return;
}

function close()
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
