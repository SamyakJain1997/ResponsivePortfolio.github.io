if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}
function ready(){


    let navbar = document.querySelector('.navbar');

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }

    let searchForm = document.querySelector('.search-form');

    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    }

    let cartItem = document.querySelector('.cart-items-container');

    document.querySelector('#cart-btn').onclick = () =>{
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    }
    var removeCartItemButtons = document.getElementsByClassName('btns-danger')
    console.log(removeCartItemButtons)
    for (var i=0; i< removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    function removeCartItem(event){
        var butttonClicked = event.target
        butttonClicked.parentElement.remove()
        updateCartTotal()
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click',
    purchaseClicked)
    function purchaseClicked(){
        alert('Thank You For Your Purhase')
        var cartItems = document.getElementsByClassName('items-of-cart')[0]
        while (cartItems.hasChildNodes()){
            cartItems.removeChild(cartItems.firstChild)
        }
        updateCartTotal()
    }



    var addToCartButtons = document.getElementsByClassName('shop-item')
    for (var i=0; i< addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)

    }
    function addToCartClicked(event) {
        var button = event.target
        var shopItem = button.parentElement
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        var price = shopItem.getElementsByClassName('details')[0].innerText
        var imageSrc = shopItem.getElementsByClassName('cart-image')[0].src
        console.log(title,price,imageSrc)
        addItemToCart(title,price,imageSrc)
        updateCartTotal()
    }
    var addToCartSmallButtons = document.getElementsByClassName('fa-shopping-cart')
    for (var i=0; i< addToCartSmallButtons.length; i++){
        var button1 = addToCartSmallButtons[i]
        button1.addEventListener('click', addToCartSmallClicked)

    }
    function addToCartSmallClicked(event){
        var button1 = event.target
        var shopItem1 = button1.parentElement.parentElement
        var title1 = shopItem1.getElementsByClassName('shop-item-heading')[0].innerText
        var price1 = shopItem1.getElementsByClassName('detail-1')[0].innerText
        var imageSrcSmall = shopItem1.getElementsByClassName('cart-image-small')[0].src
        console.log(title1,price1,imageSrcSmall)
        addItemtoCart(title1,price1,imageSrcSmall)
        updateCartTotal()

    }
    function addItemToCart(title,price,imageSrc){
        var cartRow= document.createElement('div')
        cartRow.classList.add('items-of-cart')
        cartRow.innerText = title
        var cartItems = document.getElementsByClassName('items-of-cart')[0]
        var cartItemsNames = cartItems.getElementsByClassName('shop-item-title')
        for (var i = 0; i< cartItemsNames.length; i++){
           if(cartItemsNames[i].innerText == title){
               alert('This item has already been added to the Cart')
               return
           }
        }
        var cartRowContent = `
        <div class="cart-item">
            <span class="fas fa-times btns-danger"></span>
            <img class="cart-image" src="${imageSrc}" alt="">
            <div class="content">
            <h3>${title}</h3>
            <div class="price">${price}</div>
        </div>
    </div>`
        cartRow.innerHTML = cartRowContent
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btns-danger')[0].addEventListener('click', removeCartItem)
    }
    function addItemtoCart(title1,price1,imageSrcSmall){
        var cartRow= document.createElement('div')
        cartRow.classList.add('items-of-cart')
        cartRow.innerText = title1
        var cartItems = document.getElementsByClassName('items-of-cart')[0]
        var cartItemsNames1 = cartItems.getElementsByClassName('')
        for (var i = 0; i< cartItemsNames1.length; i++){
           if(cartItemsNames1[i].innerText == title1){
               alert('This item has already been added to the Cart')
               return
           }
        }
        var cartRowContent = `
        <div class="cart-item">
            <span class="fas fa-times btns-danger"></span>
            <img class="cart-image" src="${imageSrcSmall}" alt="">
            <div class="content">
            <h3>${title1}</h3>
            <div class="price">${price1}</div>
        </div>
    </div>`
        cartRow.innerHTML = cartRowContent
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btns-danger')[0].addEventListener('click', removeCartItem)
    }

    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-item')
        var total= 0
        for (var i=0; i< cartRows.length; i++){
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('price')[0]
            var price = parseFloat(priceElement.innerText.replace('₹',''))
            total = total + price
        }
        total = Math.round(total * 100)/100 
        document.getElementsByClassName('cart-total-price')[0].innerText = '₹'+ total
    }
    window.onscroll = () =>{
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    }
    /*==================== SHOW SCROLL UP ====================*/ 
    function scrollUp(){
        const scrollUp = document.getElementById('scroll-up');
        // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
}