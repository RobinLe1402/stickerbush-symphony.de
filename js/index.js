let oInfobox;
let btnOpen;
let oAudio;

function init()
{
	oInfobox     = document.getElementById("infobox");
	btnOpen      = document.getElementById("infobox-openbtn");
	oAudio       = document.querySelector("audio");
	let btnClose = document.getElementById("infobox-closebtn");
	
	document.addEventListener("keydown", onKeyDown, false);
	btnClose.addEventListener("click",   onClose);
	btnOpen .addEventListener("click",   onOpen);
}

// collapse the infobox
function onClose()
{
	oInfobox.style.display = "none";
	btnOpen.style.display  = "inherit";
	
}

// expand the infobox
function onOpen()
{
	oInfobox.style.display = "flex";
	btnOpen.style.display  = "none";
}

// enable the user to "globally" pause with SPACE
function onKeyDown(e)
{
	if (e.target === oAudio)
		return; // is on audio element anyways
	
	if (e.key !== ' ')
		return; // is not SPACE key
	
	if (oAudio.paused)
		oAudio.play();
	else
		oAudio.pause();
}