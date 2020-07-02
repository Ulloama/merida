var chosenService
var services
var service
var cancelChosen

function addChosenService(id) {
    var service = services.getById(id)[0];
    chosenService.add(service);
}

window.onload = function () {

    services = new Services();
    services.init(this.data);
    services.buildList('list-services', 'data');

    chosenService = new ChosenServices();
    chosenService.populate();
    chosenService.buildChosen('chosen-services');
    chosenService.emptyList();

    chosenList = $("#chosen-list");

    
    $("#chose").click(function () { 
        $("1").prop("disabled",true);
    });
}

