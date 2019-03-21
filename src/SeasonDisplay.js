import './SeasonDisplay.css';
import React from 'react';
// import these components

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Wow its cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

// best practice is to put the component below config or helper functions
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    //console.log(season);

    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;
