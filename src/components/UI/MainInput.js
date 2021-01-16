import styled from 'styled-components'


export default styled.input`
   background: white;
   border: 1px solid blue;
   border-radius: 5px;
   padding: 0.15rem 0.25rem;
   
   &:hover{
    outline: none;
    border-color: #ff2058;
   }
   &:focus{
    background: darkorange;
   }
   `