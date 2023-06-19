import Link from 'next/link'
import Header from "@/components/Header"
import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

type Item = {
	id: string,
	title: string
}
type Props = {
	lists: Item[];
}

const Page: NextPage<Props> = (props: any) => {
	// const [lists, setLists] = useState<Item[]>([]);

	const { lists } = props
	if (!lists) {
        return <div>loading...</div>
    }
	return (
		<>
			<Header seo={{ title: 'app title', description: 'here is description', keywords: 'here is keywords' }}></Header>
			<div className='page-box-marg index-body'>
				<div className='page-box'>
					<h3>getServerSideProps</h3><br />
					<ul>
						{
							lists.map((item: { id: number, title: string }) => {
								return <li key={item.id}><Link href={`/news/${item.id}`}>{item.title}</Link></li>
							})
						}
					</ul>
				</div>
			</div>
		</>

	)
}
export default Page;



export const getServerSideProps: GetServerSideProps = async (context) => {
	// console.log("@@@===context", context.req.cookies);
	// context.res.end("dddd")
	// context.res.setHeader('set-cookie',"9999999999")

	const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const data = await result.json()

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { lists: data }, // will be passed to the page component as props
	}
}


