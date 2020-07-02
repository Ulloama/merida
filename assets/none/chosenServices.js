
function ChosenServices() {

    this.chosen = [];

    this.populate = function() {
        this.chosen = (localStorage.getItem('chosen')) ? JSON.parse(localStorage.getItem('chosen')) : [];
    }

    this.add = function(item) {
        this.chosen.push(item);

        localStorage.setItem('chosen', JSON.stringify(this.chosen));
        this.buildChosen('chosen-services');
    }

    this.get = function() {
        return this.chosen;
    }

    this.emptyList = function() {
        $("#empty-chosen").click(function() { 
            console.log("click");
            chosenList.empty();
            chosen = [];
            console.log(chosen);
            localStorage.clear();
        });
    }
    
    this.buildList = function() {
        var html = '';
        this.chosen.forEach(service => {
            html = html + `
            <li id="chosenContainer">
                <div class="row">
                    <div class="col-8">
                        ${ service.title }
                    </div>
                    <div class="col-4">
                        $${ service.price }
                        <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div>    

            </li>
            `;
        });
        return html;
    }
    
    this.buildChosen = function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
            <div style="padding-top: 15px">
                <div class="card w-500 border-dark bg-light">
                    <h5 class="card-header" id="length-list">Opciones elegidas (${this.chosen.length})</h5>
                    <div class="card-body">
                        <ul id="chosen-list">
                            ${this.buildList()}
                        </ul>
                        <input type="button" class="btn btn-outline-dark" id="empty-chosen" value="Cancelar">
                        <input type="button" class="btn btn-outline-dark" value="Finalizar">
                    </div>
                </div> 
            </div>      
        `

        container.innerHTML = html;
    }

};


