import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

import facepaint from "facepaint";

const mq = facepaint([
  "@media(min-width: 768px)",
  "@media(min-width: 1280px)",
]);

const globals = (
  <Global
    styles={css`
      @import url("https://use.typekit.net/egl2gef.css");

      ${emotionNormalize}

      ${mq({
        ":root": {
          "--gap": ["1px", "2px", "3px"],
          "--gap-sm": ["7px", "7px", "7px"],
          "--gap-md": ["20px", "20px", "20px"],
          "--gap-lg": ["40px", "75px", "75px"],
          "--gap-xl": ["40px", "92px", "92px"],
          "--gap-xxl": ["80px", "140px", "140px"],
          "--section-side-gap": ["20px", "48px", "140px"],
          "--block-side-gap": ["20px", "20px", "20px"],
        },
      })}

      :root {
        --default-color: #f9bfbd;
        --default-background: #f9bfbd;
        --default-text: #231f20;

        --primary-color: #f1697c;
        --primary-background: #f1697c;
        --primary-text: #ffffff;

        --card-color: #ffffff;
        --card-background: #ffffff;
        --card-text: #231f20;

        --light-color: #f9bfbd;
        --light-background: #f9bfbd;
        --light-text: #ffffff;

        --dark-color: #231f20;
        --dark-background: #231f20;
        --dark-text: #ffffff;

        --negative-color: #231f20;
        --negative-background: #231f20;
        --negative-text: #ffffff;
      }

      * {
        box-sizing: border-box;
      }

      html,
      body {
        font-family: futura-pt, sans-serif;
        font-weight: 500;

        background-color: var(--default-background);
        color: var(--default-text);
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 800;
        text-align: center;
        position: relative;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      b,
      strong {
        font-weight: 800;
      }

      p {
        line-height: 1.2;
        font-size: 20px;
        text-align: justify;
        position: relative;
        @media (max-width: 760px) {
          text-align: center;
        }
      }
      ul {
        line-height: 1.2;
        font-size: 20px;
        text-align: justify;
        position: relative;
      }
    `}
  />
);

export { globals, mq };
