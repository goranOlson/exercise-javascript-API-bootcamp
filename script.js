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

// const output = document.getElementById('output');

// fetch('https://majazocom.github.io/Data/dogs.json')
//     .then((response) => response.json())
//     .then((data) => {
//         // data.forEach(dog => { console.log(dog.name) })
//         data.forEach(dog => {
//             const item = `<div class="item">${dog.name}</div>`;
//             output.insertAdjacentHTML('beforeend', item);
//         });
//     })
//     .catch((error) => console.error('Error:', error) )


/* 3.1 - 3.2 */

// const out = document.getElementById('output');

// fetch('https://majazocom.github.io/Data/books.json')
//     .then((repsonse) => repsonse.json())
//     .then((data) => {
//         // console.log(data);
//         data.forEach(b => {
//             if (b.pages < 500) {
//                 const item = `<div class="item">${b.author}: ${b.title}, ${b.pages} pages, [${b.genre}]</div>`;
//                 output.insertAdjacentHTML('beforeend', item);
//             }
//         });
//     })
//     .catch((error) => console.error('Error:', error))


/* 4.1 - 4.3 */

const out = document.getElementById('output');

// async function fetchVisitors() {
//     try {
//         const response = await fetch('https://majazocom.github.io/Data/attendees.json');
//         const data = await response.json();
//          console.log(data);
        
//         data.forEach(element => {
//             // console.log(element);

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

fetchVisitorsAgain();

async function fetchVisitorsAgain() {
    try {
        const response = await fetch('https://majazocom.github.io/Data/attendees.json');
        const data = await response.json();
         console.log(data);
        
        data.forEach(element => {
            // console.log(element);

            if (element.attending && element.allergies.length > 0) {
                const item = `<div class="item">
                    ${element.name}
                    (${element.age})
                    Attending,
                    Allergies: ${ ((element.allergies.length > 0) ? element.allergies : '-' ) }
                    </div>`;
                out.insertAdjacentHTML('beforeend', item);
            }
        });
    } catch(error) {
        console.error('Error:', error);
    }
}


/*
    age: 23
    allergies: (2) ['vegan', 'pineapple']
    attending: true
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    name: "Veronica"
*/



