/* 1.1 */
// fetch('https://majazocom.github.io/Data/pokemons.json')
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.log('Error:', error)); 

/* 1.2 */
// fetch('https://majazocom.github.io/Data/pokemons.json')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             console.log(element);
//         });
//     })
//     .catch((error) => console.log('Error:', error));

/* 1.3 */
// const divOutput = document.getElementById('output');

// fetch('https://majazocom.github.io/Data/pokemons.json')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             //  console.log(element);
//             const item = `<div class='item'>${element.name}</div>`;
//             divOutput.insertAdjacentHTML('beforeend', item);
//         });
//     })
//     .catch((error) => console.error('Error:', error));



/* 2.1  - 2.3 */

const output = document.getElementById('output');

fetch('https://majazocom.github.io/Data/dogs.json')
    .then((response) => response.json())
    .then((data) => {
        // data.forEach(dog => { console.log(dog.name) })
        data.forEach(dog => {
            const item = `<div class="item">${dog.name}</div>`;
            output.insertAdjacentHTML('beforeend', item);
        });
    })
    .catch((error) => console.error('Error:', error) )