//funtion to fetch data from server

// async function githubUserProfile(username) {

//     //logic

//     const response = await fetch(`https://api.github.com/users/${username}`);

//     const finaldata = await response.json()

//     console.log(finaldata);

// }
//     githubUserProfile("sanjananikam1592");



// promise with .then and .catch

// function githubUserProfile(username) {
//     fetch(`https://api.github.com/users/${username}`)
//     .then((response) => response.json(), //json form
// )
//     .then((finaldata) => console.log(finaldata))
//     .catch((error) => {
//         console.log("Error while fetching data", error);
//     });
// }

// githubUserProfile("sanjananikam1592");


//assesment
//funtion to fetch data from server
//  async function typicode() {

// //     //logic

//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//     const finaldata = await response.json()

//     console.log(finaldata);

//  }
//     typicode();






// promise with .then and .catch
function typicode() {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then((response) => response.json(), //json form
)
    .then((finaldata) => console.log(finaldata))
    .catch((error) => {
        console.log("Error while fetching data", error);
    });
}

typicode();
