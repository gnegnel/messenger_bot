// ################################################################################################## //
//    ___ _     _          _
//   / __| |___| |__  __ _| |
//  | (_ | / _ \ '_ \/ _` | |
//   \___|_\___/_.__/\__,_|_|
//
// ################################################################################################## //

// Constant Variables
// ================================================================================================== //
const TODAY = new Date();

// Utility Functions
// ================================================================================================== //
/**
 * @name getDaysSinceLastMonday
 * @param  {Date} date - The date that will be used for the calculation
 * @returns {Number} - Amount of days from the date to its previous monday.
 * @description - Given a certain date, the function will count the amount of days have passed since the last monday. If the date given is monday, the result is 0.
 */
function getDaysSinceLastMonday({ date }) {
  var calculationResult = -1;
  if (date.getDay() === 0) {
    calculationResult = 7;
  } else {
    calculationResult = date.getDay() - 1;
  }
  return calculationResult;
}

// Error Handling
// ================================================================================================== //
function findType(value) {
  var type = "unknown";
  if (typeof value === "string" || value instanceof String) {
    // String
    type = "string";
  } else if (typeof value === "number" && isFinite(value)) {
    //
    type = "number";
  } else if (
    value &&
    typeof value === "object" &&
    value.constructor === Array
  ) {
    type = "array";
  } else if (value === null) {
  } else if (typeof value === "undefined") {
  }
}

// ================================================================================================== //
//   _   _
//  | | | |___ ___ _ _
//  | |_| (_-</ -_) '_|
//   \___//__/\___|_|
//
// ================================================================================================== //

class User {
  /**
   * @constructor
   * @param {Number} id - The user's Facebook Messenger identifier.
   * @param {String} gender - The user's gender.
   * @param {String} relationship - The user's relationship status.
   */
  constructor({ id, gender, relationship }) {
    this.id = id;
    this.gender = gender;
    this.relationship = relationship;

    // Array of all the tickets uploaded by the user.
    this.tickets = new Array(0);
    // Game level achieved by user.
    this.level = 1;
    // Amount of consecutive weeks achieved by the user.
    this.weekStreak = 0;
  }

  // ------------------------------------------------------------------------------------------------ //
  /**
   * @name addTickets
   * @param {Ticket} ticket
   * @description - Adds a ticket to the user’s array of tickets.
   */
  addTickets({ ticket }) {}

  // ------------------------------------------------------------------------------------------------ //
  /**
   * @name getTicketsInDateRange
   * @param {Date} startDate
   * @param {Number} days
   * @param {Boolean} backwards
   * @returns {Array[Ticket]}
   * @description - Returns an array of tickets in a particular time block.
   */
  getTicketsInDateRange({ startDate, days, backwards = false }) {}

  // ------------------------------------------------------------------------------------------------ //
  /**
   * @name updateProgress
   * @description - Evaluates the user’s tickets and weekSteak for a possibility for level advancement.
   */
  updateProgress() {
    var daysSinceMonday = getDaysSinceLastMonday(TODAY);
    var thisWeekTickets = this.getTicketsInDateRange({
      startDate: new Date(),
      days: daysSinceMonday,
      backwards: true
    });
  }
}

// ================================================================================================== //
//    ___
//   / __|__ _ _ __  ___
//  | (_ / _` | '  \/ -_)
//   \___\__,_|_|_|_\___|
//
// ================================================================================================== //
class Game {
  /**
   * @constructor
   */
  constructor() {
    // The array has the level as a key and the value is the amount of consecutive weeks to level up.
    this.levels = [1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
    // The array has the level as a key and the value is the amount of prices that a user receives after a successful week.
    this.prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // The amount of tickets a user must upload a week for it to be successful.
    this.goal = 4;
  }

  /**
   * @name checkLevelUp
   * @param {Number} level - A user's current level.
   * @param {Number} weekStreak - A user's current week streak.
   * @returns {Boolean} - True if the user just leveled up.
   * @description - Analyzes the parameters and returns if it means a level up or not. Responsible for the level up logic.
   */
  checkLevelUp({ level, weekStreak }) {
    if (level === 1) {
    } else {
    }
  }
}

// ================================================================================================== //
//   _____ _    _       _
//  |_   _(_)__| |_____| |_
//    | | | / _| / / -_)  _|
//    |_| |_\__|_\_\___|\__|
//
// ================================================================================================== //
class Ticket {
  /**
   * @constructor
   * @param {Date} timestamp - The time and date that the ticket was sent.
   * @param {String} url - Url link to the ticket's location in Facebook's servers.
   */
  constructor({ timestamp, url }) {}
}

// ################################################################################################## //
//   __  __      _
//  |  \/  |__ _(_)_ _
//  | |\/| / _` | | ' \
//  |_|  |_\__,_|_|_||_|
//
// ################################################################################################## //
// $(document).ready(function() {});