$(document).ready(function () { // ensures the HTML is properly loaded before anything is manipulated.
    $('body').append('<div></div>');
    $('body').append('<ul></ul>'); // appending a div and an unordered list. 


    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = 'rgb(' + r + ',' + g + ',' + b + ')'; // this variable is equivalent to a random color thanks to randomized RGB values. 

    $('#inputField').keyup(function () { // keyup procs when a key is let up. as a whole this function checks to see if the text input has anything in it and enables the submit button if it does. 
        if ($('#inputField').val() == "") {
            $("#btnSubmit").prop("disabled", true);
        } else {
            $("#btnSubmit").prop("disabled", false);
        }
    });


    $('#btnSubmit').on('click', function (e) { // appends the text field to a list item when the submit button is clicked. 
        e.preventDefault();
        $('ul').append('<li>' + $('#inputField').val() + '</li>');
        $('li').click( 
            function () { // when user clicks the list item, this function assigns the item a random color. 
                $(this).css({ 'background-color': color });
            }
        );
        $('li').dblclick( // when user double clicks list items, the list items are removed from the doc. 
            function () {
                $(this).remove(); 
            }
        )


    });
});


// this is functionality removed during the drill. 

 //   $('h2').hover( 
    //     function () {
    //         $(this).css({'background-color': color, 'border-radius': '20px'}); 




