import { menuArray } from "./data.js";



    document.addEventListener('click', function(e){
        if(e.target.dataset.order){
            document.getElementById('completeBtn').classList.toggle('hidden')
        }
     
    })
    function handleOrder(orderId) {
        const orderObj = menuArray.filter(function(order){
            return order.id === orderId
        })[0]
        render()
    }

    let orderArray = []
    document.addEventListener('click', function(e){

        if(e.target.dataset.add) {
            orderArray.push(e.target.dataset.add)
        }
        render()
    })

    function getOrders() {
    
        let orderHtml = ``
        if(orderArray.length > 0) {
            orderArray.forEach(function(order){
                orderHtml += `
                <h3>Your order</h3>
                    <div class="order">
                        <div>
                            <p>${order.name}</p>
                        </div>
                        <div>
                            <p>${order.price}</p>
                            <p>$12</p>
                        </div>
                        </div>
                            <div class="order-price">
                                <p>Total price:</p><p>$28</p>
                            </div>
                            <button data-order="moro" id="order-btn">Complete order</button>
                        </div>
                `
            })
            return orderHtml
            
        } else {
            return null
        }
    }


function getItemsHtml() {
  
  let itemsHtml = ``

 menuArray.forEach(function(item) {


  itemsHtml += `
            <div class="item">
                <div class="emoji-box">
                    <p class="item-graphic">${item.emoji}</p>
                </div>
                <div class="text-box">
                    <p class="item-name">${item.name}</p>
                    <p class="item-description">${item.ingredients}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                <div class="add-btn-box">
                    <i class="fa-solid fa-circle-plus data" data-add="${item.id}" id="add-btn"></i>
                </div>
                </div>
            </div>
            
          
  
  `
 }) 
 return itemsHtml
}


function render() {
  document.getElementById('item').innerHTML = getItemsHtml()
  document.getElementById('orders').innerHTML = getOrders()

  
}

render()