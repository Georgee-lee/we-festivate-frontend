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
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
`

export default Input;