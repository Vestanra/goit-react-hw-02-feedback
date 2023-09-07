import styled from 'styled-components';

export const StatisticsWrapper = styled.ul`
margin-top: ${p => p.theme.spacing(2)};
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(1)};
color: ${p => p.theme.colors.text};
font-size: 18px;
font-weight: 500;
`;

export const Positive = styled.li`
color: ${p => p.theme.colors.hover};
`;