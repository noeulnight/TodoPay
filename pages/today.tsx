import moment from "moment";
import { NextPage } from "next";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import TodoItemList from "../components/TodoItemList";

const Items = [
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
  { id: 1, title: "Learn Next.jsaowiejfoaiwjefoaijwefo", description: 'leffafrafarn about next.js', completed: false },
]

const Today: NextPage = () => {
  return (
    <Container>
      <PageTitle title={'오늘 할 일'} subtitle={moment(Date.now()).format('MM월 DD일 dddd')} />
      <TodoItemList items={Items} />
    </Container>
  )
}

export default Today
