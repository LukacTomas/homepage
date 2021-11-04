import React from "react";
import { pages } from "./pages";

export const Navigation = () => {
  return (
    <ul className={{}}>
      {pages.map((page) => (
        <li key={page.hash}>
          <a href={page.hash}>{page.title}</a>
        </li>
      ))}
    </ul>
  );
};
