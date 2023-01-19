import React from 'react'
import { IQuestion } from 'types/Questionlist'
import styles from './questionCard.module.scss'
import CommentIcon from '../../../public/images/svg/comment.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function QuestionCard(props: { item : IQuestion }) {
    const { item } = props
    // const router = useRouter()
    return (
        <section className="flex w-full flex-col rounded-lg">
            <div className={`flex flex-row w-full h-12 ${styles.cardHeader}`}>
                <div>
                    <Image
                        src="/images/user-img.png"
                        alt="Picture of the user"
                        className="inline-block"
                        width={32}
                        height={32}
                    />
                    <div className="font-sm text-normal inline-block">{item.title}</div>
                </div>
                <div className="w-1/3">
                    <div className="flex text-xs">
                        <div className="time">
                            <span>ساعت : </span>
                            <span>۱۶:۴۸</span>
                        </div>
                        <div className="date hasBorder">
                            <span>تاریخ : </span>
                            <span>۱۴۰۰/۲/۱۵</span>
                        </div>
                        <div className="comments">
                            <span>{item.commentsCount}</span>
                            <CommentIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                {item.body}
                <Link href={`single-question/${item.id}`}>
                    مشاهده جزییات   
                </Link>
            </div>
        </section>
    )
}
