import Header from "@/components/Header"
import Link from "next/link"

export default function Index() {
	console.log(process.env.NEXT_PUBLIC_API_URL_DEV,process.env.NEXT_PUBLIC_API_URL_PRO);
	return (
		<>
		<Header seo={{title:'app title',description:'here is description',keywords:'here is keywords'}}></Header>
		<div className='page-box-marg index-body'>
			index page
			<Link href='/member'>进入会员中心</Link>
		</div>
		</>
	)
}
