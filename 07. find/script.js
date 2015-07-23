/**
 * Created by sagakulk on 6/17/2015.
 */
$(function(){
    $article=$('.productarticlename');
    var $name = $article.find('a');
    console.log($name.length);
    for(var i=0;i<$name.length;i++){
        console.log($name[i].text);
    }
});