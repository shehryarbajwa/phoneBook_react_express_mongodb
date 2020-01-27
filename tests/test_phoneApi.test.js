const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Phone = require('../models/phone.js')
const {personsInDb, initialPersons} = require('./test_helper')

beforeEach(async () => {
    await Phone.deleteMany({})

    let personObject = new Phone(initialPersons[0])
    await personObject.save()

    personObject = new Phone(initialPersons[1])
    await personObject.save()
})

describe('test phone posts', () => {
    test('phoneBook persons are returned', async () => {
        await api
        .get('/api/persons')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    })

    test('request returns the correct number of persons', async () => {
        const persons = await personsInDb()
        expect(persons.length).toBe(2)
    })

    test('persons have an id property', async () => {
        const persons = await personsInDb()
        const id = persons.map(person => person.id)
        expect(id).toBeDefined()
    })

    test('adding a person', async () => {
        const newPerson = {
            name: 'Matthew',
            number: '6011212323'
        }

        await api
        .post('/api/persons')
        .send(newPerson)
        .expect(201)
        .expect('Content-Type', /application\/json/)

        const personsAtEnd = await personsInDb()
        expect(personsAtEnd.length).toBe(initialPersons.length + 1)

        const name = personsAtEnd.map(person => person.name)
        expect(name).toContain('Matthew')
    })

    test('adding a person without number', async () => {
        const newPerson = {
            name: 'Simon',
            number: ''
        }

        const savedPerson = await api
        .post('/api/persons')
        .send(newPerson)
        .expect(404)
    })
});


afterAll(() => {
    mongoose.connection.close()
})