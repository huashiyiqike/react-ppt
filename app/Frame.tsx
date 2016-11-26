/// <reference path="velocity-react.d.ts" /> 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as cx from 'classnames';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
require('velocity-animate');
require('velocity-animate/velocity.ui');
export class Frame extends React.Component<any, any> {

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
                <VelocityTransitionGroup runOnMount enter={{ animation: "transition.fadeIn", stagger: 200 }} leave={{ animation: "fadeOut", backwards: true }}>
                    <div>transition group</div>
                    <div>transition group2</div>
                    <div>transition group3</div>
                </VelocityTransitionGroup>
            </div>
        );
    }
}
export class List extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            animate: this.props.animate ? this.props.animate: true
        }
    }
    render() {
        let {animate} = this.state;
        return <div>
            <VelocityTransitionGroup runOnMount {...animate ? { enter: { animation: "transition.fadeIn", stagger: 100, drag: true } } : {}} leave={{ animation: "fadeOut", backwards: true }}>
                {this.props.lists.map((value: any, index: number) => {
                    return <li className={cx({ "ul": this.props.header })} key={index}>{value}</li>
                })}
                {this.props.children}
            </VelocityTransitionGroup>

        </div>
    }
}
