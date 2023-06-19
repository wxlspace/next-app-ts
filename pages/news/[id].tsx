import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import Header from "@/components/Header"

export default function NewsDetail(props: any) {
    const router = useRouter()
    const { data } = props;
    // const { id } = router.query
    // console.log("router.query", router.query)
    if (!data) {
        return <div>loading...</div>
    }
    return (
        <>
			<Header seo={{ title: 'app title', description: 'here is description', keywords: 'here is keywords' }}></Header>
			<div className='page-box-marg index-body'>
            <h3>getStaticProps</h3>
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
            <div>body: {data.body}</div>
        </div>
		</>
        
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    // paths中 请求后端然后计算出总共要生成多少个静态页面
	let paths_arr = [
		{ params: { id: '1' } },
		{ params: { id: '2' } },
		{ params: { id: '3' } },
	];
    return {
        paths: paths_arr,
        // revalidate: 60,
        fallback: true, // can also be true or 'blocking'
    }
}

// 在动态路由页面（[id].tsx） 
export const getStaticProps: GetStaticProps = async (context: any) => {
    // console.log("context",context);

    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}





