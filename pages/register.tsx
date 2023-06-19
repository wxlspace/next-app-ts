import Header from "@/components/Header"

export default function Index() {

	return (
		<>
		<Header seo={{title:'app title',description:'here is description',keywords:'here is keywords'}}></Header>
		<div className='page-box-marg index-body'>register page</div>
		</>
	)
}
