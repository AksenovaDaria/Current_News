import NewsItem from "../newsItem/newsItem";
import { useState, useEffect } from "react";
import { requestAll, requestCategory, requestKeyWord } from "../../API/NewsAPI";
import "./main.scss";
import { connect, useDispatch } from "react-redux";
import {
  actionChangeAll,
  actionChangeDataForRendering,
  actionChangeNameCallApi,
  actionChangePage,
  actionTurnHomePage,
} from "../../redux/actions";
import Menu from "../menu/menu";

const Main = (news) => {
  const [dataArray, setDataArray] = useState("yy");
  const [text, setText] = useState("");
  const [func, setFunc] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [back, setBack] = useState("");

  function changeDataArray(newData) {
    setDataArray(newData);
  }

  function changeText(newText) {
    setText(newText);
  }

  function changeFunc(newPage) {
    setFunc(newPage);
  }

  function changeShowButton(value) {
    setShowButton(value);
  }

  function changeBack(value) {
    setBack(value);
  }

  const getDate = (page) => requestAll(page);
  const getSector = (text, page) => requestCategory(text, page);
  const getText = (text, page) => requestKeyWord(text, page);

  const dispatch = useDispatch();

  useEffect(() => {
    if (news.news[0].home === true) {
      dispatch(actionChangeNameCallApi(1, "allNews"));
      dispatch(actionTurnHomePage(1, false));

      if (news.news[0].func === "allNews") {
        getDate(news.news[0].page).then((result) => {
          changeDataArray(result.articles);

          dispatch(actionTurnHomePage(1, false));
          dispatch(actionChangeNameCallApi(1, ""));
          dispatch(actionChangeDataForRendering(1, result.articles));
          render();
          changeFunc("allNews");
        });
      } else if (news.news[0].func === "getSector") {
        getSector(news.news[0].text, news.news[0].page).then((result) => {
          changeDataArray(result.articles);
          dispatch(actionTurnHomePage(1, false));
          dispatch(actionChangeDataForRendering(1, result.articles));
          render();
          dispatch(actionChangeNameCallApi(1, ""));
          changeFunc("getSector");
        });
      } else if (news.news[0].func === "keyWord") {
        getText(news.news[0].text, news.news[0].page).then((result) => {
          changeDataArray(result.articles);
          dispatch(actionTurnHomePage(1, false));
          dispatch(actionChangeDataForRendering(1, result.articles));
          render();
          dispatch(actionChangeNameCallApi(1, ""));
          changeFunc("keyWord");
        });
      }
    } else {
      if (news.news[0].func === "allNews") {
        getDate(news.news[0].page).then((result) => {
          changeDataArray(result.articles);
          dispatch(actionTurnHomePage(1, false));
          dispatch(actionChangeNameCallApi(1, ""));
          dispatch(actionChangeDataForRendering(1, result.articles));
          render();
          changeFunc("allNews");
        });
      } else if (news.news[0].func === "getSector") {
        getSector(news.news[0].text, news.news[0].page).then((result) => {
          changeDataArray(result.articles);

          dispatch(actionTurnHomePage(1, false));
          dispatch(actionChangeDataForRendering(1, result.articles));
          render();
          dispatch(actionChangeNameCallApi(1, ""));
          changeFunc("getSector");
        });
      } else if (news.news[0].func === "keyWord") {
        getText(news.news[0].text, news.news[0].page).then((result) => {
          changeDataArray(result.articles);
          dispatch(actionTurnHomePage(1, false));
          dispatch(actionChangeDataForRendering(1, result.articles));
          render();
          dispatch(actionChangeNameCallApi(1, ""));
          changeFunc("keyWord");
        });
      }
    }
  });

  const handleClick = (item) => {
    changeText(item);
    dispatch(actionChangeAll(1, "getSector", item, 1));
    changeShowButton(false);
  };

  const loadNextPage = () => {
    const pageNow = news.news[0].page;
    const pageNew = +pageNow + 1;
    dispatch(actionChangePage(1, pageNew));
    dispatch(actionChangeNameCallApi(1, func));
    if (pageNew > 1) {
      changeShowButton(true);
    } else {
      changeShowButton(false);
    }
  };

  const loadPastPage = () => {
    const pageNow = news.news[0].page;
    const pageNew = +pageNow - 1;
    dispatch(actionChangePage(1, pageNew));
    dispatch(actionChangeNameCallApi(1, func));

    if (pageNew > 1) {
      changeShowButton(true);
    } else {
      changeShowButton(false);
    }
  };

  let dataArr = Array.from(dataArray);

  function render() {
    const elements = dataArr.map((item, key) => {
      const num = key;

      if (!item.urlToImage) {
        return (
          <NewsItem
            key={num}
            id={num}
            name={item.title}
            date={item.publishedAt}
            img="https://oir.mobi/uploads/posts/2022-08/1661441076_1-oir-mobi-p-starie-gazeti-fon-krasivo-1.jpg"
            text={item.description}
            content={item.content}
          />
        );
      } else {
        return (
          <NewsItem
            key={num}
            id={num}
            name={item.title}
            date={item.publishedAt}
            img={item.urlToImage}
            text={item.description}
            content={item.content}
          />
        );
      }
    });
    return elements;
  }

  return (
    <>
      <div className="menu">
        <Menu onClick={handleClick} />
      </div>
      <hr></hr>
      <div className="but">
        <button
          style={{
            display: showButton === true ? "block" : "none",
          }}
          onClick={loadPastPage}
          className="previous"
        >
          Previous
        </button>
        <button onClick={loadNextPage} className="next">
          Next
        </button>
      </div>
      {render()}
    </>
  );
};

export default connect(
  (state) => ({
    news: state.news,
  }),
  {
    actionChangeAll,
    actionChangeDataForRendering,
    actionChangeNameCallApi,
    actionChangePage,
    actionTurnHomePage,
  }
)(Main);
