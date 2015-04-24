/* global describe, it */
(function() {
    'use strict';
    describe("Hello world", function() {
        it("says hello", function() {
            expect(helloWorld()).toEqual("Hello world!");
        });
    });

    describe("Calculator - Add", function() {

        it("Correct SUM", function() {
            var sum = Calculator.add(5, 6);
            expect(sum).toEqual(11);
        });

        it("In-Correct SUM", function() {
            var sum = Calculator.add(5, 6);
            expect(sum).not.toEqual(9);
        });

        it("Negative SUM - I", function() {
            var sum = Calculator.add(-5, -6);
            expect(sum).toEqual(-11);
        });

        it("Negative value + Positive value", function() {
            var sum = Calculator.add(-5, 6);
            expect(sum).toEqual(1);
        });

        it("Sum is Zero", function() {
            var sum = Calculator.add(-6, 6);
            expect(sum).toEqual(0);
        });

        it("Invalid Field 1 - I", function() {
            var sum = Calculator.add("dummyText", 6);
            expect(sum).toEqual(6);
        });

        it("Invalid Field 1 - II", function() {
            var sum = Calculator.add(undefined, 6);
            expect(sum).toEqual(6);
        });

        it("Invalid Field 1 - III", function() {
            var sum = Calculator.add(null, 6);
            expect(sum).toEqual(6);
        });

        it("Invalid Field 2 - I", function() {
            var sum = Calculator.add(5, "dummyText");
            expect(sum).toEqual(5);
        });

        it("Invalid Field 2 - II", function() {
            var sum = Calculator.add(5, undefined);
            expect(sum).toEqual(5);
        });

        it("Invalid Field 2 - III", function() {
            var sum = Calculator.add(5, null);
            expect(sum).toEqual(5);
        });

        it("Both Invalid Fields I", function() {
            var sum = Calculator.add("dummyText", "dummyText");
            expect(sum).toEqual(0);
        });

        it("Both Invalid Fields II", function() {
            var sum = Calculator.add(null, null);
            expect(sum).toEqual(0);
        });

        it("Both Invalid Fields III", function() {
            var sum = Calculator.add(undefined, null);
            expect(sum).toEqual(0);
        });
    });

    describe("Calculator - Substract", function() {

        it("Correct SUM", function() {
            var sum = Calculator.substract(16, 5);
            expect(sum).toEqual(11);
        });
    });

})();