import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          @font-face {
            font-family: "Staatliches";
            src: url("/fonts/Staatliches/Staatliches-Regular.ttf");
            font-display: swap;
          }
          @font-face {
            font-family: "Nunito";
            src: url("/fonts/Nunito/Nunito-Regular.ttf");
            font-display: swap;
          }
          body {
            font-family: "Staatliches", sans-serif;
            background-color: #212121;
            overflow-x:hidden;
          }
          .container {
            margin: 0 10px;
          }
          .hero {
            width: 100%;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
