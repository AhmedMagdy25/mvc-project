const id = location.pathname.split('/').pop()
fetch("/getProduct/"+id).then(res=>res.json()).then(product=>{
    product = JSON.parse(product)
    document.querySelector('.alert').remove()
    document.querySelector('.container').innerHTML +=
    `<div class='d-flex gap-5 text-white'>
        <div class='img bg-white p-3 rounded'>
            <img src="/${product.img}" alt='product image' style='width:40vw'>
        </div>
        <div>
            <h1 class="text-warning">${product.name}</h1>
            <p>${product.details}</p>
            <p>${product.rate} stars rate</p>
            <h4>${product.price}$</h4>
        </div>
    </div>
`
})

