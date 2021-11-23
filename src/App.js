import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import PriceGuide from './Components/PriceGuide';
import StudioInfo from './Components/StudioInfo';
import StudioMain from './Components/StudioMain';

import Main from './img/main.png';
import Info from './img/info.png';
import Guide from './img/guide.png';

import ReactFullpage from '@fullpage/react-fullpage';

// import 'swiper/swiper-bundle.css';

import styled from 'styled-components';
// import Swiper core and required modules

import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';

const Test = () => {
	useEffect(() => {
		new fullpage('#fullpage', {
			anchors: ['firstPage', 'secondPage', 'thirdPage'],
			normalScrollElements: '#firstPage',
		});
	}, []);
	return (
		<div id='fullpage'>
			<div id='firstPage' class='section'>
				{/* <img src={Main} /> */}
				<Container>
					<StudioMain />
				</Container>
			</div>
			<div id='secondPage' class='section'>
				<img src={Info} />
			</div>
			<div id='thirdPage' class='section'>
				<img src={Guide} />
			</div>
		</div>
	);
};

class FullpageWrapper extends React.Component {
	onLeave(origin, destination, direction) {
		console.log('Leaving section ' + origin.index);
	}
	afterLoad(origin, destination, direction) {
		console.log('After load: ' + destination.index);
	}
	render() {
		return (
			<ReactFullpage
				normalScrollElements='#test'
				scrollOverflow={false}
				onLeave={this.onLeave.bind(this)}
				afterLoad={this.afterLoad.bind(this)}
				render={({ state, fullpageApi }) => {
					// state && state.origin && state.origin.index === 0 && fullpageApi.setAutoScrolling(false);
					// state && state.origin && state.origin.index !== 0 && fullpageApi.setAutoScrolling(true);
					// console.log('test');
					return (
						<div>
							{/* <StudioInfo /> */}

							<div id='fullpage-wrapper'>
								<div id='test' className='section active test'>
									<img src={Main} />
								</div>
								<div className='section'>
									<img src={Info} />
									{/* <Container2>
									<StudioMain />
								</Container2> */}
								</div>
								<div className='section'>
									<img src={Guide} />
									{/* <Container>
									<PriceGuide />
								</Container> */}
								</div>
							</div>
						</div>
					);
				}}
			/>
		);
	}
}

const Container = styled.div`
	position: relative;
	width: 100vw;
	min-height: 100vh;
	box-sizing: border-box;
	overflow-y: scroll;
`;
const Container2 = styled.div`
	position: relative;
	width: 100vw;
	min-height: 300vh;
	height: 4276px;
	box-sizing: border-box;
	overflow-y: scroll;
	overscroll-behavior: contain;
`;

// install Swiper modules
// SwiperCore.use([Pagination]);

// const Test = () => {
// 	return (
// 		<Swiper
// 			direction={'vertical'}
// 			pagination={{
// 				clickable: true,
// 			}}
// 			className='mySwiper'>
// 			<SwiperSlide>
// 				<Container>
// 					<StudioInfo />1
// 				</Container>
// 			</SwiperSlide>
// 			<SwiperSlide>
// 				<Container>
// 					<StudioMain />2
// 				</Container>
// 			</SwiperSlide>
// 			<SwiperSlide>
// 				<Container>
// 					<PriceGuide />3
// 				</Container>
// 			</SwiperSlide>
// 		</Swiper>
// 	);
// };

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/price' component={PriceGuide} />
					<Route exact path='/main' component={StudioMain} />
					<Route exact path='/info' component={StudioInfo} />
					<Route exact path='/scroll' component={Test} />
					<Route exact path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
