import styled from 'styled-components';

const Input = (props) => {
  return (
    <InputBox 
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      onChange={(e) => props.onChange(e)}
    />
  )
}

const InputBox = styled.input`
  width: 88%;
  height: 50px;
  padding-left: 50px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
`

export default Input;