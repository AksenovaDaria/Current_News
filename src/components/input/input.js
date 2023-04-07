import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { actionChangeAll } from "../../redux/actions";
import { Link } from "react-router-dom";

import "./input.scss";

const Input = (props) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  function changeValue(newValue) {
    setValue(newValue);
  }

  function changeAllinReduxStore(e) {
    const text = value;

    dispatch(actionChangeAll(1, "keyWord", text, 1));
    changeValue("");
    e.preventDefault();
  }

  function onChange(event) {
    let value = event.target.value;
    changeValue(value);
  }

  return (
    <form className="container_form" onSubmit={changeAllinReduxStore}>
      <label className="label">
        <Link className="link" to={`/news/search`}>
          <input
            className="input_class"
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
          />
        </Link>
      </label>
      <input className="subinput" type="submit" value="Search" />
    </form>
  );
};

export default connect(
  (state) => ({
    news: state.news,
  }),
  { actionChangeAll }
)(Input);
