import supertest from "supertest";
import { expect } from "chai";
const request = supertest('http://ec2-3-124-113-90.eu-central-1.compute.amazonaws.com:8080/backend/');
const rolesId = "3b456fd2-f08e-4d5b-a18b-dc8f962f593f";

describe('Role-controller', ()=>{
    it('GET api/v1/roles', (done)=>{
        request.get("api/v1/roles").end((err, res) => {
            console.log(res.body);
            console.log(err);
            done();
        });
    });
    it('GET api/v1/roles', (done)=>{
        request.get(`api/v1/roles/${rolesId}`).end((err,res)=>{
            console.log(res.body);
            console.log(err);
            done();
        });
    });
});
describe('Product-controller', ()=>{
    it('GET api/v1/products', (done)=>{
        request.get("api/v1/products").end((err, res) => {
            console.log(res.body);
            console.log(err);
            done();
        });
    });
    it('GET api/v1/products/latest', (done)=>{
        request.get('GET api/v1/products/latest').end((err,res)=>{
            console.log(res.body);
            console.log(err);
            done();
        });
    });
    it('GET api/v1/products/last-chance', (done)=>{
        request.get('GET api/v1/products/last-chance').end((err,res)=>{
            console.log(res.body);
            console.log(err);
            done();
        });
    });
    it('GET api/v1/products/filter', (done)=>{
        request.get('GET api/v1/products/filter').end((err,res)=>{
            console.log(res.body);
            console.log(err);
            done();
        });
    });
    it('GET api/v1/products/cheapest', (done)=>{
        request.get('GET api/v1/products/cheapest').end((err,res)=>{
            console.log(res.body);
            console.log(err);
            done();
        });
    });
});