/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

export const UserInput = props => {
  return (
    <InputBox
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      required
      autoFocus
      onChange={e => props.onChange(e)}
    />
  );
};

export const SearchInput = props => {
  return (
    <SearchInputBox
      type="text"
      placeholder="What event you want? Search it!"
      name="title"
      value={props.value}
      onChange={e => props.onChange(e)}
    />
  );
};

export const PostInput = props => {
  return (
    <PostInputBox
      type="text"
      name={props.name}
      placeholder="Search it!"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

const InputBox = styled.input`
  width: 88%;
  height: 50px;
  font-size: 15px;
  padding-left: 50px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid black;
  background-color: #f1f1f1;

  outline: none;
`;

const SearchInputBox = styled.input`
  width: 84%;
  padding: 15px;
  margin-left: 6%;
  border: none;
  border-bottom: 1px dotted;
  outline: none;
  font-size: 20px;
  background-color: transparent;
`;

const PostInputBox = styled.input`
  width: 70%;
  height: 38px;
  border: none;
  outline: none;
  margin-top: 8px;

  font-size: 17px;
  font-weight: 300;
`;
