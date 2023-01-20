import React from 'react'
import { IQuestion } from 'types/Questionlist'
import styles from './questionCard.module.scss'
import CommentIcon from '../../../public/images/svg/comment.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function QuestionCard(props: { item : IQuestion }) {
    const { item } = props
    return (
        <section className={`flex w-full flex-col mt-5 rounded-lg ${styles.cardWrapper}`}>
            <div className={`flex flex-row w-full h-12 pr-4 pl-4 rounded-lg ${styles.cardHeader}`}>
                <div>
                    <Image
                        src="/images/user-img.png"
                        alt="Picture of the user"
                        className="inline-block"
                        width={32}
                        height={32}
                    />
                    <div className={`font-sm text-normal inline-block mr-2 ${styles.makeAlign}`}>{item.title}</div>
                </div>
                <div className="w-1/4">
                    <div className="flex text-xs">
                        <div className={`time pl-4 pr-4 ${styles.makeAlign}`}>
                            <span>ساعت : </span>
                            <span>۱۶:۴۸</span>
                        </div>
                        <div className={`date hasBorder pl-4 pr-4 ${styles.makeAlign}`}>
                            <span>تاریخ : </span>
                            <span>۱۴۰۰/۲/۱۵</span>
                        </div>
                        <div className={`comments pl-4 pr-4 ${styles.makeAlign}`}>
                            <CommentIcon className="inline-block"/>
                            <span className="inline-block pr-2">۲۰</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-4">
                <p className='text-sm w-full'>{item.body}</p>
                <div className='flex flex-row-reverse'>
                    <Link href={`single-question/${item.id}`} className={`text-xs rounded-lg p-2 ${styles.seeMoreBtn}`}>
                        مشاهده جزییات   
                    </Link>
                </div>
            </div>
        </section>
    )
}
