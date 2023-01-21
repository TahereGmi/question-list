import Head from 'next/head'
import Layout from 'components/Layout/layout'
import { IQuestionList } from '@/types/Questionlist'
import QuestionCard from '@/components/QuestionCard/QuestionCard'
import { selectedValue, useAppSelector } from '@/store/reducers/questionListReducer'

export default function SingleQuestion() {
  const questions = useAppSelector(selectedValue) as IQuestionList

  const singleCardNode = <div className="container">
      <QuestionCard item={questions.result[1]} />
  </div>
  return (
    <Layout children={singleCardNode} pageTitle={'جزییات سوال'}/>
  )
}
