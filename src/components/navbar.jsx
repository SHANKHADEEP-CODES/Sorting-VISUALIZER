import React from 'react';

import Algorithms from './navbar-components/algorithms';
import Speed from './navbar-components/speed';

// Navbar Component
class Navbar extends React.Component {
    state = {
        Algorithms: [
			{ value: 1, type: 'Bubble Sort' },
			{ value: 2, type: 'Selection Sort' },
			{ value: 3, type: 'Insertion Sort' },
			{ value: 4, type: 'Merge Sort' },
			{ value: 5, type: 'Quick Sort' },
            { value: 6, type: 'Heap Sort' },
		],
		lengths: [100],
		speeds: [ 2.00, 4.00, 10.00, 20.00, 50.00, 100.00, 200.00, 500.00,1000.00, 5000.00]
    };

    
    handleClick = (e) => {
        e.preventDefault();
        this.props.response();
    }

    render() {
        return (
            <div className="navbar" id="navbar">
                <button id="random" onClick = {() => this.props.newList(1)}>Generate random Array</button>
                <Algorithms 
                    onChange = {this.props.onChange}
                    algorithms = {this.state.Algorithms}
                />
                
                <Speed 
                    onChange = {this.props.onChange}
                    speeds = {this.state.speeds}
                />
                <button id="start" onClick = {() => this.props.start()}>Start Sorting</button>
                <a 
                    className="icon" 
                    onClick = {(e) => this.handleClick(e)}
                    href = "/">
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        );
    }
}
 
export default Navbar;