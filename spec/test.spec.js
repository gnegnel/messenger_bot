// ================================================================================================== //
//    ___ _     _          _
//   / __| |___| |__  __ _| |
//  | (_ | / _ \ '_ \/ _` | |
//   \___|_\___/_.__/\__,_|_|
//
// ================================================================================================== //

describe("Global functions", () => {
  describe("getDaysSinceLastMonday", () => {
    it("Date is not a monday.", () => {
      // Arrange.
      let date = new Date(2018, 6, 13); // Friday, Jul 13 2018.
      // Act.
      const result = getDaysSinceLastMonday({
        date: date
      });
      // Assert.
      expect(result).toBe(4);
    });
    it("Date is a monday.", () => {
      // Arrange.
      let date = new Date(2018, 6, 9); // Monday, Jul 9 2018.
      // Act.
      const result = getDaysSinceLastMonday({
        date: date
      });
      // Assert.
      expect(result).toBe(0);
    });
    it("Date is a sunday.", () => {
      // Arrange.
      let date = new Date(2018, 6, 15); // Friday, Jul 13 2018.
      // Act.
      const result = getDaysSinceLastMonday({
        date: date
      });
      // Assert.
      expect(result).toBe(7);
    });
  });
});

// ================================================================================================== //
//   _   _
//  | | | |___ ___ _ _
//  | |_| (_-</ -_) '_|
//   \___//__/\___|_|
//
// ================================================================================================== //

// describe("User functions", () => {
//   describe("getDaysSinceLastMonday()", () => {
//     it("Write Your Test Expectation Here", () => {
//       // Arrange.
//       let simpleUser;
//       // Act.
//       const result = getOpposite(bool);
//       // Assert.
//       expect(result).toBe(true);
//     });
//   });
// });

// ================================================================================================== //
//    ___
//   / __|__ _ _ __  ___
//  | (_ / _` | '  \/ -_)
//   \___\__,_|_|_|_\___|
//
// ================================================================================================== //

// describe("Game functions", () => {
//   describe("getDaysSinceLastMonday()", () => {
//     it("Write Your Test Expectation Here", () => {
//       // Arrange.
//       let bool = false;
//       // Act.
//       const result = getOpposite(bool);
//       // Assert.
//       expect(result).toBe(true);
//     });
//   });
// });

// ================================================================================================== //
//   _____ _    _       _
//  |_   _(_)__| |_____| |_
//    | | | / _| / / -_)  _|
//    |_| |_\__|_\_\___|\__|
//
// ================================================================================================== //

// describe("Ticket functions", () => {
//   describe("getDaysSinceLastMonday()", () => {
//     it("Write Your Test Expectation Here", () => {
//       // Arrange.
//       let bool = false;
//       // Act.
//       const result = getOpposite(bool);
//       // Assert.
//       expect(result).toBe(true);
//     });
//   });
// });
