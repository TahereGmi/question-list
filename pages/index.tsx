import { useEffect } from 'react'
import { IQuestion, IQuestionList } from 'types/Questionlist'
import { getQuestions, selectedValue, useAppDispatch, useAppSelector } from 'store/reducers/questionListReducer'
import Layout from 'components/Layout/layout'
import dynamic from 'next/dynamic'

const QuestionCard = dynamic(() => import("components/QuestionCard/QuestionCard"), {
  ssr: false,
});

export default function Home() {
  const dispatch = useAppDispatch()
	const questions = useAppSelector(selectedValue) as IQuestionList
  const { result, loading, loaded } = questions

	useEffect(() => {
    dispatch(getQuestions())
	}, [])

  useEffect(() => {
    localStorage.setItem('questions', JSON.stringify(result))
  }, [loaded])

  return (
    <Layout pageTitle={'لیست سوالات'}>
      <div className="container">
        <>
          {loading && <div>loading</div>}
          {loaded && result.length > 0 && result.map((question: IQuestion) => <QuestionCard item={question} key={question.id} /> )}
          {questions.error && <div>error</div>}
        </>
      </div>
    </Layout>
  )
}
