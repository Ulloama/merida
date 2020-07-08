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
    var total = 0;
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

        lengthChosen.empty();
        lengthChosen.append(`Opciones elegidas (${chosen.length})`)

        total = total + service.price;
                totalPrice.empty();
                totalPrice.append(`Total $${total}`)


                var deleteChosen = $(".close");
                deleteChosen.click(function() {
                    event.preventDefault();
                    let indexDelet = $(event.target).attr("id");
                    $(event.target).parent().parent().parent().parent().remove().prop('disabled', false);
                    localStorage.setItem('chosen', JSON.stringify(chosen));
                    chosen.splice(indexDelet)
                });
    });



};

