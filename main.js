var name ;
var config = {
    	apiKey: "AIzaSyBzal698QoJ2a-8its6a4GZ0vUIpskAceI",
    	authDomain: "hamza-c93a6.firebaseapp.com",
    	databaseURL: "https://hamza-c93a6.firebaseio.com",
    	projectId: "hamza-c93a6",
    	storageBucket: "hamza-c93a6.appspot.com",
    	messagingSenderId: "632865188865"
  	};
firebase.initializeApp(config);
var database = firebase.database();  
var ref = database.ref('msg');

init();

ref.on('value' , gotData ,errData);

function gotData(data){
	//voice
	document.getElementById("msgs").innerHTML = "" ;
	var list = data.val();
    var keys = Object.keys(list);
    console.log(keys);
    console.log(keys.length);
    for ( var i = 0; i<keys.length; i++)
    {
        var theName=list[keys[i]].name;        
        var theText=list[keys[i]].text;
        document.getElementById("msgs").innerHTML = theName+" : "+theText+"<br>" + document.getElementById("msgs").innerHTML ;
	}
}

function errData(err)
{
    console.log("error! : ");
    console.log(err);
}

function init(){
	name = "";
	while(name == ""){
		name = prompt("enter your name");
		if(name == ""){
			alert("please enter a valid name");
		}
	}
	
	alert(name + " ! welcome to our network");
}


function upload(){
	if(name == ""){
		init();
	}
	else{
		var text = document.getElementById("msg").value;
		
		var data = {
			text : text ,
			name : name
		};

		console.log(text);
		ref.push(data);
		document.getElementById("msg").value = "" ;
	}
}

