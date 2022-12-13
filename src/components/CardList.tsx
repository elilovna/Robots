import React from "react";
import { Card, Robot } from "./Card";

type Props = {
  robots: Robot[]
}

export const CardList: React.FC<Props> = ({robots}) => {
  const cardComponent = robots.map((user, i) => {
    return <Card robot={user} key={user.id + i} />;
  });
  return <>{cardComponent}</>;
};
