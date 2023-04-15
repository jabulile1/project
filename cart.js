const createsmallcards = (data) => {
    return`
    <div class="sm-product">
    <img src="${data}" class="sm-product-img" alt="">
    <div class="sm-text">
        <p class="sm-product-name">${data.name}</p>
        <p class="sm-des">${data.shortDes}</p>
    </div>
    <div class="item-counter">
        <button class="counter-btn decrement">-</button>
        <p class="item-count">${data.item}</p>
        <button class="counter-btn ecrement">+</button>
    </div>
    <p class="sm-price" data-price="${data.sellprice}">r${data.sellprice*data.item}</p>
    <button class="sm-delete-btn"><img src="" alt=""></button>
</div>

    `;
}

let totalbill =0;

const setproducts = (name) =>{
    const element=document.querySelector('.${{name}');
    let data=JSON.parse(localStorage.getItem(name));
    if(data==null){
        element.innerHTML=`<img src="img/empty-cart.png" class="empty-img" alt="".>`;
    } else {
        for(let i=0; i< data.length; i++){
            element.innerHTML += createsmallcards(data[i]);
            if(name=='cart'){
                totalbill+= Number(data[i].sellprice*data[i].item);
            }
            updatebill();
        }
        
    }
    setupEvents(name);
}

const updatebill = () => {
    let billprice = document.querySelector('.bill');
    billprice.innerHTML=`R${totalbill}`;
}

const setupEvents = (name) => {

    const counterMinus = document.querySelectorAll('.${name} .derement');
    const counterplus = document.querySelectorAll('.${name} .increment');
    const counts = document.querySelectorAll('.${name} .item-count');
    const price = document.querySelectorAll('.${name} .sm-price');
    const deletebtn = document.querySelectorAll('.${name} .sm-delete-btn');

    let product =JSON.parse(localStorage.getItem(name));

    counts.forEach((item,i) =>{

        let cost = number(price[i].getAttribute('data-price'));

        counterMinus[i].addEventListener('click', () => {
            if(item.innerHTML> 1){
                item.innerHTML --;
                totalbill-= cost;
                price[i].innerHTML =`R${item.innerHTML*cost}`;
                if(name=='cart'){updatebill()}
                
                product[i].item = item.innerHTML;
                localStorage.setitem(name, JSON.stringify(product));
            }
        })

    
    counterplus[i].addEventListener('click', () => {
        if(item.innerHTML< 9){
            item.innerHTML ++;
            totalbill+= cost;
            price[i].innerHTML =`R${item.innerHTML*cost}`;
            updatebill();
            product[i].item =item.innerHTML;
            localStorage.setitem(name,JSON.stringify(product));
        }
    })
})
deletebtn.forEach((item,i)=>{
item.addEventListener('click', () =>{
    product = product.filter((data, index)=> index !=i);
    localStorage.setitem(name,JSON.stringify(product));
    location.reload();
})
})
}


setproducts('cart');
setproducts('wishlist');