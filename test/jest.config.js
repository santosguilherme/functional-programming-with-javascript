module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**\\*.(spec|test).(tsx|ts|js)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
