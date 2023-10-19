module.exports = {
    // Indica a Jest dónde buscar tus archivos de prueba.
    testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  
    // Directorio donde se encuentra tu código fuente.
    // Esto se utiliza para medir la cobertura de código.
    roots: ["<rootDir>/tests/src"],
  
    // Transforma archivos JS con Babel para que Jest pueda ejecutarlos.
    transform: {
      "^.+\\.js$": "babel-jest",
    },
  
    // Reporta la cobertura de código durante las pruebas.
    collectCoverage: true,
    coverageDirectory: "coverage",
  
    // Lista de directorios que Jest debe ignorar al buscar archivos de prueba.
    // Por ejemplo, directorios de dependencias o construcción.
    testPathIgnorePatterns: ["node_modules", "build"],
  
    // Configuración para utilizar módulos ES6.
    moduleFileExtensions: ["js", "json", "jsx", "node"],
  
    // Configuración adicional de Jest, si es necesario.
  };
  