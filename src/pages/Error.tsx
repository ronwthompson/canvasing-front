import React from "react";
import { useRouteError } from "react-router-dom";

type PageError = {
  statusText: string,
  message: string,
}

export default function Error() {
  //@ts-ignore useRouteError's return type is unknown since the error object is custom
  const error: PageError = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
      <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
