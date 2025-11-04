function addition(a, b) {
  return a + b;
}

// Exemple d’exécution directe si on lance `npm start`
if (require.main === module) {
  console.log("Résultat de 2 + 3 =", addition(2, 3));
}

// Export pour les tests
module.exports = addition;
