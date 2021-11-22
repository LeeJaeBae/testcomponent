import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import PriceGuide from './Components/PriceGuide';
import StudioInfo from './Components/StudioInfo';
import StudioMain from './Components/StudioMain';

import ReactFullpage from '@fullpage/react-fullpage';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import styled from 'styled-components';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import React from 'react';

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
				// normalScrollElements='.test'
				scrollOverflow={false}
				onLeave={this.onLeave.bind(this)}
				afterLoad={this.afterLoad.bind(this)}
				render={({ state, fullpageApi }) => {
					state && state.origin && state.origin.index === 0 && fullpageApi.setAutoScrolling(false);
					state && state.origin && state.origin.index !== 0 && fullpageApi.setAutoScrolling(true);

					return (
						<div id='fullpage-wrapper'>
							<div className='section active'>
								<Container>
									<StudioInfo />
								</Container>
							</div>
							<div className='section test'>
								<Container2
									onScroll={(e) => {
										console.log(e);
									}}>
									<StudioMain />
								</Container2>
							</div>
							<div className='section'>
								<Container>
									<PriceGuide />
								</Container>
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
SwiperCore.use([Pagination]);

const Test = () => {
	return (
		<Swiper
			direction={'vertical'}
			pagination={{
				clickable: true,
			}}
			className='mySwiper'>
			<SwiperSlide>
				<Container>
					<StudioInfo />1
				</Container>
			</SwiperSlide>
			<SwiperSlide>
				<Container>
					<StudioMain />2
				</Container>
			</SwiperSlide>
			<SwiperSlide>
				<Container>
					<PriceGuide />3
				</Container>
			</SwiperSlide>
		</Swiper>
	);
};

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/price' component={PriceGuide} />
					<Route exact path='/main' component={StudioMain} />
					<Route exact path='/info' component={StudioInfo} />
					<Route exact path='/' component={FullpageWrapper} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
