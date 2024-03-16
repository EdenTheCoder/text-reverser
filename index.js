function strRevese(toRevese) {
	console.log("HI");
	return toRevese.split("").reverse().join("");
}
console.log();
function autoGrow() {
	document.getElementById("fInput").style.height = "0px";
	document.getElementById("fInput").style.height = document.getElementById("fInput").scrollHeight + "px";
}

document.getElementById("submit").addEventListener("click", function () {
	let inText = document.getElementById("fInput").value;
	let reveseText = strRevese(inText);
	document.getElementById("outputText").innerText = reveseText;
});
document.getElementById("copyToClipBoard").addEventListener("click", function () {
	console.log(document.getElementById("outputText").innerHTML);
	navigator.clipboard.writeText(document.getElementById("outputText").innerHTML).then(function () {
		alert("copied text : " + document.getElementById("outputText").innerHTML);
	});
});
