import s from './SearchBox.module.css'

const SearchBox = ({ value, onChange}) => {
  
  return (
    
    <div>
      <p>Find contacts by name</p>
      <input
        className={s.SBinput}
        type='text'
        name='name'
        value={value}
      onChange={(e)=> onChange(e.target.value)}>
      </input>
    </div>
  );
};

export default SearchBox;





