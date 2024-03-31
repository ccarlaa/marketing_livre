import FirstSection from "./Sections/FirstSection/index.jsx";
import SecondSection from "./Sections/SecondSection/index.jsx";
import ThirdSection from "./Sections/ThirdSection/index.jsx";
// import Header from "./Sections/Header.jsx";
import GlobalStyle from "./Style/reset.jsx";
import React from "react";

function App() {
	return (
		<>
			<GlobalStyle />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
		</>
	);
}

export default App;
