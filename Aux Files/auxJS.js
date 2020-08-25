function ShoppingCart() {
    //array donde se van a almacenar los productos que agreguemos a nuestro carrito.
    this.cart = [];
    //método que llena this.cart con lo que haya en localStorage o lo inicializa con un objeto vacío.
    this.populate = function() {
        this.cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
    }
    //hace un push de un nuevo elemento a this.cart y también lo mete en el localStorage. Además, llama a buildCart que renderiza el carrito de compras. 
    this.add = function(item) {
        this.cart.push(item);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.buildCart('shopping-cart-row');
    }

    this.get = function() {
        return this.cart;
    }
    //prepara el html con los nombres de los títulos de cada array que haya en el carrito. 
    this.buildList = function() {
        var html = '';
        this.cart.forEach(product => {
            html = html + `<li class="list-item">${product.title}  <input type="button" value="Remove" class="remove-button" id="${product.id}" onclick="removeProductByCart()"></li>`;
        });
        return html;
    }
    //arma todo el esqueleto del carrito de compras. Recibe por parámetro el id del contenedor donde se va a renderizar el carrito de compras. Dentro llama al método buildList.
    this.buildCart = function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = `
                    <div class=" col-12">
                        <h2>Shopping cart (${this.cart.length})</h2>
                        <ul id="list">
                            ${ this.buildList() }               
                        </ul>
                        <div id="total-price-container">
                            <p>Total price: <span id="total-price"></span></p>
                        </div>
                        <input type="button" class="btn btn-secondary" value="Buy">
                        <input type="button" class="btn btn-primary" value="Cancel">                
                     </div>     
                 `

        container.innerHTML = html;
    }

}

function removeProductByCart() {
    let product, productID;
    event.target.parentNode.remove();
    product = event.target.parentNode;
    productID = product.querySelector('input').getAttribute('id');

    for (i=0; i<shoppingCart.cart.length; i++) {
        if (shoppingCart.cart[i].id == productID) {
            shoppingCart.cart.splice(i, 1);
        break;
        }

    }

    localStorage['cart'] = JSON.stringify(shoppingCart.cart);
    //localStorage.setItem('cart', JSON.stringify(this.cart));

    shoppingCart.buildCart('shopping-cart-row');
};