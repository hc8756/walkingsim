//This is where all the game logic occurs
function change_image(clicked_id){
    if(clicked_id=="ChairMom"){
        document.getElementById("ChairImage").src="images/chair_mom.png";
        document.getElementById("Line1").innerHTML="I had moved out and said my goodbyes, although my parents made sure to give me at least a couple keepsakes before I left."
    }

    else if(clicked_id=="ChairStreet"){
        document.getElementById("ChairImage").src="images/chair_thrift_store.png";
        document.getElementById("Line1").innerHTML="I found myself in a new city, and with an empty apartment waiting for me. When I saw this on the side of the road, well, one man’s trash and all that."
    }

    else if(clicked_id=="ChairShop"){
        document.getElementById("ChairImage").src="images/chair_ikea.png";
        document.getElementById("Line1").innerHTML="I was living the dream, had a fresh start, in a new city, getting ready to go out in the world and make a name for myself."
    }
    

}