let oInfobox;
let btnOpen;

function init()
{
	oInfobox     = document.getElementById("infobox");
	btnOpen      = document.getElementById("infobox-openbtn");
	let btnClose = document.getElementById("infobox-closebtn");
	
	btnClose.addEventListener("click", onClose);
	btnOpen.addEventListener("click", onOpen);
}

function onClose()
{
	oInfobox.style.display = "none";
	btnOpen.style.display  = "inherit";
	
}

function onOpen()
{
	oInfobox.style.display = "flex";
	btnOpen.style.display  = "none";
}