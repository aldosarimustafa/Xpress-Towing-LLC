import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as servicesAPI from '../../utilities/service-api'
import "./NewOrderPage.css"

export default function NewOrderPage() {
  const [cart, setCart] = useState(null);
  const history = useHistory();

  useEffect(function () {
    async function getCart() {
      const cart = await servicesAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  
  async function handleCheckout() {
    await servicesAPI.checkout();
    history.push('/');
  }

  if (!cart) return null;


  return (
    <div>
      <h1>Ordered Services:</h1>
      {cart.services.map((service, idx) => 
        <div class="NewOrderPage" key={idx}>
          <span>{service.name}</span>
          <span>${service.price.toFixed(2)}</span>
        </div>
      )}
      <div>Order Total: ${cart.orderTotal.toFixed(2)}</div>
      <button onClick={handleCheckout}>Checkout <i class="fas fa-cash-register"></i></button>
    </div>

  );

}