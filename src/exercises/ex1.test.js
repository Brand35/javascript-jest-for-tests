/**
 * @jest-environment jsdom
 */


describe('addClassToElement', () => {
  let addButton;
  let element;


  // Réinitialiser le DOM avant chaque test
  beforeEach(() => {
    // Injecter directement le contenu HTML nécessaire pour les tests
    document.body.innerHTML = `
      <div class="container">
        <button id="add-class-button">Add Class</button>
        <div id="element" class="initial-class"></div>
      </div>
    `;
    
    // Sélectionner les éléments nécessaires
    addButton = document.getElementById('add-class-button');
    element = document.getElementById('element');
    
    // Charger le script qui contient la fonction à tester
    require('./ex1');
  });


  test('should add a new class to the element when the button is clicked', () => {
    // Simuler un clic sur le bouton
    addButton.click();
    
    // Vérifier que la nouvelle classe est ajoutée à l'élément
    expect(element.classList.contains('new-class')).toBe(true);
  });
});
