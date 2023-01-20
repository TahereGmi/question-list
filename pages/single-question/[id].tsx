import Head from 'next/head'
import Layout from 'components/Layout/layout'

const singleCardNode = <p className="text-3xl font-bold underline">
  Hello world from single question!
</p>

export default function SingleQuestion() {
  return (
    <Layout children={singleCardNode} pageTitle={'جزییات سوال'}/>
  )
}
