import React from 'react';

type Props = {
  children: JSX.Element
}

const Scroll:React.FC<Props> = ({children}) => {
  return (
    <div style={{ overflow: 'scroll', border: '1px solid black', height: '100vh'}}>
      {children}
    </div>
  );
};

export default Scroll;