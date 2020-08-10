import React, {useState} from 'react'
import Chat from '#components/Chat'
import Login from '#components/Login'
import './App.css'

export default function App() {
	const [nickName, setNickName] = useState('')
	return (
		<div className='app'>
			{nickName
				? <Chat nickName={nickName}/>
				: <Login setNickName={setNickName}/>
			}
		</div>
	)
}