import React from 'react';

type Props = any

const Scroll:React.FC<Props> = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;