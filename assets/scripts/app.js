$(document).ready(() =>{
    listServices = $("#list-services");
    chosenList = $("#chosen-list");
    lengthChosen = $("#length-list")
    lengthChosen.hide();
    cart = $("#chose-action");
    cart.hide();
    totalPrice= $("#total-price");
    deleteChosen= $("#delete-chosen");
    chosenForm= $("input[name='chosen.form']");



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
        }
    });

});

console.log("Tu puedes Mariano!");


$("#empty-chosen").click(function() { 
    chosenList.empty();
    totalPrice.empty();
    totalPrice.hide();
    //totalPrice.slideUp();
    //lengthChosen.slideUp();
    //cart.slideUp();
    chosen = [];
    chosen.length = 0;
    localStorage.clear();
    renderChosen();
});

$("#send-form").click(function (){
    renderForm();
});