import styled, { ThemeProvider, css } from 'styled-components';
import React from 'react'
import StyledButton from './MainButton'

const MainButton = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: ${props => props.theme.main};
border: ${props => props.buttonBorder || '2px solid #ff2058'};
color: ${props => props.primary ? "#ff2058" : "white"};
background: ${props => props.primary ? 'white' : props.theme.colorForEverything}; 
${(props) => props.color && css`background: ${props.theme[props.color]}`};
`

const themeDark2 = {
    main: '5rem',
    colorForEverything: "black",
    alert: "royalblue",
    color1: 'red',
    width:'20rem'
}

MainButton.defaultProps = {
    theme: {
        main: "55rem",
        colorForEverything: '#ff2058',
        frontsize: `${props => props.frontsize}`
    }
}

const HelpButton = styled(MainButton)` 
 border-radius: 50%;
 width:40px;
 height: 40px;
 justify-content: center;  
 align-self:center;
 `
 const reverseBtn = props => (
    <MainButton {...props} children={props.children.split(' ').reverse()} />
)

//class-based state
// class Button extends React.Component{
//     render() {
        
//         return (
//             <>
//             <MainButton as={reverseBtn}>This is a reverse sentense</MainButton>
//             </>
//     )}
// }

//function-based state
const Button = () => {
    return (
        <div>
            <MainButton href="/" primary>Login</MainButton>
            <ThemeProvider theme={themeDark2}>
                <MainButton as="a" href="/" >Register</MainButton>
                <HelpButton buttonBorder="5px dotted yellow" >?</HelpButton>
                <MainButton color="alert" as={reverseBtn}>This is a reverse sentense</MainButton>
                </ThemeProvider>
       <StyledButton >Styled Button</StyledButton>

        </div>
         )
 }


// const Button = (props) => {
//     return (
//         <button className="button">
//         {props.children}
//      </button>
//     )
// }

export default Button
