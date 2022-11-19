import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Stars from "./components/Stars";
import GroupBattle from "./components/GroupBattle.js"
import Battle from "./components/Battle";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false
        }
    }

    toggleDarkMode = () => {
        this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
    }

    render() {
        return (
            <div className={this.state.darkMode ? "bg-gray-900 text-white min-h-screen " : ""}>
                <BrowserRouter>
                    <Header toggleDarkMode={this.toggleDarkMode} {...this.state} />
                    <Route path="/" exact>
                        <Stars {...this.state} />
                    </Route>
                    <Route path="/battle" exact>
                        <GroupBattle {...this.state} />
                    </Route>
                    <Route path="/userbattle" exact>
                        <Battle  {...this.state} />
                    </Route>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;