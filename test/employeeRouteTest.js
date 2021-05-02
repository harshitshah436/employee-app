const app = require('../index.js').app
const request = require('supertest')
const expect = require('chai').expect

describe("Employee API", () => {

  let employee = {
    "firstname": "Unit",
    "lastname": "Test",
    "hiredate": "2021-01-27T05:00:00.000Z",
    "role": "MANAGER"
  }

  it("should create a new employee to the db. POST /api/employee", (done) => {
    request(app)
      .post('/api/employee')
      .send(employee)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        let length = res.body.length
        let newEmployee = res.body[length-1]
        expect(newEmployee).to.have.property('_id')
        expect(newEmployee.firstname).to.equal("Unit")
        expect(newEmployee.lastname).to.equal("Test")
        expect(newEmployee).to.have.property('hiredate')
        expect(newEmployee.role).to.equal("MANAGER")
        employee = newEmployee
      })
      .expect(200, done)
  })
  
  describe("Create a new employee", () => {
    it("should have called an external quotes api", () => {
      expect(employee).to.have.property('quote')
      expect(employee.joke.length).to.greaterThan(5)
    })
    it("should have called an external jokes api", () => {
      expect(employee).to.have.property('joke')
      expect(employee.joke.length).to.greaterThan(5)
    })
  })

  it("should return all employees. GET /api/employee", (done) => {
    request(app)
      .get('/api/employee')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body[0]).to.have.property('_id')
      })
      .expect(200, done)
  })

  it("should find an employee by a unique id. GET /api/employee/:id", (done) => {
    request(app)
      .get(`/api/employee/${employee._id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect( (res) => {
        expect(res.body._id).to.equal(employee._id)
        expect(res.body.firstname).to.equal("Unit")
        expect(res.body.lastname).to.equal("Test")
      })
      .expect(200, done)
  })

  it("should update an employee by a unique id. PUT /api/employee/:id", (done) => {
    employee.firstname="Unit1"
    employee.lastname="Test1"
    request(app)
      .put(`/api/employee/${employee._id}`)
      .send(employee)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect( (res) => {
        let updatedEmployee = res.body.find(emp => emp._id === employee._id)
        expect(updatedEmployee.firstname).to.equal("Unit1")
        expect(updatedEmployee.lastname).to.equal("Test1")
        employee = updatedEmployee
      })
      .expect(200, done)
  })

  it("should delete an employee by a unique id. DELETE /api/employee/:id", (done) => {
    request(app)
      .delete(`/api/employee/${employee._id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect( (res) => {
        let deletedEmployee = res.body.find(emp => emp._id === employee._id)
        expect(deletedEmployee).to.be.undefined
      })
      .expect(200, done)
  })
})