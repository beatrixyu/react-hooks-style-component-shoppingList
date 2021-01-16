import styled from 'styled-components'

export default styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: ${props => props.theme.main};
border: ${props => props.primary ? '5px dotted yellow' : '2px solid #ff2058'};
color: ${props => props.primary ? props.theme.color1 : "white"};
background: ${props => props.primary ? 'white': props.theme.colorForEverything};
`
