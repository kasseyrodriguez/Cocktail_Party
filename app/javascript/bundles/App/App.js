import React, { Component } from 'react';
import axios from 'axios';
import AppWidget from './components/Widget'


class App extends Component {
	state = {
		possibleResults: [],
		results: []
	}

	componentDidMount() {
		// axios.get('/search.json')
		// 	.then((response) => {
		// 		this.setState({ possibleResults: response.data })
		// 	})
		// 	.catch((error) => { console.log(error) })
	}

	handleSearch = (event) => {
		const { possibleResults } = this.state;
		const searchText = event.target.value;
		const regexp = new RegExp(searchText, 'i');
		let results = [];
		if (searchText.trim() !== '') {
			results = possibleResults.filter((result) => {
				return regexp.test(result.name)
			})
			this.setState({ results });
		} else {
			this.setState({ results: [] })
		}
	}
	render() {
		const { results } = this.state;
		return (


			<div>
				{/* <h1>Hello World!</h1> */}
				<AppWidget />
				{/* <input
					type="search"
					onChange={this.handleSearch}
				/>
				<ul>
					{results.map((result, i) => {
						return (
							<li key={i}>
								<a href={result.location}>
									{result.name}
								</a>
							</li>
						)
					})}
				</ul>
				{results.length === 0 && <p>No Results</p>}
				*/}

			</div>

		)
	}
}


export default App;
