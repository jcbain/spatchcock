const errors = {
  // part of the body is missing
  6800: "Missing details",

  6900: "Not allowed",
  6901: "Not authorized",
  6969: "Internal server error",
};

class SpatchcockError extends Error {
  constructor(code = 6969, details) {
    super(errors[code] || "Unknown Error");
    this.code = code;
    this.details = details;
  }

  json() {
    const { code, message, details } = this;
    return { code, message, details };
  }
}

module.exports = SpatchcockError;
