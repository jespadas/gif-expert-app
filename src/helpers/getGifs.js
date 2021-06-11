export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }t&limit=10&api_key=p7NVM3rUeuNOz6JB1NbW9Ube0AOa1ma3`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });

    return gifs;

};