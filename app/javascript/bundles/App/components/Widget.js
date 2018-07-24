import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import '../../../../../node_modules/react-chat-widget/lib/styles.css';

// import logo from './logo.svg';

class AppWidget extends Component {
	componentDidMount() {
		addResponseMessage("Welcome to this awesome chat!");
	}

	handleNewUserMessage = (newMessage) => {
		console.log(`New message incomig! ${newMessage}`);
		// Now send the message throught the backend API
	}

	render() {
		return (
			<div className="App">
				<Widget
					handleNewUserMessage={this.handleNewUserMessage}
					title="My new awesome title"
					subtitle="And my cool subtitle"
				/>
			</div>
		);
	}
}

export default AppWidget;