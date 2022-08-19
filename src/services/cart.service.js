import http from '../http-common';

class CartDataService {
    getAll() {
        return http.get("/cart");
    }

    create(data) {
        return http.post("/cart", data);
    }

    update(id, data) {
        return http.put(`/cart/${id}`, data);
    }

    delete(id) {
        return http.delete(`/cart/${id}`);
    }
}

export default new CartDataService();