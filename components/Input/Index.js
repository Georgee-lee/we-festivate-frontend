import styled from 'styled-components';

export const Input = (props) => {
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

export const SearchInput = (props) => {
  return (
    <SearchInputBox 
      type="text"
      placeholder="What event you want? Search it!"
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

const SearchInputBox = styled.input`
  width: 84%;
  padding: 15px;
  margin-left: 6%;
  border: none;
  border-bottom: 1px dotted;
  outline: none;
  font-size: 20px;
  background-color: transparent;
`