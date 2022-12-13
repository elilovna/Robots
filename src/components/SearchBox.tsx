
import React from 'react';

type Props = {
  searchHandler: (e:string) => void;
}

export const SearchBox:React.FC<Props> = ({ searchHandler }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;