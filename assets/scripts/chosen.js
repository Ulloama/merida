var chosen = [];

function dataAddService(data){
    services = data
    return (services);
};

function addService(index) {
    chosen.push (services[index]);
    localStorage.setItem('chosen', JSON.stringify(chosen));
    renderChosen();
}

function renderChosen() {
    chosenList.empty();
    total = 0;
    chosen.forEach(function(service, index) {

        chosenList.append(
            `<li>
                <div class="row">
                    <div class="col-8">${service.title}</div>
                    <div class="col-4">
                        $${service.price}
                        <button type="button" class="close" data-id="${index}" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>    
            </li>`
    )

    total = total + service.price;
    });

    lengthChosen.empty();
    lengthChosen.append(`Opciones elegidas (${chosen.length})`)
    
    totalPrice.empty();
    totalPrice.append(`Total $${total}`);

    var chosenDelete= $(".close")
    chosenDelete.click(function(){
        event.preventDefault();
        let indexDelet = $(event.target).attr("id");
        $(event.target).parent().parent().parent().remove();
        chosen.splice(indexDelet, 1) 
        localStorage.setItem('chosen', JSON.stringify(chosen));
        renderChosen();
        if (chosen.length == 0){
            lengthChosen.slideUp();
            cart.slideUp();
            totalPrice.slideUp();
            $(".btn-outline-dark").removeAttr('disabled');
        }
    });
    
};


