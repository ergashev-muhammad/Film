// Global variables

const elFilmForm = findElement(".films__form");
const elFilmsSearchInput = findElement(".films-search-input");
const elFilmList = findElement(".films");
const elFilmTemplate = findElement("#film-template").content;
const elPagination = findElement(".pagination")
const elPrevBtn = findElement(".previous");
const elNextBtn = findElement(".next");

// API key

const API_KEY = "845a7e9c";

// Search query
let searchQuery = "";

// Page

let page = 1;

// Render films

const renderFilms = (array, element) =>{
    
    element.innerHTML = null;
    
    array.forEach((film) => {
        
        const filmTemplate = elFilmTemplate.cloneNode(true);
        
        filmTemplate.querySelector(".film__title").textContent = film.Title;
        filmTemplate.querySelector(".film__image").src = film.Poster;
        filmTemplate.querySelector(".film__year").textContent = film.Year;
        filmTemplate.querySelector(".film__type").textContent = film.Type;
        
        element.appendChild(filmTemplate);
        
    });
    
};

// Async function

async function getFilms(){
    
    try {
        const response = await fetch("https://www.omdbapi.com/?apikey=" + API_KEY + "&s=" + searchQuery + "&page=" + page);
        
        const data = await response.json();
        
        const lastPage = Math.ceil(data.totalResults / 10);
        
        if(data?.Search){
            elPagination.classList.add("pagination-open")
        }
        
        if(data?.Search?.length > 0){
            
            renderFilms(data?.Search, elFilmList)   
        }   
        
        if(page <= 1) {
            elPrevBtn.disabled = true;
        } else {
            elPrevBtn.disabled = false;
        }
        
        if(page === lastPage) {
            elNextBtn.disabled = true;
        } else {
            elNextBtn.disabled = false;
        }
        
    } catch (err) {
        elFilmList.textContent = "The movie is not found"

    }
};

// Film form

elFilmForm.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    
    searchQuery = elFilmsSearchInput.value.trim()
    
    if(!searchQuery){
        return
    }
    
    getFilms();
    
    elFilmsSearchInput.value = null;
});

elPrevBtn.addEventListener("click", (evt) => {
    
    page--;
    getFilms();
})

elNextBtn.addEventListener("click", (evt) => {
    
    page++;
    getFilms();
})

getFilms();





















