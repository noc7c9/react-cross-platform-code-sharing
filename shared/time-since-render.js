import React from 'react';
import moment from 'moment';

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
