function addBtn() {
	var Btn = document.createElement("BUTTON");
	Btn.innerHTML = "Change this document.";
	document.body.appendChild(Btn);
	Btn.addEventListener("click", change);
}
function change() {
	var header = document.getElementById("Hid");
	header.innerHTML = "CSIE@CGU";
	var para = document.getElementById("Pid");
	para.innerHTML = "怎麼那麼棒！！.";
}