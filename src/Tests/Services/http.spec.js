import { expect } from "chai";

import $http from "../../Services/http.service";

describe("HTTP Service", () => {
    describe("Smoke Tests", () => {
        it("Should exists", () => {
            // eslint-disable-next-line
            expect($http).to.exist;
        });

        it("should has HTTP methods", () => {
            expect($http.get).to.be.an.instanceOf(Function);
            expect($http.post).to.be.an.instanceOf(Function);
            expect($http.put).to.be.an.instanceOf(Function);
            expect($http.delete).to.be.an.instanceOf(Function);
        });
    });
});
