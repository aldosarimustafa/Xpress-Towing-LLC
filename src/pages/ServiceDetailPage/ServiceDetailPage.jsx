import { useParams, useHistory } from "react-router-dom"
import { useEffect, useState } from 'react'
import * as servicesAPI from '../../utilities/service-api'
import './ServiceDetailPage.css'

export default function ServiceDetailPage() {
    const [service, setService] = useState(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(function () {
        async function getService() {
            const service = await servicesAPI.getOne(id);
            setService(service);
        }
        getService();
    }, []);

    async function handleNewOrder() {
        const cart = await servicesAPI.addServiceToOrder(service._id);
        history.push('/orders/new');
    }

    if (!service) return null;

    return (
        <div class="ServiceDetailPage">
            {service.name}
            ${service.price.toFixed(2)}

            <button onClick={handleNewOrder}>Add Service <i class="fas fa-cart-plus"></i></button>

        </div>
    )
}