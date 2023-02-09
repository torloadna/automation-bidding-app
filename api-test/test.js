import supertest from "supertest";
import { expect } from "chai";
const request = supertest('https://ec2-3-124-113-90.eu-central-1.compute.amazonaws.com:8080/backend/');
const rolesId = "3b456fd2-f08e-4d5b-a18b-dc8f962f593f";
const productAuctionsId = "32406779-dfb2-457d-bcec-8487b9c6e217";
const userId = "b3b3b189-743a-499e-a706-e1838fb20599";
const addressId = "99385ef8-9933-4bec-8b34-d0606c66bd57";
const cardId = "762b5185-43be-4e5e-aeb9-b6a844e407fd";
const categoryId = "ca69f0cb-8b11-4b3e-8ad7-18b4277f6101";
const orderId = "8b562393-bb38-40c1-814d-755615e2232b";
const permissionId = "0985dbc7-d002-4ed0-9994-b6e56d82b1ea";
const productId = "b1eed562-a12d-48d7-a3fc-cfb35d0f365c";


describe('User-controller', ()=>{
    it('GET api/v1/users', ()=>{
        return request.get("api/v1/users").then((res) => {
            console.log(res.body);
            expect(res.body).to.not.be.empty;
        });
    });
    it('GET api/v1/users/id', ()=>{
        return request.get(`api/v1/users/${userId}`).then((res) => {
            console.log(res.body);
            expect(res.body.id).to.be.eq(userId); 
            expect(res.statusCode).to.be.eq(200);
        });
    });
});
describe('Product-auction-controller', ()=>{
    it('GET api/v1/product-auctions', ()=>{
        return request.get("api/v1/product-auctions").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/product-auctions/id', ()=>{
        return request.get(`api/v1/product-auctions/${productAuctionsId}`).then((res)=>{
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(productAuctionsId);
        });
    });
});
describe('Role-controller', ()=>{
    it('GET api/v1/roles', ()=>{
        return request.get("api/v1/roles").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/roles', ()=>{
        return request.get(`api/v1/roles/${rolesId}`).then((res)=>{
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(rolesId);
        });
    });
});
describe('Permission-controller', ()=>{
    it('GET api/v1/permissions', ()=>{
        return request.get("api/v1/permissions").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/permissions/{id}', ()=>{
        return request.get(`api/v1/permissions/${permissionId}`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(permissionId);
        });
    });
});
describe('Order-controller', ()=>{
    it('GET api/v1/orders', ()=>{
        return request.get("api/v1/orders").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/orders/{id}', ()=>{
        return request.get(`api/v1/orders/${orderId}`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(orderId);
        });
    });
});
describe('Product-image-controller', ()=>{
    it('GET /api/v1/images/ead67f17-838e-4d0c-9fb1-9e912bbd0da0', ()=>{
        return request.get("api/v1/images/ead67f17-838e-4d0c-9fb1-9e912bbd0da0").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
});
describe('Product-controller', ()=>{
    it('GET api/v1/products', ()=>{
        return request.get("api/v1/products").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/products/{id}', ()=>{
        return request.get(`api/v1/products/${productId}`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(productId);
        });
    });
    it('GET api/v1/products/latest', ()=>{
        return request.get('api/v1/products/latest').then((res)=>{
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/products/last-chance', ()=>{
        return request.get('api/v1/products/last-chance').then((res)=>{
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/products/filter', ()=>{
        return request.get('api/v1/products/filter').then((res)=>{
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/products/cheapest', ()=>{
        return request.get('api/v1/products/cheapest').then((res)=>{
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
});
describe('Category-controller', ()=>{
    it('GET api/v1/categories', ()=>{
        return request.get("api/v1/categories").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/categories/{id}', ()=>{
        return request.get(`api/v1/categories/${categoryId}`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(categoryId);
        });
    });
    it('GET api/v1/categories/parents', ()=>{
        return request.get(`api/v1/categories/parents`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/categories/by-parent/{id}', ()=>{
        return request.get(`api/v1/categories/by-parent/${categoryId}`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body[0].parentId).to.be.eq(categoryId);
        });
    });
});
describe('Card-controller', ()=>{
    it('GET api/v1/cards', ()=>{
        return request.get("api/v1/cards").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/cards{id}', ()=>{
        return request.get(`api/v1/cards/${cardId}`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(cardId);
        });
    });
});
describe('Address-controller', ()=>{
    it('GET api/v1/addresses', ()=>{
        return request.get("api/v1/addresses").then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
        });
    });
    it('GET api/v1/addresses/{id}', ()=>{
        return request.get(`api/v1/addresses/${addressId}`).then((res) => {
            console.log(res.body);
            expect(res.statusCode).to.be.eq(200);
            expect(res.body.id).to.be.eq(addressId);
        });
    });
});