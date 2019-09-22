if (typeof eaCtrl =="undefined"){ 
	var eaCtrlRecs=[];
	var eaCtrl = {add:function(ag){eaCtrlRecs.push(ag)}};
	var js = document.createElement('script');
	js.setAttribute("src","//go.ero-advertising.com/loadeactrl.go?pid=52151&siteid=66397&spaceid=5118241");
	document.head.appendChild(js);
}
/*
End load eactrl 

Command eaCtrl to load ads
*/
eaCtrl.add({"plugin":"pop","sid":5118241,"traffic_type":"all","subid":"","clickTags":[],"ignoreTags":["body","anyelement_or_class_or_id_value_jquery_wildcards_supported"]});
