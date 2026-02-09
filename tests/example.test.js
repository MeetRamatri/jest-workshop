const { calculateFinalAmount } = require("../src/pricing");

// test("example: sanity check", () => {
//   expect(1 + 1).toBe(2);
// });

test("Less than 0 subtotal", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

// test("More than 1000 subtotal", () => {
//   expect(calculateFinalAmount(1500)).toBe(1425);
// });


test("Not Coupon",()=>{
  expect(calculateFinalAmount(100)).toBe(100)
});

test("Save10 Coupon",()=>{
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90)
});

test("Flat50 Coupon",()=>{
  expect(calculateFinalAmount(100, "FLAT50")).toBe(50)
});

test("case-insensitive coupon",()=>{
  expect(calculateFinalAmount(100, "save10")).toBe(90)
});

// test("Check for invalid coupon", () => {
//   expect(() => calculateFinalAmount(100, "INVALID")).toThrow(
//     "Invalid Coupon",
//   );
// });
