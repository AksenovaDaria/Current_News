import actions from "./actions";
import {
  CHANGE_ALL,
  CHANGE_DATE_FOR_RENDERING,
  GET_ID_SELECTED_NEWS,
  CHANGE_NAME_CALL_API,
  CHANGE_PAGE,
  TURN_HOME_PAGE,
} from "./constants";

const STORAGE = [
  {
    id: 1,
    func: "allNews",
    text: "ilon",
    page: 1,
    data: [],
    numb: "2",
    home: false,
    previous: false,
  },
];

const news = (
  state = STORAGE,
  { id, func, text, page, type, date, numb, home, previous }
) => {
  switch (type) {
    case CHANGE_ALL:
      return [...state].map((news) => {
        if (news.id === id) {
          news.func = func;
          news.text = text;
          news.page = page;
        }
        return news;
      });
    case CHANGE_DATE_FOR_RENDERING:
      return [...state].map((news) => {
        if (news.id === id) {
          news.date = date;
        }
        return news;
      });
    case GET_ID_SELECTED_NEWS:
      return [...state].map((news) => {
        if (news.id === id) {
          news.numb = numb;
        }
        return news;
      });
    case CHANGE_NAME_CALL_API:
      return [...state].map((news) => {
        if (news.id === id) {
          news.func = func;
        }
        return news;
      });
    case CHANGE_PAGE:
      return [...state].map((news) => {
        if (news.id === id) {
          news.page = page;
        }
        return news;
      });
    case TURN_HOME_PAGE:
      return [...state].map((news) => {
        if (news.id === id) {
          news.home = home;
        }
        return news;
      });

    default:
      return state;
  }
};

export default news;
