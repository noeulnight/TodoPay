import Container from "../components/Container"
import { NextPage } from "next"
import PageTitle from "../components/PageTitle"

const Add: NextPage = () => {
  return (
    <Container>
      <PageTitle title='할일 추가하기' />
      <form className='mt-1 gap-y-3'>
        <input 
          placeholder='제목을 입력하세요'
          className='w-full mt-5 text-2xl bg-primary '
        />
        <textarea
          placeholder='설명을 입력하세요'
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
          <label className='font-bold text-purple-300'>포인트</label>
          <input
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
          추가
        </button>
      </form>
    </Container>
  )
}

export default Add
