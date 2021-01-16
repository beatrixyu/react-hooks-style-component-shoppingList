import React,{withTheme, useContext} from 'react';

import styled, { ThemeContext } from 'styled-components'
import StyledButton from './MainButton'
import Button from './Button'
import './Card.css';
// import MainButton from './Button'

  const CardContainer = styled.div` 
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
  border-radius: 5px;
  background: this.props.theme
  `

const Card = props => {
    
     const themeContext = useContext(ThemeContext)
   console.log(themeContext)
  
    return <CardContainer>
           {/* <h1>You are not authenticated yet!</h1>
      <p>Please login!</p>
      <StyledButton>Ok, I am the styled Button</StyledButton>
      <Button></Button> */}
          </CardContainer>;
  };

// const Card = props => {
//    return <div className="card">
//      <CardContainer>
//      {props.children}
//      </CardContainer>
//    </div>
//  }
export default (Card);



