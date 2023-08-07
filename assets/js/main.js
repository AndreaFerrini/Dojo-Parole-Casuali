const API_URL = 'https://flynn.boolean.careers/exercises/api/random/word';
const N = 7;

async function getParolaRandom() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.response.split(' ');
  } catch (error) {
    console.error('Errore durante la chiamata API:', error.message);
    return [];
  }
}

async function generaParolaStampa() {
  const ParolaRandom = await getParolaRandom();
  
  if (ParolaRandom.length > 0) {
    const parolaScelta = ParolaRandom.slice(0, N);
    const frase = parolaScelta.join(' ');
    console.log('Frase generata:', frase);
  } else {
    console.log('Impossibile ottenere parole casuali.');
  }
}

generaParolaStampa();

