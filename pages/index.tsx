import Head from 'next/head'
import { useEffect } from 'react'
import { IQuestion, IQuestionList } from '@/src/types/Questionlist'
import { getQuestions, selectedValue, useAppDispatch, useAppSelector } from '@/src/store/reducers/questionListReducer'
import Layout from '@/src/components/Layout/layout'
import Link from 'next/link'
import QuestionCard from '@/src/components/QuestionCard'

export default function Home() {
  const dispatch = useAppDispatch()
	const questions = useAppSelector(selectedValue) as IQuestionList
	const getAllQuestions = () => dispatch(getQuestions())

	useEffect(() => {
		getAllQuestions()
	}, [])

  return (
    <Layout>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world from tailwind!
      </h1>
      <Link href={`single-question/${12}`}>Single Question</Link> */}
        {questions.loading && <div>loading</div>}
			  {questions.loaded && <>
				{questions.result.map((question: IQuestion) => {
					return <QuestionCard item={question}/>
				})}
      	{questions.error && <div>error</div>}
			</>}
    </Layout>
  )
}
