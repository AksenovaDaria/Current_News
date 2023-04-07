const _apiBase = "https://newsapi.org/v2/top-headlines?country=us";
const _apiBase2 = "https://newsapi.org/v2/everything?";
const _apiKey = "&apiKey=09cfcc01be184a32a8349b27fae4fedb";

const getResourse = async (url) => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}`);
  }

  return await res.json();
};

const requestAll = (page) => {
  return getResourse(`${_apiBase}&pageSize=5&page=${page}${_apiKey}`);
};

const requestCategory = (text, page) => {
  return getResourse(
    `${_apiBase}&category=${text}&pageSize=5&page=${page}${_apiKey}`
  );
};

const requestKeyWord = (text, page) => {
  return getResourse(`${_apiBase2}q=${text}&pageSize=5&page=${page}${_apiKey}`);
};

export { requestAll, requestCategory, requestKeyWord };
