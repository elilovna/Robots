import React from "react";
import { robots } from "../initial/robots";
import { Card } from "./Card";

export const CardList: React.FC = () => {
  const cardComponent = robots.map((user, i) => {
    return <Card user={user} key={user.id + i} />;
  });
  return <>{cardComponent}</>;
};
