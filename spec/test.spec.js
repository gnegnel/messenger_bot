// ================================================================================================== //
//    ___ _     _          _
//   / __| |___| |__  __ _| |
//  | (_ | / _ \ '_ \/ _` | |
//   \___|_\___/_.__/\__,_|_|
//
// ================================================================================================== //

describe("Utility functions", function() {
  describe("getDaysSinceLastMonday", function() {
    it("Date is not a monday.", function() {
      // Arrange.
      let date = new Date(2018, 6, 13); // Friday, Jul 13 2018.
      // Act.
      const result = getDaysSinceLastMonday({
        date: date
      });
      // Assert.
      expect(result).toBe(4);
    });
    it("Date is a monday.", function() {
      // Arrange.
      let date = new Date(2018, 6, 9); // Monday, Jul 9 2018.
      // Act.
      const result = getDaysSinceLastMonday({
        date: date
      });
      // Assert.
      expect(result).toBe(0);
    });
    it("Date is a sunday.", function() {
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

describe("Error handling", function() {
  describe("findType", function() {
    it("Type is string.", function() {
      // Arrange.
      let string1 = "string";
      let string1 = "中文";
      // Act.
      const result = getDaysSinceLastMonday({
        date: date
      });
      // Assert.
      expect(result).toBe(4);
    });
    it("Date is a monday.", function() {
      // Arrange.
      let date = new Date(2018, 6, 9); // Monday, Jul 9 2018.
      // Act.
      const result = getDaysSinceLastMonday({
        date: date
      });
      // Assert.
      expect(result).toBe(0);
    });
    it("Date is a sunday.", function() {
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

// describe("User functions", function() {
//   describe("getDaysSinceLastMonday()", function() {
//     it("Write Your Test Expectation Here", function() {
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

// describe("Game functions", function() {
//   describe("getDaysSinceLastMonday()", function() {
//     it("Write Your Test Expectation Here", function() {
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

// describe("Ticket functions", function() {
//   describe("getDaysSinceLastMonday()", function() {
//     it("Write Your Test Expectation Here", function() {
//       // Arrange.
//       let bool = false;
//       // Act.
//       const result = getOpposite(bool);
//       // Assert.
//       expect(result).toBe(true);
//     });
//   });
// });
