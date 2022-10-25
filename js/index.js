// import { readFileSync } from './fs';

function readFile(file) {
  const reader = new FileReader();
  reader.addEventListener('load', event => {
    const result = event.target.result;
    // Do something with result
  });

  reader.addEventListener('progress', event => {
    if (event.loaded && event.total) {
      const percent = (event.loaded / event.total) * 100;
      console.log(`Progress: ${Math.round(percent)}`);
    }
  });
  reader.readAsDataURL(file);
}

const cardFile = readFile('../components/card.html');
const card = new DOMParser().parseFromString(cardFile, 'text/html').childNodes;
console.log(card);
const root = document.getElementById('root');

root.appendChild(card);
