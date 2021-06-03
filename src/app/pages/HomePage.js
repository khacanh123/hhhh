import React from 'react';
import IndexPage from '../components/Index';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    changeCount = () => {
        this.setState({count: this.state.count+2})
    }
    render(){
        return(
            <>
                <React.Fragment>
                    <IndexPage>
                        <section>
                            <h2>This is HomePage - {this.state.count}</h2>
                            <button onClick={() => this.changeCount()}>Add</button>
                        </section>
                    </IndexPage>
                </React.Fragment>
            </>
        )
    }
}
export default HomePage;