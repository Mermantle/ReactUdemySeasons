import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
<<<<<<< HEAD
// import component
=======
// import above components
>>>>>>> bd15e3306f353b03227681416a3fd3261eeb282b

class App extends React.Component {
    
//    // Javascript class - first function called when component initialised
//    // so good place to initialise state
//    constructor(props){
//       super(props); // have to call this - React has its own constructor and we should call this when we make use of JS constructor
//        
//       // Initialising STATE
//        //THIS IS THE ONLY TIME we do direct assigment to this.state
//       this.state = { lat: null, errorMessage: '' };
//    }

    // alternatively to the constructor above - I can do this - as will be
    // translated to the same above by Babel
    state = { lat: null, errorMessage: '' };
    
    componentDidMount(){
        // called separate service
        window.navigator.geolocation.getCurrentPosition(
            // give it the call back
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message='working on it...' />;
    }

    // React says we have to define a render function ! And will be called frequently
    // going to simply return some JSX
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render (
    <App />, document.querySelector('#root')
);