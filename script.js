const divOutput = document.getElementById('output');

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

// fetch('https://majazocom.github.io/Data/pokemons.json')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             const item = `<div class='item'>${element.name}</div>`;
//             divOutput.insertAdjacentHTML('beforeend', item);
//         });
//     })
//     .catch((error) => console.error('Error:', error));


/* 2.1  - 2.3 */

// fetch('https://majazocom.github.io/Data/dogs.json')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(dog => {
//             const item = `<div class="item">${dog.name}</div>`;
//             divOutput.insertAdjacentHTML('beforeend', item);
//         });
//     })
//     .catch((error) => console.error('Error:', error) )


/* 3.1 - 3.2 */

// fetch('https://majazocom.github.io/Data/books.json')
//     .then((repsonse) => repsonse.json())
//     .then((data) => {
//         data.forEach(b => {
//             if (b.pages < 500) {
//                 const item = `<div class="item">${b.author}: ${b.title}, ${b.pages} pages, [${b.genre}]</div>`;
//                 divOutput.insertAdjacentHTML('beforeend', item);
//             }
//         });
//     })
//     .catch((error) => console.error('Error:', error))


/* 4.1 - 4.3 */

// fetchVisitors();

// async function fetchVisitors() {
//     try {
//         const response = await fetch('https://majazocom.github.io/Data/attendees.json');
//         const data = await response.json();
        
//         data.forEach(element => {
//             if (element.attending) {
//                 const item = `<div class="item">
//                     ${element.name}
//                     (${element.age})
//                     Attending,
//                     Allergies: ${ ((element.allergies.length > 0) ? element.allergies : '-' ) }
//                     </div>`;
//                 out.insertAdjacentHTML('beforeend', item);
//             }
//         });
//     } catch(error) {
//         console.error('Error:', error);
//     }
// }

// fetchVisitorsAgain();

// async function fetchVisitorsAgain() {
//     try {
//         const response = await fetch('https://majazocom.github.io/Data/attendees.json');
//         const data = await response.json();
        
//         data.forEach(element => {
//             if (element.attending && element.allergies.length > 0) {
//                 const item = `<div class="item">
//                     ${element.name}
//                     (${element.age})
//                     Attending,
//                     Allergies: ${ ((element.allergies.length > 0) ? element.allergies : '-' ) }
//                     </div>`;
//                 divOutput.insertAdjacentHTML('beforeend', item);
//             }
//         });
//     } catch(error) {
//         console.error('Error:', error);
//     }
// }