const { slice } = require('../src/index.js');

// BEGIN
test("slice", () => {
   expect(slice([0, 1, 2, 3])).toEqual([0, 1, 2, 3]);
   expect(slice([0, 1, 2, 3], 0)).toEqual([0, 1, 2, 3]);
   expect(slice([0, 1, 2, 3], 1)).toEqual([1, 2, 3]);
   expect(slice([0, 1, 2, 3], 1, 3)).toEqual([1, 2]);
   expect(slice([0, 1, 2, 3], 0, 99)).toEqual([0, 1, 2, 3]);
   expect(slice([0, 1, 2, 3], -2)).toEqual([2, 3]);
   expect(slice([0, 1, 2, 3], 0, -2)).toEqual([0, 1]);
   expect(slice([])).toEqual([]);
   expect(slice([], 1, 99)).toEqual([]);
   expect(slice([1], -99)).toEqual([1]);
   expect(slice([1], -99)).toEqual([]);
});
// END
