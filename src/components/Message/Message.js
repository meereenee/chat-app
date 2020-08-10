import PropTypes from 'prop-types'
import React, {useRef} from 'react'
import ago from 's-ago'
import './Message.css'

export default function Message({message: {sender, content}, nickName}) {
	const now = useRef(new Date())
	const sentOrReceivedClass = sender === nickName ? 'sent' : 'received'

	return (
		<div className={`message__wrapper ${sentOrReceivedClass}`}>
			<div className={`message ${sentOrReceivedClass}`}>
				<div className='timestamp'>{ago(now.current)}</div>
				<div className='content'>{content}</div>
			</div>
		</div>
	)
}

Message.propTypes = {
	message: PropTypes.shape({
		sender: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired
	}),
	nickName: PropTypes.string.isRequired
}
