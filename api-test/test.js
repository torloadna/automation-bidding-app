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