/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

export const SelectButton = props => {
  return (
    <SelectBox onChange={e => props.onChange(e)} value={props.building}>
      <option value="">전체빌딩</option>
      <option value="1">홍대</option>
      <option value="2">선릉</option>
      <option value="3">선릉 2호점</option>
      <option value="4">선릉 3호점</option>
    </SelectBox>
  );
};

const SelectBox = styled.select`
  display: block;
  width: 180px;
  height: 30px;
  margin: 10px 0;

  border: none;
  outline: none;

  border-bottom: 1px solid gray;
  font-size: 17px;
  font-weight: 300;
`;
