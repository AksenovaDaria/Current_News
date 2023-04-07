import { connect, useDispatch } from "react-redux";
import "./secondPage.scss";
import transformationMonth from "../../services/month";
import { Link } from "react-router-dom";
import { actionTurnHomePage } from "../../redux/actions";

const News = ({ news }) => {
  const day = (day) => new Date(day).getDate();
  const month = (month) => new Date(month).getMonth();
  const year = (year) => new Date(year).getFullYear();

  const dispatch = useDispatch();

  function letTransformationMonth(month) {
    return transformationMonth(month);
  }

  function changeHomePage() {
    dispatch(actionTurnHomePage(1, true));
  }
  changeHomePage();

  let elements;

  if (news.date == undefined) {
    elements = (
      <>
        <button className="home">
          <Link className="link" to="/news">
            Home Page
          </Link>
        </button>
        <div>Failed to load data. Go back to home and try again</div>
      </>
    );
  } else {
    elements = news.date.map((item, key) => {
      if (key == news.numb) {
        if (!item.urlToImage) {
          return (
            <div key={news.numb}>
              <button className="home">
                <Link className="link" to="/news">
                  Home Page
                </Link>
              </button>
              <div className="title">{item.title}</div>
              <div className="date">
                {day(item.publishedAt)}.
                {letTransformationMonth(month(item.publishedAt))}.
                {year(item.publishedAt)}
              </div>
              <img src="https://oir.mobi/uploads/posts/2022-08/1661441076_1-oir-mobi-p-starie-gazeti-fon-krasivo-1.jpg"></img>
              <div className="text">{item.content}</div>
            </div>
          );
        } else {
          return (
            <div key={news.numb}>
              <button className="home">
                <Link className="link" to="/news">
                  Home Page
                </Link>
              </button>
              <div className="title">{item.title}</div>
              <div className="date">
                {day(item.publishedAt)}.
                {letTransformationMonth(month(item.publishedAt))}.
                {year(item.publishedAt)}
              </div>
              <img
                src={item.urlToImage}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://oir.mobi/uploads/posts/2022-08/1661441076_1-oir-mobi-p-starie-gazeti-fon-krasivo-1.jpg";
                }}
              ></img>
              <div className="text">{item.content}</div>
            </div>
          );
        }
      }
    });
  }

  return <>{elements}</>;
};

export default connect(
  (state) => ({
    news: state.news[0],
  }),
  { actionTurnHomePage }
)(News);
