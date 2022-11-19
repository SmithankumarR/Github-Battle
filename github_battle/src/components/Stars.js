import React from 'react';
import AllCard from "./AllCard";

class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            tag: 'all',
        };
    }
    componentDidMount = () => {
        this.fetchData(this.state.tag);
        // console.log(this.state.data);
    };
    handleTags = ({ target }) => {
        let id = target.dataset.id;
        this.setState(
            {
                tag: id,
                data: null,
            },
            () => this.fetchData(this.state.tag)
        );
    };
    fetchData = (tag) => {
        fetch(
            `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`
        )
            .then((res) => res.json())
            .then((data) => this.setState({ data: data.items }));
    };

    render() {
        let tag = this.state.tag;
        return (
            <main className="flex flex-col items-center w-full">
                <header className="flex justify-center mt-5">
                    <nav className="flex">
                        <h2
                            className={
                                tag === 'all'
                                    ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                                    : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
                            }
                            data-id="all"
                            onClick={(event) => this.handleTags(event)}
                        >
                            All
                        </h2>
                        <h2
                            className={
                                tag === 'javascript'
                                    ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                                    : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
                            }
                            data-id="javascript"
                            onClick={(event) => this.handleTags(event)}
                        >
                            JavaScript
                        </h2>
                        <h2
                            className={
                                tag === 'ruby'
                                    ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                                    : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
                            }
                            data-id="ruby"
                            onClick={(event) => this.handleTags(event)}
                        >
                            Ruby
                        </h2>
                        <h2
                            className={
                                tag === 'java'
                                    ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                                    : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
                            }
                            data-id="java"
                            onClick={(event) => this.handleTags(event)}
                        >
                            Java
                        </h2>
                        <h2
                            className={
                                tag === 'css'
                                    ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                                    : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
                            }
                            data-id="css"
                            onClick={(event) => this.handleTags(event)}
                        >
                            CSS
                        </h2>
                        <h2
                            className={
                                tag === 'python'
                                    ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                                    : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
                            }
                            data-id="python"
                            onClick={(event) => this.handleTags(event)}
                        >
                            Python
                        </h2>
                    </nav>
                </header>
                <div className="flex flex-wrap w-full justify-center">
                    {this.state.data ? (
                        <AllCard data={this.state.data} darkMode={this.props.darkMode} />
                    ) : (
                        // <h2 className="text-center text-2xl font-bold py-8">Loading...</h2>
                        <img src="/images/loading.gif" alt="" />
                    )}
                </div>
            </main>
        );
    }
}
export default Stars;