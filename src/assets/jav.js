function unity() {
    var theImages = [{
        src: "https://i.stack.imgur.com/1Zpk4.png",
        width: "240",
        height: "160"
    }];
    return theImages;
}
function cpp() {
  alert("satvik")
    var theImages = [{
        src: "https://docs.microsoft.com/en-us/cpp/build/media/mathlibrary-new-project-name-153.png?view=vs-2019",
        width: "240",
        height: "160"
    }];
    return theImages;
}
function java() {
    var theImages = [{
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4w8Hq1RKOuDo9OdwCx4Drl3gHYSwIf41outytLZc01Q9Wg1VeXQ",
        width: "240",
        height: "160"
    }];
    return theImages;
}
function web() {
    var theImages = [{
        src: "https://cdn.lynda.com/course/618730/618730-636426376439835436-16x9.jpg",
        width: "240",
        height: "160"
    }];
    return theImages;
}
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  var player;

	// this function gets called when API is ready to use
	function onYouTubePlayerAPIReady() {
	  // create the global player from the specific iframe (#video)
	  player = new YT.Player('player', {
	    events: {
	      // call this function when player is ready to use
	      'onReady': onPlayerReady
	    }
	  });
	}

	function onPlayerReady(event) {
	  
	  // bind events
	  var playButton = document.getElementById("play-button");
	  playButton.addEventListener("click", function() {
      alert("testing play button");
	    player.playVideo();
	  });
	  
	  var pauseButton = document.getElementById("pause-button");
	  pauseButton.addEventListener("click", function() {
	    player.pauseVideo();
	  });

	  var stopButton = document.getElementById("stop-button");
	  stopButton.addEventListener("click", function() {
	    player.stopVideo();
	  });
	  
	}
//    var vid = document.getElementById("myVideo");
//  vid.onended = function() {
//  alert("The video has ended");
//  }

	// Inject YouTube API script
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);