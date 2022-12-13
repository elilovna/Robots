
import React from 'react';

type Props = {
  searchChange: () => void;
}

const SearchBox:React.FC<Props> = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;