class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    var response = await fetch(url);
    if (response.status == 200) {
        return response.json();
    } else {
        throw new HttpError(response);
    }
}

async function koreanMovie() {
    var res = await loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`);
    try {
        alert(`${res.author}: ${res.quote}`);
        return res;
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("무언가 에러가 발생했군요!");
            return koreanMovie();
        } else {
            throw err;
        }
    }
}

koreanMovie();