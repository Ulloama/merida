function Services() {

    this.data = [];


    this.init = function(data) {
        this.data = data;
    }

    this.getById = function(id) {
        return this.data.filter((service)=> service.id === id)
    }


    this.buildHtmlServices = function(service) {
    return `
        <div class="col-sm-3" style="padding-top: 15px">
            <div class="card border-secondary">
                <div class="card-body text-center">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                    <p class="card-text">$${service.price}</p>
                    <input type="button" id="chose" class="btn btn-outline-dark"  value="Seleccionar" onclick="addChosenService('${service.id}')">
                </div>
            </div>
        </div>
    `
    }

    this.buildList = function(containerId, sourceData) {
    var listServices = document.getElementById(containerId);
    listServices.innerHTML = "";
    var html = '';

    this[sourceData].forEach(service => {
        html = html + this.buildHtmlServices(service); 
    });
    
    listServices.innerHTML = html;
    }
}

/*<button type="button" class="btn btn-outline-dark" onclick = "addChosenService(${service.id})">Seleccionar</button>*/
