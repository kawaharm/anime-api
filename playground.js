const { Season } = require('./models');

Season.insertMany({
    url: "https://myanimelist.net/anime/34927/Rilu_Rilu_Fairilu__Mahou_no_Kagami",
    title: "Rilu Rilu Fairilu: Mahou no Kagami",
    image_url: "https://cdn.myanimelist.net/images/anime/13/84497.jpg",
    synopsis: "Second Season of Rilu Rilu Fairilu: Yousei no Door."
})
    .then((response) => {
        console.log('response', response);
    })
    .catch((err) => {
        console.log('error', err);
    })