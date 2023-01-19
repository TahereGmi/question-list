import { IQuestion } from '@/src/types/Questionlist'

export default function QuestionCard(props: { item : IQuestion }) {
    const { item } = props
    console.log('item in question card', item)
    return (
        <div>Question Card</div>
    )
}
