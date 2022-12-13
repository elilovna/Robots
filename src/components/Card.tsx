import * as React from "react";

type Props = {
  robot: Robot;
};

export type Robot = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const Card: React.FC<Props> = ({ robot }) => {
  const {username, name, email } = robot;
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={`https://robohash.org/${username}`} alt="avatar" />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </div>
  );
};
