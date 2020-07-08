$(document).ready(() =>{
    listServices = $("#list-services");
    chosenList = $("#chosen-list");
    lengthChosen = $("#length-list")
    lengthChosen.hide();
    cart = $(".btn-dark");
    cart.hide();
    totalPrice= $("#total");
    deleteChosen= $("#delete-chosen");

    $.ajax({
        method: 'GET',
        url : "../assets/scripts/data.json",
        datatype: 'json'
    }).done(function(data){
        renderServices(data);
        dataAddService(data);

    }).fail(function(){
        console.log("No hay datos");
    });

    $('form[name="chosencontact"]').validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            brand: {
                required: true,
                minlength: 3
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: 'El campo nombre es obligatorio',
                minlength: 'Ingresá al menos 3 caracteres'
            },
            email: {
                required: 'El campo email es obligatorio',
                email: 'Ingrese un email válido'
            },
            brand: {
                required: 'El campo emprendimiento y/o marca es obligatorio',
                minlength: 'Ingresá al menos 3 caracteres'
            },
            message: {
                required: 'El campo es obligatorio',
                minlength: 'Ingrese al menos 10 caracteres'
            }
        },
        submitHandler: function(form) {
            console.log(form)
        }
    });

});

console.log("Tu puedes Mariano!");


$("#empty-chosen").click(function() { 
    chosenList.empty();
    totalPrice.empty();
    lengthChosen.slideUp();
    cart.slideUp();
    chosen = [];
    chosen.length = 0;
    localStorage.clear();
    $(".btn-outline-dark").prop('disabled', false);
});
