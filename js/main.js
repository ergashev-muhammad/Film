const elFilmForm = findElement(".films__form");
const elFilmsSearchInput = findElement('.films-search-input');
const elFilmList = findElement(".films");
const elFilmTemplate = findElement('#film-template').content;

const API_KEY = "845a7e9c"

const renderFilms = (array, element) =>{
    
    array.forEach((film)=>{
        
        const filmTemplate = elFilmTemplate.cloneNode(true);
        
        filmTemplate.querySelector(".film__title").textContent = film.Title;
        filmTemplate.querySelector(".film__image").src = film.Poster;
        filmTemplate.querySelector(".film__year").textContent = film.Year;
        filmTemplate.querySelector(".film__type").textContent = film.Type;

        element.appendChild(filmTemplate);
        
    });
    
};


async function getFilms(searchQuery){
    const response = await fetch("http://www.omdbapi.com/?apikey=" + API_KEY + "&s=" + searchQuery);
    
    const data = await response.json();
    
    if(data.Response === "True"){
        renderFilms(data.Search, elFilmList)
    } else {
        
        elFilmList.innerHTML = "The movie is not found"

    }
};


elFilmForm.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    
    const searchQuery = elFilmsSearchInput.value.trim()
    
    if(!searchQuery){
        return
    }
    
    getFilms(searchQuery, elFilmTemplate);
    
    elFilmsSearchInput.value = null;
});



















