import React from 'react';
import './Search.scss';

const Search = (props) => {
  return (
    <div className="search">
      <input
        className="search__field"
        type="text"
        placeholder="Search"
      />
      {props.body ? <button>Buddy</button> : null}
    </div>
  );
};

export default Search;
