import { useEffect } from 'react'
import { IQuestion, IQuestionList } from 'types/Questionlist'
import { getQuestions, selectedValue, useAppDispatch, useAppSelector } from 'store/reducers/questionListReducer'
import Layout from 'components/Layout/layout'
import QuestionCard from 'components/QuestionCard/QuestionCard'

export default function Home() {
  const dispatch = useAppDispatch()
	const questions = useAppSelector(selectedValue) as IQuestionList
  const { result, loading, loaded } = questions

	useEffect(() => {
    dispatch(getQuestions())
	}, [])

  const childrenNode =
    <div className="container">
        <>
          {loading && <div>loading</div>}
          {loaded && result.map((question: IQuestion) => {
            return <QuestionCard item={question} key={question.id} />
          })}
          {questions.error && <div>error</div>}
        </>
    </div>


  return (
    <Layout children={childrenNode} pageTitle={'لیست سوالات'} />
  )
}
