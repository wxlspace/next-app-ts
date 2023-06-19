import { useState, useEffect } from "react"
import Header from "@/components/Header"
import { userList } from "@/utils/api"

export default function Index() {
    const [userLists, setUserLists] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, page_size: 10, total: 1});

    useEffect(() => {
        userList({ ...pagination }).then(res => {
            if(res.code == 200){
                setUserLists(res.data.data)
                setPagination({...pagination,total:res.data.total})
            }
        })
    }, [])

    return (
        <>
            <Header seo={{ title: 'member', description: 'here is description', keyword: 'here is keyword' }}></Header>
            <div className='page-box-marg index-body'>member index page
                <ul>
                    {
                        userLists.map(item=>{
                            return <li key={item.id}>{item.id} &nbsp; {item.real_name} &nbsp; {item.account}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}