const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="/imagess/el patron last pic.jpg" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">gallery</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">tracksuits</a></li>
                <li><a href="#" class="footer-link">pants</a></li>
                <li><a href="#" class="footer-link">bucket hat caps</a></li>
                <li><a href="#" class="footer-link">jackets</a></li>
                
            </ul>
            <ul class="category">
                <li class="category-title">blog</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">tracksuits</a></li>
                <li><a href="#" class="footer-link">pants</a></li>
                <li><a href="#" class="footer-link">bucket hat caps</a></li>
                <li><a href="#" class="footer-link">jackets</a></li>
                
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">BIG BOSS clothing aims to urge and to influence its consumers to fully believe in themselves own and embrace the status of being a big boss in anything and everything you do.
    2 trywhitt ave,Rosebank,Johannesburg,2196
    delivery fee R109</p>
    <p class="info">support emails - help@elpatron.com, customersupport@bigboss.com</p>
    <p class="info">telephone - 0634996736</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();