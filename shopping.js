function plus(unitprice, e){
    let totalhtml = document.getElementById("totalcart")
    let total = parseInt(totalhtml.innerText) +unitprice
    totalhtml.innerText = total
    console.log(total, unitprice)

    let qtyhtml = e.parentElement.querySelector(".qty")
    let qty = parseInt(qtyhtml.value) + 1
    qtyhtml.value = qty
}
function moin (unitprice, e) {
    

    let qtyhtml = e.parentElement.querySelector(".qty")
    let qty = qtyhtml.value
    if(qty>0){
        qty = parseInt(qtyhtml.value) - 1
        qtyhtml.value = qty

        let totalhtml = document.getElementById("totalcart")
        let total = parseInt(totalhtml.innerText) -unitprice
        totalhtml.innerText = total
        console.log(total, unitprice, e)
    }
    
}