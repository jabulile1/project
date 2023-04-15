window.onload = () => {
    if(! sessionStorage.user){
        location.replace('/login');
    }
}

const placeorderbtn = document.querySelector('.place-order-btn');
placeorderbtn.addEventListener('click',()=> {
    let address = getaddress();
})

fetch('/order',{
    method:'post',
    headers: new headers({'content-type':'application/json'}),
    body:JSON.stringify({
        order:JSON.parse(localStorage.cart),
        email:JSON.parse(sessionStorage.user) .email,
        add:JSON.parse(sessionStorage.user). email,
    })

})

const getaddress = () => {
    let address = document.querySelector('#address').value;
    let street = document.querySelector('#street').value;
    let city = document.querySelector('#city').value;
    let state = document.querySelector('#state').value;
    let pincode= document.querySelector('#pincode').value;
    let landmark = document.querySelector('#landmark').value;

    if(!address.length || !street.length || !city.length || !state.length||
         !pincode.length || !landmark.length) {
       return showalert('fill all the input first');

    } else{ address,street,city,state,pincode,landmark
    
    }
}