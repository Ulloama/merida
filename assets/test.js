let socialManagement
let advertisingCampaign
let brandRestyling
let photography
let logoCreation
let colorPalette
let chosenServices
let service
let serviceId
let servicePrice
let serviceDescription

//En el caso de necesitar agregar un nuevo servicio creo el objeto y a funcion constructora para poder agreagrlo de un manera mas ágil.

var serviceObject = [serviceId, servicePrice, serviceDescription];

function service(serviceId, servicePrice, serviceDescription) {
    this.serviceId;
    this.serviceDescription;
    this.servicePrice;
}

var addService = service (serviceObject);

var newService = addService;

//Ejercicio Clase 6 - Agrego función constructora con método para agregar al array los servicios elegidos.
//Con el método get puedo obtener el detalle de los servicios dentro del array choisen.

function chosenServices() {
    var choisen = [];

    this.add = function(service) {
        choisen.push(service);
    }

    this.get = function() {
        return choisen;
    }
}

var myChosenServices = new chosenServices();

var showChosenServices = myChosenServices.get();

/*let socialManagement
let advertisingCampaign
let brandRestyling
let photography
let logoCreation
let colorPalette
let linkCraftPack*/
var services
var service

//Creo una función para el botón "Seleccionar" de cada servicio.
//(debería buscar la manera de hacer esto con una sola función)
/*
function socialManagementAdd() {
    choisenService(socialManagement.innerHTML);
}

function advertisingCampaignAdd() {
    choisenService(advertisingCampaign.innerHTML);
}

function brandRestylingAdd() {
    choisenService(brandRestyling.innerHTML);
}

function photographyAdd() {
    choisenService(photography.innerHTML);
}

function logoCreationAdd() {
    choisenService(logoCreation.innerHTML);
}

function colorPaletteAdd() {
    choisenService(colorPalette.innerHTML);
}*/


//Con la siguiente función agrego a la lista de "Opciones elegidas", el servicio selccionado por el usuario.
/*
function choisenService(service) {
    var addService = document.getElementById("chosen-services");
    var newLi = document.createElement("li")
    newLi.innerHTML = service;
    addService.appendChild(newLi);
}
*/

window.onload = function () {
    /*socialManagement = document.getElementById("1");
    advertisingCampaign = document.getElementById("2");
    brandRestyling = document.getElementById("3");
    photography = document.getElementById("4");
    logoCreation = document.getElementById("5");
    colorPalette = document.getElementById("6");*/

    services = new Services();
    services.init(this.data);
    services.buildList('list-services', 'data');

}