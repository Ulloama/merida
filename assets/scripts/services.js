function renderServices(data) {
    data.forEach(function(service, index) {
        listServices.append(
        `<div class="col mb-4" style="padding-top: 15px">
            <div class="card h-100 border-secondary">
                <div class="card-body text-center">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                    <p class="card-text">$${service.price}</p>
                    <button id="chose" class="btn btn-outline-dark" data-id="${index}">Seleccionar</button>
                </div>
            </div>
        </div>`
    )
    });

    var chosenService = $(".btn-outline-dark");
    chosenService.click(function(event) {
        
        var indexChosen = $(event.target).data("id");
        addService(indexChosen); 
        lengthChosen.slideDown();
        cart.slideDown();
        $(this).prop('disabled', true);
    });

};