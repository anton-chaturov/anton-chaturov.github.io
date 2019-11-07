$(document).ready(function(){
    var button = $('#button');
    var modal = $('#modal'); 
    var close = $('#close');

    button.on('click', function() {
        modal.addclass('modal_active');
    });

    close.on('click', function() {
        modal.removeclass('modal_active');
    });

});