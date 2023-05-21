import { css } from "styled-components";

export const ultra = (props) => {
  return css`
    @media only screen and (min-width: 2560px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
// export const tablet = (props) => {
//   return css`
//     @media only screen and (max-width: 380px) {
//       display: none;
//     }
//   `;
// };
