
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

    this.buildList = function() {
        var html = '';
        this.chosen.forEach(service => {
            console.log(service)
            html = html + `<li>${ service.title }</li>`;
        });
        return html;
    }
    
    this.buildChosen = function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
            <div class="col-sm-6" style="padding-top: 15px">
                <div class="card w-500 border-dark bg-light">
                    <h5 class="card-header">Opciones elegidas (${this.chosen.length})</h5>
                    <div class="card-body">
                        <ul>
                            ${this.buildList()}
                        </ul>
                        <input type="button" class="btn btn-outline-dark" value="Cancelar">
                        <input type="button" class="btn btn-outline-dark" value="Finalizar">
                    </div>
                </div> 
            </div>      
        `

        container.innerHTML = html;
    }
}