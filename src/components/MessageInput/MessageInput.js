import PropTypes from 'prop-types'
import React, {useState} from 'react'

export default function MessageInput({send}) {
	const [currentMessage, setCurrentMessage] = useState('')
	
	const handleSubmit = e => {
		e.preventDefault()
		send(currentMessage)
		setCurrentMessage('')
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={currentMessage} onChange={e => setCurrentMessage(e.target.value)} autoFocus/>
			<input type="submit" value="Submit"/>
		</form>
	)
}

MessageInput.propTypes = {
	send: PropTypes.func.isRequired
}
