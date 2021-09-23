import React from 'react';

//styles
import './App.css';

//material-ui
import Container from '@material-ui/core/Container';

//components
import HomeContainer from './pages/home/homeContainer';

function App() {
	return (
		<Container maxWidth="lg">
			<HomeContainer />
		</Container>
	);
}

export default App;
