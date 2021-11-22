import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import PriceGuide from './Components/PriceGuide';
import StudioInfo from './Components/StudioInfo';
import StudioMain from './Components/StudioMain';

import 'swiper/css';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/price' component={PriceGuide} />
					<Route exact path='/main' component={StudioMain} />
					<Route exact path='/info' component={StudioInfo} />
					<Route exact path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
