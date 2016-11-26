/// <reference path="velocity-react.d.ts" /> 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
require('velocity-animate');
require('velocity-animate/velocity.ui');
export default class Frame extends React.Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            animate: false
        }
    }
    render() {
        return (
            <div onClick={() => { this.setState({ animate: true }); console.log('clicked') } }>
                <VelocityComponent animation={{ opacity: this.state.animate ? 1 : 0 }} runOnMount duration={500}>
                    <div>fdsfsfjkhjjdfsf</div>
                </VelocityComponent>
                <VelocityTransitionGroup runOnMount enter={{ animation: "transition.whirlIn" }} leave={{ animation: "slideUp" }}>
                    <div>transition group</div>
                </VelocityTransitionGroup>
            </div>
        );
    }


}
