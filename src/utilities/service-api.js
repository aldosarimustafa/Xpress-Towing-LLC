import sendRequest from './send-request';

const BASE_URL = '/api/services';

export function createService(serviceData) {
    return sendRequest(BASE_URL, 'POST', serviceData);
}

export function getOne(serviceId) {
    return sendRequest(`${BASE_URL}/${serviceId}`);
}

export function addServiceToOrder(serviceId) {
    return sendRequest(`${BASE_URL}/add/${serviceId}`, 'PUT');
}

export function sendService(serviceId, service) {
    console.log(serviceId, service);
    return sendRequest(`${BASE_URL}/${serviceId}/send`, 'POST', service);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function checkout() {
    return sendRequest(`${BASE_URL}/checkout`, 'POST');
}

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}

export function deleteService(serviceId) {
    return sendRequest(`${BASE_URL}/${serviceId}`, 'DELETE')
}