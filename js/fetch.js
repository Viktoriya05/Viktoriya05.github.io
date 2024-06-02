async function fetchDogImages() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/3');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error fetching dog images:', error);
        return [];
    }
}

async function loadMoreDogs() {
    const images = await fetchDogImages();
    images.forEach(url => appendDogImage(url));
}

async function fetchCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const factInEnglish = data.fact;

        const translatedFact = await translateToRussian(factInEnglish);

        return translatedFact;
    } catch (error) {
        console.error('Error fetching or translating cat fact:', error);
        return 'Не удалось получить факт о котах.';
    }
}

async function translateToRussian(text) {
    try {
        const response = await fetch('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=en|ru');
        const data = await response.json();
        return data.responseData.translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        return 'Не удалось перевести текст.';
    }
}