import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        <div className="ServiceListPage">          // Page level components should have a div and a class
            <h1>Choose Service</h1>
            <ul>
                {services.map((service) =>
                    <li services={service._id}>       // won't work - li doesn't know anything about what a serviceItem is
                                                         // render a custom ServiceItem component
                        <Link to={`../../models/service/${service._id}`}>
                            {service.name}
                        </Link>
                        {serviceItem._id === service.id}
                    </li>
                )}
            </ul>
        </div>
    );
}