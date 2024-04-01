import styled from "styled-components";
import Footer from "./Components/Footer.jsx";
import FifthSection from "./Sections/FifthSection/index.jsx";
import FirstSection from "./Sections/FirstSection/index.jsx";
import FourthSection from "./Sections/FourthSection/index.jsx";
import SecondSection from "./Sections/SecondSection/index.jsx";
import SixthSection from "./Sections/SixthSection/index.jsx";
import ThirdSection from "./Sections/ThirdSection/index.jsx";
import GlobalStyle from "./Style/reset.jsx";
import React from "react";
import Header from "./Components/Header.jsx";

function App() {
	return (
		<AppComponent>
			<Header />
			<GlobalStyle />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<Footer />
		</AppComponent>
	);
}

const AppComponent = styled.div`
	position: relative;
	padding: 92px 0px;
`
export default App;
