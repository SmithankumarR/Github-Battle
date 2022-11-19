import React from "react";
import { GiTorch } from "react-icons/gi";
import { BiBulb } from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Header(props) {

    return (
        <header className="flex justify-between p-5">
            <nav className="flex">
                <NavLink to="/" exact
                    activeClassName={
                        props.darkMode ?
                            'text-red-700 px-3 py-2 rounded mr-5'
                            : 'text-red-600 px-3 py-2 rounded mr-5'
                    }
                    className={
                        props.darkMode ?
                            'text-white px-3 py-2 rounded mr-5'
                            : ' px-3 py-2 rounded mr-5'
                    }
                >
                    <button className="text-2xl font-bold">Popular</button>
                </NavLink>
                <NavLink to="/battle" exact
                    activeClassName={
                        props.darkMode ?
                            'text-red-700 px-3 py-2 rounded mr-5'
                            : 'text-red-600  px-3 py-2 rounded mr-5'
                    }
                    className={
                        props.darkMode ?
                            'text-white px-3 py-2 rounded mr-5'
                            : ' px-3 py-2 rounded mr-5'
                    }
                >
                    <button className="text-2xl font-bold">Battle</button>
                </NavLink>
            </nav>

            <button
                onClick={props.toggleDarkMode}
            >
                <strong className="text-3xl">
                    {
                        props.darkMode ? <BiBulb /> : <GiTorch />
                    }

                </strong>
            </button>
        </header>
    );
}

export default Header;