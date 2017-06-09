if(!window.jQuery){
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
	document.getElementsByTagName('head')[0].appendChild(script);
}

$(document).ready(function($){
	var BasePath = 'https://anontech.github.io';
	
	
	if(_EETJsonSettings.ShowLanguage){ //true

		if(!$("#google_translate_element").length){ //if not user preset
			$("head").before('<div id="google_translate_element" class="'+_EETJsonSettings.Position+'"></div>');
		}

		$("head").append('<link rel="stylesheet" href="'+BasePath+'/eet-style.css" type="text/css" />');
		$("head").append('<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>');


		gConfigString = '';

		if (_EETStoreLangCode.length) {gConfigString = gConfigString + "pageLanguage: '" + _EETStoreLangCode + "', ";}

		if (_EETJsonSettings.DisplayStyle == 'dd_with_icon') { gConfigString +='layout: google.translate.TranslateElement.InlineLayout.SIMPLE, '; }

		if (_EETJsonSettings.TranslateLanguages.length) {gConfigString = gConfigString + "includedLanguages: '" + _EETJsonSettings.TranslateLanguages + "', ";}
		
		if (!_EETJsonSettings.AutoTranslationForNativeSpeaker) {gConfigString +='autoDisplay: false, ';}

		if (_EETJsonSettings.MultiLingual) {gConfigString +='multilanguagePage: true';}

		
		var __function = "function googleTranslateElementInit() { new google.translate.TranslateElement({" +gConfigString +"}, 'google_translate_element');	}";


		var script = document.createElement("script");
		script.type="text/javascript";
		script.innerHTML= __function;
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	
});