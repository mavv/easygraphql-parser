/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

'use strict'

const { expect } = require('chai')
const schemaParser = require('../lib/schemaParser')
const schemaCode = require('./schema-js')

describe('Parse GraphQL schema into an object', () => {
  let schema

  before(() => {
    schema = schemaParser(schemaCode)
  })

  describe('schemaDefinition', () => {
    it('Schema should have the query/mutation property', () => {
      expect(schema).to.exist
      expect(schema.schemaDefinition.query).to.exist
      expect(schema.schemaDefinition.mutation).to.exist
    })
  })

  describe('Type RootQuery', () => {
    it('Schema should have the type RootQuery', () => {
      expect(schema.RootQuery).to.exist
      expect(schema.RootQuery.type).to.be.eq('ObjectType')
      expect(schema.RootQuery.description).to.be.eq(undefined)
      expect(schema.RootQuery.fields.length).to.be.gt(0)
      expect(schema.RootQuery.fields.length).to.be.eq(1)
    })

    it('Schema should have the properties with the null type and array type', () => {
      expect(schema.RootQuery.fields).to.have.deep.include({ name: 'getUser', type: 'User', noNull: false, isArray: false, arguments: [] })
    })
  })

  describe('Type RootMutation', () => {
    it('Schema should have the type RootMutation', () => {
      expect(schema.RootMutation).to.exist
      expect(schema.RootMutation.type).to.be.eq('ObjectType')
      expect(schema.RootMutation.description).to.be.eq(undefined)
      expect(schema.RootMutation.fields.length).to.be.gt(0)
      expect(schema.RootMutation.fields.length).to.be.eq(1)
    })

    it('Schema should have the properties with the null type and array type', () => {
      const args = [{ name: 'input', noNull: true, isArray: false, type: 'UserInput' }]
      expect(schema.RootMutation.fields).to.have.deep.include({ name: 'createUser', type: 'User', noNull: false, isArray: false, arguments: args })
    })
  })

  describe('Type User', () => {
    it('Schema should have the type User', () => {
      expect(schema.User).to.exist
      expect(schema.User.type).to.be.eq('ObjectType')
      expect(schema.User.description).to.be.eq(undefined)
      expect(schema.User.fields.length).to.be.gt(0)
      expect(schema.User.fields.length).to.be.eq(3)
    })

    it('Schema should have the properties with the null type and array type', () => {
      expect(schema.User.fields).to.have.deep.include({ name: 'email', type: 'String', noNull: true, isArray: false, arguments: [] })
      expect(schema.User.fields).to.have.deep.include({ name: 'username', type: 'String', noNull: true, isArray: false, arguments: [] })
      expect(schema.User.fields).to.have.deep.include({ name: 'fullName', type: 'String', noNull: true, isArray: false, arguments: [] })
    })
  })

  describe('Type UserInput', () => {
    it('Schema should have the type UserInput', () => {
      expect(schema.UserInput).to.exist
      expect(schema.UserInput.type).to.be.eq('InputType')
      expect(schema.UserInput.description).to.be.eq(undefined)
      expect(schema.UserInput.fields.length).to.be.gt(0)
      expect(schema.UserInput.fields.length).to.be.eq(4)
    })

    it('Schema should have the properties with the null type and array type', () => {
      expect(schema.UserInput.fields).to.have.deep.include({ name: 'email', type: 'String', noNull: true, isArray: false, arguments: [] })
      expect(schema.UserInput.fields).to.have.deep.include({ name: 'username', type: 'String', noNull: true, isArray: false, arguments: [] })
      expect(schema.UserInput.fields).to.have.deep.include({ name: 'fullName', type: 'String', noNull: true, isArray: false, arguments: [] })
      expect(schema.UserInput.fields).to.have.deep.include({ name: 'password', type: 'String', noNull: true, isArray: false, arguments: [] })
    })
  })
})
