fetch("/getProducts").then(res=>res.json()).then(products=>{
    products = JSON.parse(products)
    document.querySelector('.alert').remove()
    products.forEach(product => {
        document.querySelector('.container').innerHTML +=
        `
        <div class="card text-center" style="width: 18rem; cursor:pointer" onclick="getDetails('${product._id}')"> 
            <div class="h-75"></div>.
                <img src="/${product.img}" class="card-img-top ms-auto me-auto w-75" alt="device">
            <div class="card-body">
                <p class="card-text fw-bold">${product.name}</p> 
                <p class="card-text">${product.price}$</p> 
            </div>
        </div>
        `
    });
})

const getDetails = (id)=>{
    window.location.href = "./product/"+id
}