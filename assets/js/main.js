const API_URL = 'https://flynn.boolean.careers/exercises/api/random/word';
const N = 7;

async function getParolaRandom() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Errore durante la chiamata API:', error.message);
    return '';
  }
}

async function generaParolaStampa() {
  const paroleAccumulate = [];

  for (let i = 0; i < N; ) {
    const parola = await getParolaRandom();
    
    if (parola.length >= 3) {
      paroleAccumulate.push(parola);
      i++;
    }
  }

  const frase = paroleAccumulate.join(' ');
  
  if (frase.length > 0) {
    console.log('Frase generata:', frase);
  } else {
    console.log('Impossibile ottenere parole casuali.');
  }
}

generaParolaStampa();

