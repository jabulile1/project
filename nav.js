const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    
    <div class="nav">
    <img src="imagess/EL PATRON LOGO.JPG" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="home.html" class="link">home</a></li>
    <li class="link-item"><a href="product.html" class="link">shop</a></li>
    <li class="link-item"><a href="blog.html" class="link">blog</a></li>
    <li class="link-item"><a href="cart.html" class="link"> <i class="fa-solid fa-bag-shopping"></i></a></li>
    
</ul>
    
    `;
        
}

createNav();



const searchbtn = document.querySelector('.search-btn');
const searchbox = document.querySelector('.search-box');
searchbtn.addEventListener('click',() =>{
    if (searchbox. value .length){
     location.href = '/search/${ search.value}'
    }
})