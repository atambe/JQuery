/**
 * Created by sagakulk on 6/17/2015.
 */
$(function(){

    var welcometext = document.getElementById('welcometext');

    var $welocometext = $(welcometext);

    console.log($welocometext[0]);

    var $paragraphs = $([document.querySelector('p')]);

    console.log($paragraphs.length);
    for(var i=0;i<$paragraphs.length;i++){
        console.log($paragraphs[i]);
    }
});