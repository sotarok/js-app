module.exports = {
  preset: 'ts-jest',
  //testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.prod.json',
    },
  },


  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],

  projects: [
    //{
    //  displayName: 'server',
    //  setupTestFrameworkScriptFile: './test/bootstrap.js',
    //  testEnvironment: './test/mongo-environment.js',
    //  testMatch: ['<rootDir>/test/**/*.test.js'],
    //},
    {
      displayName: 'client',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/src/**/*.test.tsx?'],
    },
  ],
};
