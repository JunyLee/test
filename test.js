const ulrParams = new URLSearchParams(window.location.search);
const memo = urlParams.get("memo");
document.getElementById("memo").textConten = memo || "No memo";
