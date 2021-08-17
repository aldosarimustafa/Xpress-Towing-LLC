import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as servicesAPI from '../../utilities/service-api'
import './ServiceListPage.css'

export default function ServiceListPage() {
    const [services, setServices] = useState([]);

    useEffect(function () {
        async function getServices() {
            const services = await servicesAPI.getAll();
            console.log(services);
            setServices(services);
        }
        getServices();
    }, [])
    return (
        <div className="ServiceListPage">
            <h1>Choose Service</h1>
            <ul>
                {services.map((service) =>
                    <li>
                        <Link to={`/services/${service._id}`}>
                            {service.name}<br></br>
                            <i className= {service.icon}></i>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}