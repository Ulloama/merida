$(document).ready(() =>{
    listServices = $("#list-services");
    renderServices();
    chosenList = $("#chosen-list");
    lengthChosen = $("#length-list")
    lengthChosen.hide();
    cart = $(".btn-dark");
    cart.hide();
});

console.log("Tu puedes Mariano!");

$("#empty-chosen").click(function() { 
    chosenList.empty();
    lengthChosen.hide();
    cart.hide();
    chosen = [];
    chosen.length = 0;
    localStorage.clear();
});