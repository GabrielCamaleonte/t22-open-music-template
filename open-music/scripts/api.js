const fetchMusics = () =>  {
    const url = `https://openmusic-fake-api.onrender.com/api/musics`

    fetch(url)
        .then(response => response.json())
        .then(musics => {
            console.log(musics)
        })
};

fetchMusics()