import Head from 'next/head'
import { useEffect } from 'react'
import { IQuestion, IQuestionList } from 'types/Questionlist'
import { getQuestions, selectedValue, useAppDispatch, useAppSelector } from 'store/reducers/questionListReducer'
import Layout from 'components/Layout/layout'
import QuestionCard from 'components/QuestionCard/QuestionCard'
import Link from 'next/link'
import styles from 'styles/Home.module.scss'

export default function Home() {
  const dispatch = useAppDispatch()
	const questions = useAppSelector(selectedValue) as IQuestionList
	const getAllQuestions = () => dispatch(getQuestions())

	useEffect(() => {
		getAllQuestions()
	}, [])

  return (
    <Layout>
        <div className="container">
            <>
              {questions.loading && <div>loading</div>}
              {questions.loaded && questions.result.map((question: IQuestion) => {
                return <QuestionCard item={question}/>
              })}
              {questions.error && <div>error</div>}
            </>
        </div>
    </Layout>
  )
}
