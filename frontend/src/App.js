import React from 'react';
import Navbar from "./Components/Navbar";
import {
	BrowserRouter as Router,
	Route,Routes
  } from 'react-router-dom';
import Contactuspage from './pages/Contactuspage';
import Herosection from './pages/Herosection';
import Footer from "./Components/Footer";



function App() {
	return (
		
			
			<div>
			<Navbar />
			<Router>
			<Routes>
				
			<Route path="/contact" exact element={<Contactuspage />} />
			<Route path="/" exact element={<Herosection />} />
			
		    </Routes>
			</Router>
			<Footer />
			
			</div>
		
		
	);
}

export default App;
