import React from 'react';
import Iframe from 'react-iframe'
import './Database.css';

export const Database = () => (
    <React.Fragment>
    <div className="roadmap-desktop">
        <Iframe url = "https://5f37ff0f3066c30008c28ae8--lunar-open-architecture.netlify.app/?"
                            marginheight = "100px"
                            marginWidth = "100px"
                            width = "100%"
                            height = "90%"
                            border = "none" />
    </div>

    <div className="roadmap-mobile">
        <h2 className="title"><i>Please view on desktop to explore the database.</i></h2>


    </div>
    </React.Fragment>
)

