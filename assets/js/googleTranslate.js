
 
 function googleTranslateElementInit() {
    new google.translate.TranslateElement({ /*includedLanguages: 'en,es,ca,eu,gl,en,fr,it,pt,de',*/ pageLanguage: 'es', layout: google.translate.TranslateElement.InlineLayout.VERTICAL, gaTrack: false,autoDisplay: false}, 'google_translate_element');
    setTimeout(function() {
        $("body").removeAttr("style"); //remove style of body
        $(".goog-te-gadget-icon").removeAttr("style"); 
        $(".goog-te-spinner-pos").remove();  //remover spinner
        
        removeTextGoo();
        // var removePopup = document.getElementById('goog-gt-tt'); //remove cont of suggest a better translation
        // removePopup.parentNode.removeChild(removePopup); //remove cont of suggest a better translation
        removeStyleFont(); //remove style of all font
        
    }, 2000);

    function removeStyleFont(){
        var fonts = document.querySelectorAll("font");
        fonts.forEach(function(font,i) {
            font.removeAttribute('style');
        });
    }

    function removeTextGoo(){
         // Obtener todos los elementos con la clase 'items'
         const items = document.querySelectorAll('.skiptranslate.goog-te-gadget');
         // Iterar sobre todos los elementos con la clase 'items'
         items.forEach((item) => {
             // Obtener todos los nodos hijos del elemento actual
             const childNodes = item.childNodes;
             const children = item.children;
             // Iterar sobre los nodos hijos para eliminar los nodos de texto
             for (let i = 1; i < childNodes.length; i++) {
                 item.removeChild(children[i]);
                 item.removeChild(childNodes[i]);
             }
         });
    }
}
// WORK IN PROGRESS BELOW   	
$('document').ready(function () {

    // RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function () {

       
        // // Change font family and color
        // $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
        //     .css({
        //         'color': '#544F4B',
        //         'font-family': 'Roboto',
        //                         'width':'100%'
        //     });
        // // // Change menu's padding
        // // $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
            
        //         // Change menu's padding
        // $("iframe").contents().find('.goog-te-menu2').css ('padding', '10px');
    
        // // Change the padding of the languages
        // $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
    
        // // Change the width of the languages
        // $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        // $("iframe").contents().find('td').css('width', '100%');
    
        // // Change hover effects
        // $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
        //     $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        // }, function () {
        //     $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        // });

        // // Change Google's default blue border
        // $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // // Change the iframe's box shadow
        // $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
        

        // //Change the iframe's size and position? and overflow
        // $(".goog-te-menu-frame").css({
        //     'height': '100%',
        //     'width': '100%',
        //     'top': '0px',
        //     "overflow": "auto !important",
        // });
        // // Change iframes's size and overflow
        // $("iframe").contents().find('.goog-te-menu2').css({
        //     'position': 'relative',
        //     'height': '100%',
        //     'width': '98%',
        //     "overflow-x": "auto",
        //     "-webkit-overflow-scrolling": "touch",
            
        // });
    

        
      
        // // Change iframes to width : 100%
        // $('.VIpgJd-ZVi9od-xl07Ob-OEVmcd').css({
        //     'width': '100%',
        //     "overflow-x": "auto",
        //     'left': '0px',
        //     'opacity' : '0.9'
        // });
      
        // // Change iframes's size and overflow child
        // $("iframe").contents().find('.VIpgJd-ZVi9od-vH1Gmf').css({
        //     'position': 'relative',
        //     'height': '100%',
        //     'width': '96%',
        //     'padding': '10px',
        //     "overflow-x": "auto",
        //     "-webkit-overflow-scrolling": "touch",
            
        // });

        
    });
});