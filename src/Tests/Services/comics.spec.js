import chai, { expect } from 'chai'
// import moxios from 'moxios'
// import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import $comics from '../../Services/comics.service'

chai.use(sinonChai)

describe('Comics Service', () => {
    describe('Smoke Tests', () => {
        it('should exist and be an object', () => {
            expect($comics).to.exist
            expect($comics).to.be.an.instanceOf(Object)
        })
    });

    describe('should have a fetch comics by year method', () => {
        expect($comics.fetch).to.exist;
        expect($comics.fetch).to.be.an.instanceOf(Function);
    });

    describe('should have a fetch available years method', () => {
        expect($comics.fetchAvailableYears).to.exist;
        expect($comics.fetchAvailableYears).to.be.an.instanceOf(Function);
    });
})
