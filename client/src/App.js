import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<AppNavbar />
					<ShoppingList />
				</div>
			</Provider>
		);
	}
}

export default App;
