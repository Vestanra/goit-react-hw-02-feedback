import styled from 'styled-components';

export const ButtonWrapper = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: ${p => p.theme.spacing(3)} 0;
`;

export const Button = styled.button`
width: 98px;
padding: ${p => p.theme.spacing(1)};
color: ${p => p.theme.colors.textTitle};
font-weight: 700;
text-transform: capitalize;
background-color: ${p => p.theme.colors.background};
border: 2px solid ${p => p.theme.colors.border};
opacity: 0.9;
&:hover {
    background-color: ${p => p.theme.colors.hover};
}
`;