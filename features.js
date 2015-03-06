function printRandomLyric(jsonFile){
	var obj = JSON.parse(jsonFile);

	var index = -1

	while (index < 0 || index > obj.lyrics.length)
  	index = Math.round(Math.random() * obj.lyrics.length) - 1;

  document.getElementById("lyric").innerHTML = obj.lyrics[index]
  //document.getElementById("lyric").

}

function playRandomSong(jsonFile){
  var obj = JSON.parse(jsonFile);

  var index = -1

  while (index < 0 || index > obj.urls.length)
    index = Math.round(Math.random() * obj.urls.length) - 1;

  document.getElementById("video").innerHTML = "<iframe src=\"http://player.vimeo.com/video/" + obj.urls[index] + "?autoplay=1\" width=\"500\" height=\"281\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"
  //document.getElementById("lyric").
}

function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
	xobj.open('GET', 'http://kevchen.com/youtube_links.json', true); 
	xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          playRandomSong(xobj.responseText);
        }
  };
  xobj.send(null);  
}

document.addEventListener('DOMContentLoaded', function () {
  loadJSON(playRandomSong);
});


