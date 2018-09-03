/*
 * A component that is shared by both web and native.
 */

import React from 'react';
// Moment.js is being imported from the root of the monorepo and not from either
// web or native projects
import moment from 'moment';

// Import the platform specific components that do the actual rendering
// Note: the import is from "target" that resolves to either the web or native
//       file depending which is being built
import { Label, CenteredView } from 'target/components';

const FREQUENCY = 500;

moment.relativeTimeThreshold('ss', 0);

export default class TimeSinceRender extends React.Component {
    constructor(props) {
        super(props);

        this.moment = moment();
        this.state = {
            fromNow: this.moment.fromNow(),
        };
        this.intervalID = setInterval(() => this.setState({
            fromNow: this.moment.fromNow(),
        }), FREQUENCY);
    }

    render() {
        return (
            <CenteredView>
                <Label text={`Initial render was ${this.state.fromNow}`} />
            </CenteredView>
        );
    }
}
