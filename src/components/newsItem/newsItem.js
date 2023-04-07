import { connect, useDispatch } from "react-redux";
import { actionGetIDofTheSelectedNews } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./newsItem.scss";
import transformationMonth from "../../services/month";

const NewsItem = (props) => {
  let day = new Date(props.date).getDate();
  let month = new Date(props.date).getMonth();
  let year = new Date(props.date).getFullYear();

  const dispatch = useDispatch();

  function onClick(e) {
    let id = e.target.getAttribute("data");
    saveIDinReduxStore(id);
  }

  function saveIDinReduxStore(id) {
    dispatch(actionGetIDofTheSelectedNews(1, id));
  }

  function transformationMont(month) {
    return transformationMonth(month);
  }

  // function bad(x) {
  //   console.log('tryrr');
  //   console.log(x);
  // }

  return (
    <>
      <div className="firsttitle" onClick={onClick}>
        <Link className="title" to={`/news/${props.id}`} data={props.id}>
          {props.name}
        </Link>
      </div>

      <div className="date">
        {day}.{transformationMont(month)}.{year}
      </div>
      <div className="forflex">
        <img
          src={props.img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://oir.mobi/uploads/posts/2022-08/1661441076_1-oir-mobi-p-starie-gazeti-fon-krasivo-1.jpg";
          }}
        ></img>
        <div className="text">{props.text}</div>
      </div>
      <hr></hr>
    </>
  );
};

export default connect(
  (state) => ({
    news: state.news,
  }),
  { actionGetIDofTheSelectedNews }
)(NewsItem);
