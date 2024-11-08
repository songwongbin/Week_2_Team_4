class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  
  // function loadJson(url) {
  //   return fetch(url)     //>이걸 이턴해서 
  //     .then(response => {   //다음거에 줌.  이걸 그냥 변수로 선언해서 할당한것.
  //       if (response.status == 200) {
  //         return response.json();
  //       } else {
  //         throw new HttpError(response);
  //       }
  //     })
  // }
  
  
  async function loadJson(url) {
    let response = await fetch(url);  //여기서 할당하고 다음걸로 넘어가야함.
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  async function koreanMovie() {
    let res;
    while (true) {
  
      try {
        res = await loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`);
        break;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("무언가 에러가 발생했군요!");
          return koreanMovie();//에러 발생시 다시 하기.
        } else {
          throw err;
        }
      }
  
    }
    alert(`${res.author}: ${res.quote}`);
    return res;
  }
  koreanMovie();