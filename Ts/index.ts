const moviesBox: HTMLElement | any = document.querySelector("#moviesBox");
const movies: HTMLElement | any = document.querySelector("#movies");
const showsBox: HTMLElement | any = document.querySelector("#showsBox");
const tv: HTMLElement | any = document.querySelector("#tv");
const people: HTMLElement | any = document.querySelector("#people");
const Actors: HTMLElement | any = document.querySelector("#Actors");
const movLink = document.getElementById("movLink");
const shows = document.getElementById("shows");
const actorsLink = document.getElementById("actors");
// Display SECTION

const dispalyMovies = (movies: any): void => {
  let movieBox: string = ``;
  for (let i: number = 0; i < movies.length; i++) {
    movieBox += `
          <div class="col-md-3 cursor-pointer">

              <div class="position-relative">
                <img
                  src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}"
                  class="w-100"
                  alt=""
                />
                <h3 class="fs-6">${movies[i].title}</h3>
                <p class="vote position-absolute top-0 end-0 p-1">${movies[i].vote_average}</p>

            </div>
            </div>
`;
  }
  moviesBox.innerHTML += movieBox;
};
const dispalyShows = (show: any): void => {
  let showBox: string = ``;
  for (let i: number = 0; i < show.length; i++) {
    showBox += `
          <div class="col-md-3 cursor-pointer">

              <div class="position-relative">
                <img
                  src="https://image.tmdb.org/t/p/w500${show[i].poster_path}"
                  class="w-100"
                  alt=""
                />
                <h3 class="fs-6">${show[i].title}</h3>
                <p class="vote position-absolute top-0 end-0 p-1">${show[i].vote_average}</p>

            </div>
            </div>
`;
  }
  showsBox.innerHTML += showBox;
};
const showActors = (actor: any): void => {
  let box: string = ``;
  for (let i: number = 0; i < actor.length; i++) {
    box += `
          <div class="col-md-3 cursor-pointer">

              <div class="position-relative">
                <img
                  src="https://image.tmdb.org/t/p/w500${actor[i].profile_path}"
                  class="w-100"
                  alt=""
                />
                <h3 class="fs-6">${actor[i].name}</h3>
                

            </div>
            </div>
`;
  }
  Actors.innerHTML += box;
};

// ************************************* SECTION
// Get Data SECTION
async function getMovies(page: number): Promise<void> {
  let result: any = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=9e8f374c695421864a545db3a15ed6eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`
  );
  let { results }: any = await result.json();
  console.log(results);

  dispalyMovies(results);
}
async function getShows(page: number): Promise<void> {
  let result: any = await fetch(
    `https://api.themoviedb.org/3/discover/tv?api_key=9e8f374c695421864a545db3a15ed6eb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`
  );
  let { results }: any = await result.json();
  console.log(results);

  dispalyShows(results);
}
async function getActors(page: number): Promise<void> {
  let result: any = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=9e8f374c695421864a545db3a15ed6eb&language=en-US&page=${page}`
  );
  let { results }: any = await result.json();
  console.log(results);

  showActors(results);
}
// ************************************* SECTION
// Call *SECTION
movLink?.addEventListener("click", (e) => {
  moviesBox.classList.remove("d-none");
  tv.classList.add("d-none");
  people.classList.add("d-none");
  getMovies(1);
});
actorsLink?.addEventListener("click", (e) => {
  moviesBox.classList.add("d-none");
  moviesBox.classList.remove("py-5");
  tv.classList.add("d-none");
  people.classList.remove("d-none");
  people.classList.add("d-block");
  getActors(1);
});
shows?.addEventListener("click", (e) => {
  moviesBox.classList.add("d-none");
  moviesBox.classList.remove("py-5");
  people.classList.add("d-none");
  tv.classList.remove("d-none");
  tv.classList.add("d-block");
  getShows(1);
});
getMovies(1);
