function renderServices(data) {
    data.forEach(function(service, index) {
        listServices.append(
        `<div class="col mb-4" style="padding-top: 15px">
            <div class="card h-100 border-secondary">
                <div class="card-body text-center">
                    <h5 class="card-title">${service.title}</h5>
                    <p class="card-text">${service.description}</p>
                    <p class="card-text">$${service.price}</p>
                    <input type="button" class="btn btn-outline-dark" data-id="${index}" value="Seleccionar">
                </div>
            </div>
        </div>`
    )
    });

    var chosenService = $("input.btn-outline-dark");
    chosenService.click(function(event) {
        var indexChosen = $(event.target).data("id");
        addService(indexChosen); 
        lengthChosen.slideDown();
        cart.slideDown();
        totalPrice.slideDown();

        $.toast({
            text: "Revisa tus opciones elegidas para finalizar.", // Text that is to be shown in the toast
            heading: '¡Servicio seleccionado!',
            
            showHideTransition: 'slide', // fade, slide or plain
            allowToastClose: false, // Boolean value true or false
            hideAfter: 3200, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
            stack: false, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
            position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
            
            bgColor: '#eaceea',  // Background color of the toast
            textColor: '#000000',  // Text color of the toast
            textAlign: 'center',  // Text alignment i.e. left, right or center
            loader: false,  // Whether to show loader or not. True by default
            loaderBg: '#9EC600',  // Background color of the toast loader
            
        });
           

    });

};