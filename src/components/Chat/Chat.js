import PropTypes from 'prop-types'
import React, {useEffect, useRef, useState} from 'react'
import useWebSocket from 'react-use-websocket'
import Message from '#components/Message'
import MessageInput from '#components/MessageInput'
import './Chat.css'

const URL = 'ws://localhost:3030'

export default function Chat({nickName}) {
	const [messages, setMessages] = useState([])
	const messagesBottomRef = useRef(null)
	const title = useRef('no messages')
	
	const onMessage = m => {
		const message = JSON.parse(m.data)
		setMessages(messages => messages.concat(message))
		title.current = message.sender
	}
	
	const {sendMessage} = useWebSocket(URL, {onMessage})
	
	const send = m => {
		const message = {content: m, sender: nickName}
		sendMessage(JSON.stringify(message))
		setMessages(messages => messages.concat(message))
	}
	
	useEffect(() => messagesBottomRef.current.scrollIntoView({behavior: 'smooth'}), [messages])
	
	return <>
		<div>{title.current}</div>
		<div className='chat'>
			{messages.map((m, inx) => <Message key={inx} message={m} nickName={nickName}/>)}
			<div ref={messagesBottomRef}/>
		</div>
		<MessageInput send={send}/>
	</>
}

Chat.propTypes = {
	nickName: PropTypes.string.isRequired
}

