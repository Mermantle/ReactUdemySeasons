import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message }
            </div>
        </div>
    );
};

// if we forget to send in props - then we can set up defaults here
Spinner.defaultProps = {
    message: 'Loading your page....'
};

export default Spinner;
