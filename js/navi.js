function writeHeader(rootDir){

	$.ajax({
		url: rootDir + "navi.html", 
		cache: false,
		async: false, 
		success: function(htm){

			htm = htm.replace(/\{\$root\}/g, rootDir);
			document.write(htm);
		}
	});

}


$(function(){
	
	var base = "/"; //基準となるディレクトリを指定
	var path = location.pathname.replace(base,""); //rootディレクトリを取得
	var file = "";
	path = path.replace(/index\..*?$/,""); //末尾がindex.○○○である場合削除
	
	if(path.match(/[php|htm|htm]$/) !== null){ //index以外のファイルの場合はファイル名を取得する
		file = path.replace(/.*\//,""); //ファイル名を抽出
		file = file.replace(/\..*?$/,""); //拡張子を削除
		
		if(path.match(/.*\//) !== null){ //ルート階層で無い場合は以下を処理
			path = path.match(/.*\//)[0]; //パスからファイル名を取り除く
		}
	}

	path = path.replace(/\/$/,""); //パスの末尾のスラッシュは削除
	path = path.replace("/","-"); //残りのスラッシュはハイフンに置き換え（class名として利用する為）
	
	if(!path) path = "home"; //pathが空であればhomeを設定
	if(path.match(/\./) !== null) path = ""; //ルート階層でindex以外のファイル場合はpathを空に


	if(path && file){ //２階層以降のインデックス以外の場合
		$("body").addClass(path+"_"+file);
	}else if(path && !file){ //各階層のインデックスの場合
		$("body").addClass(path);
	}else if(!path && file){ //ルート階層のインデックス以外の場合
		$("body").addClass(file);
	}

});
