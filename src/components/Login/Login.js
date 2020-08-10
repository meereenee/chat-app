import PropTypes from 'prop-types'
import React, {useRef} from 'react'

export default function Login({setNickName}) {
	const nickName = useRef()
	const handleSubmit = e => {
		e.preventDefault()
		setNickName(nickName.current.value)
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Enter nickname:
				<input type='text' ref={nickName} autoFocus/>
			</label>
			<input type="submit" value="Login"/>
		</form>
	)
}

Login.propTypes = {
	setNickName: PropTypes.func.isRequired
}
