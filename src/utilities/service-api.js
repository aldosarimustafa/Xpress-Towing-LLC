import sendRequest from './send-requests';

const BASE_URL = '/api/service';

export function createService(serviceData) {
    return sendRequest(BASE_URL, 'POST', serviceData);
}

export function getOne(serviceId) {
    return sendRequest(`${BASE_URL}/${serviceId}`);
}

export function sendService(serviceId, service) {
    console.log(serviceId, service);
    return sendRequest(`${BASE_URL}/${serviceId}/send`, 'POST', service);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function deleteService(serviceId) {
    return sendRequest(`${BASE_URL}/${serviceId}`, 'DELETE')
}