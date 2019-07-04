import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import listArr from '../static/DummyList';
import PostList from '../components/PostList';
import { PostInput, DateInput } from '../components/Input'
import { PostSearchButton } from '../components/Button';
import { SelectButton } from '../components/SelectBar';

class BoardList extends React.Component {

  state = {
    title: '',
    start_date: '',
    end_date: '',
    building: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSelect = (e) => {
    this.setState({
      building : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, start_date, end_date, building } = this.state;
    
    console.log(title, start_date, end_date, building);
  }


  render() {
    const { title, start_date, end_date, building } = this.state;

    return(
      <Layout>
        <SearchWrap>
          <InnerWrap>
            <PostInput
              value={title}
              name="title"
              onChange={this.handleChange}
            />
            <SelectButton 
              value={building}
              onChange={this.handleSelect}
            />
            <DateInput
              value={start_date}
              name="start_date"
              onChange={this.handleChange}
            />
            <DateInput
              value={end_date}
              name="end_date"
              onChange={this.handleChange}
            />
            <PostSearchButton onClick={this.handleSubmit}/>
          </InnerWrap>
        </SearchWrap>

        {/* 포스트 뿌리기 시작 */}
        <div style={{ width: '80%', margin: '85px auto 0' }}>
          <PostList list={listArr} />
        </div>
        {/* 포스트 뿌리기 끝 */}
      </Layout>
    )
  }
}

const SearchWrap = styled.div`
  width: 100%
  min-width: 500px;
  max-width: 1920px;
  height: 80px;
  position: relative;
  top: 83px;
  background-color: #e0e0e0;
`

const InnerWrap = styled.div`
  width: 80%
  height: 100%;
  margin-left: 12%;
  padding: 10px;
`

export default BoardList;