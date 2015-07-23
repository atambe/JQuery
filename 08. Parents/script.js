/**
 * Created by sagakulk on 6/17/2015.
 */
$(function(){
   var $parents = $('article').parents();

    /*for(var i=0;i<$parents.length;i++){
        console.log($parents[i]);
    }
*/
    var $parents = $('article').parents('section');

    for(var i=0;i<$parents.length;i++){
        console.log($parents[i]);
    }
});