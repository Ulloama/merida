var chosen = [];

function addService(index) {
    chosen.push (data[index]);
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
                    <div class="col-8">
                        ${service.title}
                    </div>
                    <div class="col-4">
                        $${service.price}
                        <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>    
            </li>`
    )
        lengthChosen.empty();
        lengthChosen.append(`Opciones elegidas (${chosen.length})`)

    total = total + service.price;

    });
    
}

