const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  
  it('returns 2,3 for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]),[2,3]);
  });
  it("returns an empty array for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
  it("original array should still have 3 elements", () => {
    assert.strictEqual(words.length, 3);
  });
  it("returns '[Lighthouse, Labs]' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});