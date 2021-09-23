export default () => {
	window.$crisp = [];
	window.CRISP_WEBSITE_ID="d14e8b60-976b-4aac-b56e-e12b6cab980e";
	// var ask = prompt("Username anda : ")

	// console.log(`Halo ${ask}, apa kabarnya ? `)

	$crisp.push(["set", "user:nickname", ["John Doe"]]);

  (function() {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
};