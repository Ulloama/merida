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


function renderForm (service) {
    chosen.forEach(function (service, index) {
        
        $("input[name='chosen-form']").val($("input[name='chosen-form']").val() + `${service.title} - `)

            /*`<td>
            <li>
                <div class="row">
                    <div class="col-8"></div>
                </div>    
            </li>
            </td>
            `*/
        
    });
}

function renderChosen() {
    chosenList.empty();
    total = 0;
    chosen.forEach(function(service, index) {

        chosenList.append(
            `<li class="list-group-item">
                <div class="row">
                    <div class="col-7">${service.title}</div>
                    <div class="col-3">$${service.price}</div>
                    <div class="col-2">
                        <button type="button" class="close icon-delete" data-id="${index}" aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                </div>    
            </li>`
    );

    total = total + service.price;
    });

    lengthChosen.empty();
    lengthChosen.append(`${chosen.length}`)







    
    
    totalPrice.empty();
    totalPrice.append(
        `
        <div class="col-sm-9">
            <h5>TOTAL</h5>
        </div>
        <div class="col-sm-3">
            <h5>$${total}</h5>
        </div>
            
        `
    
    
    );


    var chosenDelete= $(".close")
    chosenDelete.click(function(){
        indexDelet = $(event.target).attr("id");
        $(event.target).parent().parent().parent().remove();

        chosen.splice(indexDelet, 1)
        localStorage.setItem('chosen', JSON.stringify(chosen));
        
        renderChosen();
        if (chosen.length == 0){
            lengthChosen.slideUp();
            cart.slideUp();
            totalPrice.slideUp();
        }
        
    });
    
};


