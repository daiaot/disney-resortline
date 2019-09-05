window.onload = function(){
	var isPC = false;
	var classname = document.body.className;
	//ユーザーエージェント振り分けてclass追加
	var ua = navigator.userAgent.toLowerCase();
	if(ua.indexOf('iphone') != -1 || (ua.indexOf('android') != -1 && ua.indexOf('mobile') != -1)){	//iPhone, Android SPN
		document.body.className = classname + " body_spn";
	}else{	//PC,tab
		isPC = true;
		document.body.className = classname + " body_pc";
	}
	document.body.style.visibility = "visible";

	//viewport書き換え
	if(isPC){
		var metalist = document.getElementsByTagName('meta');
		for(var i = 0; i < metalist.length; i++) {
			var name = metalist[i].getAttribute('name');
			if(name && name.toLowerCase() === 'viewport') {
				metalist[i].setAttribute('content', 'width=1050');
				break;
			}
		}
	}
};
