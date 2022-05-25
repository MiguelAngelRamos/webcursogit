const container = document.querySelector('.container');

// crear un elemento html
const parrafo = document.createElement('p');

// texto parrafo
const textParrafo = document.createTextNode('Mi Parrafo');

// añandiendo el texto al parrafo
parrafo.appendChild(textParrafo);

// renderizarlo en el Dom
container.append(parrafo);

