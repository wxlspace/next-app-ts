import { useState } from 'react'
import { useRouter } from 'next/router'
import { setToken } from "@/utils/cookie"
import { login } from "@/utils/api"
import Header from "@/components/Header"
import { store, authSlice} from '@/store';

export default function Index() {
	const router = useRouter()
	const [userName, setUserName] = useState('');
	const [passwd, setPasswd] = useState('');
	const loginHandler = () => {
		login({account:userName,passwd:passwd}).then((res: any) => {
			console.log(res)
			if(res.code == 200){
				setToken(res.data.access_token)
				store.dispatch(authSlice.actions.setUser('hello'))
				router.push('/member')
			}else{
				alert(res.msg)
			}
		})
	}
	return (
		<>
			<Header seo={{ title: 'app title', description: 'here is description', keywords: 'here is keywords' }}></Header>
			<div className='page-box-marg index-body'>
				<div className="form-box">
					<div className="form-input"><input type="text" onChange={(e) => setUserName(e.target.value)} placeholder='账号' /></div>
					<div className="form-input"><input type="password" onChange={(e) => setPasswd(e.target.value)} placeholder='密码' /></div>
					<button className='form-btn' onClick={() => loginHandler()}>登录</button>
				</div>
				<style>{`
					.form-box {
						width:300px; text-align:center; margin:15% auto;
					}
					.form-input{ padding:5px 0}
					.form-input input{ height:30px; line-height:30px; width:100%; padding-left:8px;}
					.form-btn{ height:30px; line-height:30px; width:312px; margin-top:10px}
				`}
				</style>


			</div>
		</>
	)
}
