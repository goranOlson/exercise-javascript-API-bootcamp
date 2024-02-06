/* 1 */
// fetch('https://majazocom.github.io/Data/pokemons.json')
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.log('Error:', error)); 

/* 2 */
// fetch('https://majazocom.github.io/Data/pokemons.json')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             console.log(element);
//         });
//     })
//     .catch((error) => console.log('Error:', error));

/* 3 */
const divOutput = document.getElementById('output');

fetch('https://majazocom.github.io/Data/pokemons.json')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            //  console.log(element);
            const item = `<div class='item'>${element.name}</div>`;
            divOutput.insertAdjacentHTML('beforeend', item);
        });
    })
    .catch((error) => console.log('Error:', error));
