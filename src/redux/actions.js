import {
  CHANGE_ALL,
  CHANGE_DATE_FOR_RENDERING,
  GET_ID_SELECTED_NEWS,
  CHANGE_NAME_CALL_API,
  CHANGE_PAGE,
  TURN_HOME_PAGE,
} from "./constants";

export const actionChangeAll = (id, func, text, page) => ({
  type: CHANGE_ALL,
  id,
  func,
  text,
  page,
});

export const actionChangeDataForRendering = (id, date) => ({
  type: CHANGE_DATE_FOR_RENDERING,
  id,
  date,
});

export const actionGetIDofTheSelectedNews = (id, numb) => ({
  type: GET_ID_SELECTED_NEWS,
  id,
  numb,
});

export const actionChangeNameCallApi = (id, func) => ({
  type: CHANGE_NAME_CALL_API,
  id,
  func,
});

export const actionChangePage = (id, page) => ({
  type: CHANGE_PAGE,
  id,
  page,
});

export const actionTurnHomePage = (id, home) => ({
  type: TURN_HOME_PAGE,
  id,
  home,
});
