import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "./../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.search);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={s.SBinput}
        type="text"
        name="name"
        value={filter}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBox;
