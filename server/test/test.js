const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('./../server')
const should = chai.should()

chai.use(chaiHttp)

describe('API: Register', () => {
    it('it should register a user', (done) => {
        let user = {
            registrationfirstName: "UserXYZ",
            registrationemail: "userxyz@gmail.com",
            registrationpassword: "Qwerty_123"
        }
        chai.request(server)
            .post('/api/users/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
})


describe('API: Login', () => {
    it('it should login a user', (done) => {
        let user = {
            email: "userxyz@gmail.com",
            password: "Qwerty_123"
        }
        chai.request(server)
            .post('/api/users/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
})

describe('API: Get Products by Access token', () => {
    it('it should return list of products', (done) => {
        chai.request(server)
            .get('/api/dashboard/products')
            .set("access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzAzOTIwMGQtM2I4NS00ZGMxLWE2NTItMDY0ODhhOWVlZWQ0In0sImlhdCI6MTY0NzMyNDUxMywiZXhwIjoxNjQ3MzI4MTEzfQ.jn9Ei-yK-uLlK05fYz66Di82mTHeJIV9yARtDptOgHM")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
})

describe('API: GEt User auth by Access token', () => {
    it('it should user details', (done) => {
        chai.request(server)
            .post('/api/users/auth')
            .set("access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzAzOTIwMGQtM2I4NS00ZGMxLWE2NTItMDY0ODhhOWVlZWQ0In0sImlhdCI6MTY0NzMyNDUxMywiZXhwIjoxNjQ3MzI4MTEzfQ.jn9Ei-yK-uLlK05fYz66Di82mTHeJIV9yARtDptOgHM")
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
})

describe('API: GEt all cart items from user id', () => {
    it('it should return cart items', (done) => {
        let user = {
            userId:"3039200d-3b85-4dc1-a652-06488a9eeed4"
        }
        chai.request(server)
            .post('/api/order/cart-items')
            .set("access-token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMzAzOTIwMGQtM2I4NS00ZGMxLWE2NTItMDY0ODhhOWVlZWQ0In0sImlhdCI6MTY0NzMyNDUxMywiZXhwIjoxNjQ3MzI4MTEzfQ.jn9Ei-yK-uLlK05fYz66Di82mTHeJIV9yARtDptOgHM")
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
})