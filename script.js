const APILINK = 'http://www.omdbapi.com/?i=tt3896198&apikey=a72a8476';
const IMG_PATH = 'https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg';
const SEARCHAPI = "https://www.omdbapi.com/?apikey=a72a8476&t=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

// returnMovie(APILINK)
// function returnMovie(url){
//     fetch(url).then(res => res.json())
//     .then((data) => {
    
//         console.log(data.result);
//         data.result.forEach(element =>{
//             const div_card = document.createElement('div');
//             const div_row = document.createElement('div');
//             const div_column = document.createElement('div');
//             const image = document.createElement('img');
//             const title = document.createElement('h3');
//             const center = document.createElement('center');

//             title.innerHTML =  `$(element.title)`;

//             image.src = IMG_PATH + (image);
            
//             center.appendChild(image);
//             div_card.appendChild(center);
//             div_card.appendChild(title);
//             div_column.appendChild(div_card);
//             div_row.appendChild(div_column);

//             main.appendChild(div_row);
//         })
//     })
// }

const searchMovie = async () => {
    const input = document.getElementById("quary").value
    const response = await fetch(`https://www.omdbapi.com/?apikey=a72a8476&s=${input}`)
    console.log(response)
    document.getElementById("result").innerHTML = ""
    if (response.ok){
        const json = await response.json();
        console.log(json);
        json.Search.forEach(element => {
          
          document.getElementById("result").innerHTML += `
          <div class="card" style="width: 18rem;">
    <img src="${element.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.Title}</h5>
      <p class="card-text">Year : ${element.Year}.</p>
      <p class="card-Genre">Year : ${element.Genre}.</p>
      <a href=
        https://www.imdb.com/title/${element.imdbID}/
       class="btn btn-warning" style="font-weight: 700;">Go IMDB</a>
    </div>
  </div>
          `
        });
    }
}



/* 
Actors
: 
"Shawn Doyle, Patrick Gallagher, Katharine Isabelle"
Awards
: 
"1 win & 5 nominations"
Country
: 
"Canada"
Director
: 
"N/A"
Genre
: 
"Crime, Drama"
Language
: 
"English"
Metascore
: 
"N/A"
Plot
: 
"The death of his fiancee has left chess master Arkady Balagan agoraphobic and unwilling to step outside of his hotel. This debilitation, however, doesn't stop him from solving difficult crimes."
Poster
: 
"https://m.media-amazon.com/images/M/MV5BMTM0NzUwNjk5MF5BMl5BanBnXkFtZTcwOTk3NDM4NA@@._V1_SX300.jpg"
Rated
: 
"N/A"
Ratings
: 
[{…}]
Released
: 
"14 Mar 2011"
Response
: 
"True"
Runtime
: 
"60 min"
Title
: 
"Endgame"
Type
: 
"series"
Writer
: 
"Avrum Jacobson"
Year
: 
"2011"
imdbID
: 
"tt1797629"
imdbRating
: 
"7.5"
imdbVotes
: 
"3,800"
totalSeasons
: 
"1" */