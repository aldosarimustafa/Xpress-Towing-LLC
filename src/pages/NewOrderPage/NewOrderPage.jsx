import { useEffect, useState } from 'react'
import * as servicesAPI from '../../utilities/service-api'

export default function NewOrderPage() {
  const [cart, setCart] = useState(null);

  useEffect(function () {
    async function getCart() {
      const cart = await servicesAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  if (!cart) return null;

  return (
    <div>
      <h1>Ordered Services:</h1>
      {cart.services.map((service, idx) => <div key={idx}>{service.name}</div>)}
    </div>
  );
}