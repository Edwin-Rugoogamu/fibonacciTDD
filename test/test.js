const assert = require("assert");
const fibonacci = require ("./fibonacci")


describe("fibonacci",()=>{
    it("1 = 1" , ()=>{
        assert.equal(fibonacci(1),1)
    });
    it("2 = 1" , ()=>{
        assert.equal(fibonacci(2),1)
    });
    it("3 = 2" , ()=>{
        assert.equal(fibonacci(3),2)
    });
    it("4 = 3" , ()=>{
        assert.equal(fibonacci(4),3)
    });
    it("5 = 5" , ()=>{
        assert.equal(fibonacci(5),5)
    });
    it("6 = 8" , ()=>{
        assert.equal(fibonacci(6),8)
    });
    it("7 = 13" , ()=>{
        assert.equal(fibonacci(7),13)
    });
    it("8 = 21" , ()=>{
        assert.equal(fibonacci(8),21)
    });
    it("9 = 34" , ()=>{
        assert.equal(fibonacci(9),34)
    });

})