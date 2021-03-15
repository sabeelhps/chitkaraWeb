
// Marking li as completed
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
})

// removing li items from our todo
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(function () {
        // console.log("FadeOut Completed");
        $(this).remove();
    });
   
    event.stopPropagation();  //to prevent event bubbling
})



// Adding new todo 
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        let newTodoText = $(this).val();
        $('#container ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${newTodoText}</li>`)
        $(this).val("");
    } 
})

$('#plus').click(function () {
    $('input').fadeToggle(500,function () {
        console.log("Faded");
    })
})