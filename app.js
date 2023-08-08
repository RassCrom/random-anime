const title = document.getElementById('title');
const poster = document.getElementById('poster');
const year = document.getElementById('year');
const type = document.getElementById('type');
const url = 'https://raw.githubusercontent.com/manami-project/anime-offline-database/master/anime-offline-database-minified.json'
const btn = document.getElementById('generate');

async function fetchAnime() {
    const response = await fetch(url);
    const json = await response.json();
    return json['data']
};

function randomGenerator(length) {
    return Math.floor(Math.random() * length)
};

btn.addEventListener('click', () => {
    fetchAnime().then(anime => {
        try {
            let lenAnime = anime.length
            let anime2 = anime[randomGenerator(lenAnime)]
            let jsonTitle = anime2['title'];
            let jsonPoster = anime2['picture'];
            let jsonType = anime2['type'];
            let jsonYear = anime2['animeSeason']['year'];
            title.innerHTML = jsonTitle;
            poster.src = jsonPoster;
            year.innerHTML = jsonYear;
            type.innerHTML = jsonType;
        } catch (e) {
            console.log(e)
        }

    
    });
})


