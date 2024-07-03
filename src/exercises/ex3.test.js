
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Charger l'HTML
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

// Initialiser le DOM
let dom;
let document;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
  document = dom.window.document;

  // Charger le script ex1.js après avoir initialisé le DOM
  const scriptContent = fs.readFileSync(path.resolve(__dirname, './ex2.js'), 'utf8');
  const scriptElement = document.createElement("script");
  scriptElement.textContent = scriptContent;
  document.body.appendChild(scriptElement);

  });
  
  
  test(
    'Le formulaire est validé si l\'email est valide',()=>{
        const emailForm = document.getElementById('email-form');
        const emailInput = document.getElementById('email-input');
        const validationMessage = document.getElementById('validation-message');
        emailInput.value = 'test@test.com';
        expect(validationMessage.textContent).toBe(validationMessage.style.color );
    }
  )
  ;