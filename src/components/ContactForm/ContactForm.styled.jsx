import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[5]}px;
`;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   width: 250px;
//   line-height: 1.5;
//   color: grey;
// `;

// export const Input = styled.input`
//   padding: ${p => p.theme.space[2]}px;
//   border: ${p => p.theme.borders.normal};
//   border-radius: ${p => p.theme.radii.normal};
//   margin-left: ${p => p.theme.space[4]}px;
//   outline: none;
//   transition: transform 250ms linear, border-color 250ms linear,
//     color 250ms linear;

//   :focus,
//   :hover,
//   :focus-visible {
//     color: ${p => p.theme.colors.text};
//     border-color: ${p => p.theme.colors.primary};
//     transform: scale(1.1);
//   }
// `;

// export const Button = styled.button`
//   padding: ${p => p.theme.space[3]}px;
//   border-radius: ${p => p.theme.radii.normal};
//   border: ${p => p.theme.borders.normal};
//   background-color: ${p => p.theme.colors.primary};
//   cursor: pointer;
//   min-width: 150px;
//   display: flex;
//   gap: 10px;
//   align-items: center;
//   justify-content: center;

//   transition: transform 250ms linear, border-color 250ms linear,
//     color 250ms linear;
//   :focus,
//   :hover,
//   :focus-visible {
//     transform: scale(1.1);
//   }
// `;
