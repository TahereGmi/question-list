import Head from 'next/head'
import Layout from 'components/Layout/layout'

const singleCardNode = <h1 className="text-3xl font-bold underline">
  Hello world from single question!
</h1>
export default function SingleQuestion() {
  return (
    <Layout children={singleCardNode} pageTitle={'جزییات سوال'}/>
  )
}
