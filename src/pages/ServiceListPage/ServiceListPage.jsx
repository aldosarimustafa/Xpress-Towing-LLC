import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as servicesAPI from '../../utilities/service-api'

export default function ServiceListPage() {
    const [services, setServices] = useState([]);

    useEffect(function () {
        async function getServices() {
            const services = await servicesAPI.getAll();
            setServices(services);
        }
        getServices();
    }, [])
    return (
        <div className="ServiceListPage">
            <h1>Choose Service</h1>
            <ul>
                {services.map((service) =>
                    <li services={service._id}>
                        <Link to={`../../models/service/${service._id}`}>
                            {service.name}
                        </Link>
                        {service._id === service.id}
                    </li>
                )}
            </ul>
        </div>
    );
}