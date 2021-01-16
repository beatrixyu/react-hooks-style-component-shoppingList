import React, {useState} from 'react'
import styled from 'styled-components'


// const labelStyle = {
//     position: "relative",
//     display: "inline-block",
//     width: "60px",
//     height: "34px",
// }
const Switch = () => {
    const [checked, setChecked] = useState(false)
    
    const Checkbox = props => (
        <input type="checkbox" {...props} />
    )

    const handleCheckboxChange = (event) => {
        setChecked(checked=>event.target.checked)
    }

    const HiddenCheckbox = styled.input.attrs({ type: 'Checkbox' })
    
    const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    &:hover{
        background: green;
       }
    `
    const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    background: ${props => props.checked ? 'salmon' : 'papayawhip'};
    &::checked + &{
        background-color: #2196F3;
    }
    ${HiddenCheckbox}:focus + &{
        box-shadow: 0 0 1px #2196F3;
    }
`

    const InputAttr = styled.input.attrs({ type: 'checkbox' })`


`

    const Span = styled.span`
    position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

   &::before{
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
   }
    `

    return (
        <Label 
            // style={labelStyle}
        >
            <Checkbox checked={checked} onChange={handleCheckboxChange}/>
  <Span ></Span>
</Label>
    )
}

export default Switch