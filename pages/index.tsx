import {faAngleRight, faCalendar, faStar, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next' 
import Container from '../components/Container'
import { motion } from 'framer-motion'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <motion.div
        className='mt-3 grid gap-y-2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='flex items-center justify-between p-3 bg-purple-400 rounded-lg shadow-lg cursor-pointer '>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faThumbsUp}/>
            <h1 className='ml-2 font-bold'>오늘 할 일</h1>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className='flex items-center justify-between p-3 bg-purple-400 rounded-lg shadow-lg cursor-pointer '>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faStar}/>
            <h1 className='ml-2 font-bold'>중요함</h1>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <div className='flex items-center justify-between p-3 bg-purple-400 rounded-lg shadow-lg cursor-pointer '>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faCalendar}/>
            <h1 className='ml-2 font-bold'>요일별 할 일</h1>
          </div>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </motion.div>
    </Container>
  )
}

export default Home
