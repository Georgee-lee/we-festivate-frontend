import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import { listOne, listTwo } from '../static/DummyList';
import PostList from '../components/PostList';
import { PostInput, DateInput } from '../components/Input'
import { PostSearchButton } from '../components/Button';
import { SelectButton } from '../components/SelectBar';

class BoardList extends React.Component {

  state = {
    posts: [],
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
    
  }

  handleShowMore = () => {
    // fetch 날려서 데이터 20개 원래 배열에 더 저장하기
    this.setState({

    })
  }


  render() {
    const { posts, title, start_date, end_date, building } = this.state;

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
            <span style={{ marginLeft: 20 }}>startDate: </span>
            <DateInput
              value={start_date}
              name="start_date"
              onChange={this.handleChange}
            />
            <span  style={{ marginLeft: 20 }}>endDate: </span>
            <DateInput
              value={end_date}
              name="end_date"
              onChange={this.handleChange}
            />
            <PostSearchButton onClick={this.handleSubmit}/>
          </InnerWrap>
        </SearchWrap>

        {/* 포스트 뿌리기 시작 */}
        <div style={{ width: '75%', margin: '85px auto 0' }}>
          <PostList list={listOne} />
        </div>
        <MoreBtnWrap>
          <MoreBtnDiv>
            <InnerBtnDiv onClick={this.handleShowMore}>
              더 불러오기
            </InnerBtnDiv>
          </MoreBtnDiv>
        </MoreBtnWrap>
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

const MoreBtnWrap = styled.div`
  width: 100%;
  height: 60px;
  margin: 20px auto 0;
`

const MoreBtnDiv = styled.div`
  width: 15%;
  height: 100%;

  margin: 0 auto;
`

const InnerBtnDiv = styled.div`
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 3;
  border: 1px solid;
  cursor: pointer;
`

export default BoardList;