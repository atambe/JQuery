/**
 * Created by sagakulk on 6/17/2015.
 */
$(function(){
   $div = $('<div> This is a div. </div>');
    console.log($div[0]);
    $elements = $(['<span>One</span>','<span>Two</span>','<span>Three</span>']);
    for(var i =0;i<$elements.length;i++){
        console.log($elements[i]);
    }
});