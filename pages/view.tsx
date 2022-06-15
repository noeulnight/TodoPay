import { NextPage } from "next";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";

const View: NextPage = () => {
  return (
    <Container>
      <PageTitle title='일정 보기' />
        <input
          className='w-full mt-5 text-2xl bg-primary'
          value={'멋지게 살기'}
        />
        <textarea
          placeholder='설명이 없습니다.'
          className='w-full h-32 mt-3 border-b bg-primary border-purple-300/50'
        />

        <div className='flex justify-between mt-3'>
          <label className='font-bold text-purple-300'>시작일</label>
          <input
            type='datetime-local'
            className='w-auto text-right bg-primary'
          />
        </div>
        <div className='flex justify-between mt-3'>
          <label className='font-bold text-purple-300'>마감일</label>
          <input
            type='datetime-local'
            className='w-auto text-right bg-primary'
          />
        </div>

        <div className='flex justify-between mt-3'>
          <div>
            <label className='font-bold text-purple-300'>포인트</label>
            <small className='text-red-400'>수정 불가</small>
          </div>
          <input
            readOnly
            value={0} 
            type='number'
            className='w-auto text-right bg-primary'
          />
        </div>

        <div className='flex justify-between mt-3'>
          <label className='font-bold text-purple-300'>카테고리</label>
          <select className='w-auto text-right bg-primary'>
            <option value='1'>여행</option>
            <option value='2'>취미</option>
            <option value='3'>스터디</option>
            <option value='4'>잡담</option>
          </select>
        </div>

        <div className='flex justify-between mt-3'>
          <label className='font-bold text-purple-300'>상태</label>
          <select className='w-auto text-right bg-primary'>
            <option value='1'>진행중</option>
            <option value='2'>완료</option>
          </select>
        </div>
        <button className='w-full p-2 mt-5 font-bold text-white bg-purple-400 rounded-md'>
          수정
        </button>
    </Container>
  )
}

export default View
