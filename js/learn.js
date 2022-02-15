// const elPostsList = document.querySelector('.posts')


// let posts = []

// function renderFilms(array, node){
//     node.innerHTML = null
    
//     array.forEach(element => {
//         const newLI = document.createElement('li')
        
//         newLI.textContent = element.Title
        
//         node.appendChild(newLI)
//     });
// }


// Promise

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then(data => {

//     if(data?.length > 0){
//         renderPosts(data, elPostsList)
//     } 
// })



// Async function

// async function getPosts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()

//     if(data?.length > 0){
//         renderPosts(data, elPostsList)
//     } 
// }

// getPosts()

// IIF

// (async function (){
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await response.json()

//     if(data?.length > 0){
//         renderPosts(data, elPostsList)
//     } 
// })()

// const API_KEY = "845a7e9c"


// async function getFilms(){
//     const response = await fetch("http://www.omdbapi.com/?apikey=" + API_KEY + "&s=avengers")
//     const data = await response.json()
    
//     if(data.Response === 'True'){
//         renderFilms(data.Search, elPostsList)
//     }
    
//     // if(data?.length > 0){
//     //     renderPosts(data, elPostsList)
//     // } 
// }

// getFilms()

