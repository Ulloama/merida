var chosenService
var services
var service

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
}
