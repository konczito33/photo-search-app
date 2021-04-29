const API_KEY = '563492ad6f9170000100000148cdd610fa99409696364335259280dd'
const URL_CURATED = 'https://api.pexels.com/v1/curated?page=&per_page=40?size=large'

async function fetchPhotos(URL){
    const fetchData = await fetch(URL, {
        method: 'GET',
        headers:{
            Accept: 'aplication/json',
            Authorization: API_KEY
        }
    })
    const data = await fetchData.json()
    return data
}

async function displayPhotos(){
    const data = await fetchPhotos(URL_CURATED)
    const photos = data.photos
    console.log(photos)
}

displayPhotos()