/// <reference path="velocity-react.d.ts" /> 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as cx from 'classnames';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
require('velocity-animate');
require('velocity-animate/velocity.ui');
import { observer,inject } from 'mobx-react'

export class Frame extends React.Component<any, any> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            animate: false,
            count: this.props.count
        }
    }
    render() {
        return (
            <div onClick={() => { this.setState({ animate: true }); console.log('clicked') } }>
                <VelocityComponent animation={{ opacity: this.state.animate ? 1 : 0 }} runOnMount duration={500}>
                    <div>fdsfsfjkhjjdfsf</div>
                </VelocityComponent>
            </div>
        );
    }
}

export const Frame2 = () => (Target: any) => {
    class Inner extends React.Component<any, any>{
        Idanimation = 0;
        constructor(props: any, context: any) {
            super(props, context);
            this.state = {
                numAnimationLeft: 0
            }
        }

        private wrappedInstance: React.ReactInstance;

        myTurnToAnimate = (num: number) => {
            return true;
            // return this.state.numAnimationLeft == num
        }

        process = (elem: JSX.Element, children: any) => {
            if (!elem || !elem.props) {
                return children;
            }

            if (elem.props.animate) {
                const newProps: any = Object.assign({}, this.props)
                newProps.others = others((elem as any).defaultProps, newProps)

                newProps.ref = (
                    (ref: React.ReactInstance) => {
                        this.wrappedInstance = ref
                    }
                )
                return <VelocityComponent
                    {...this.myTurnToAnimate(this.Idanimation) ? {
                        animation: elem.props.animate,
                        duration: elem.props.duration ? elem.props.duration : 500,
                        runOnMount: false
                    } : {}} >
                    {children}
                </VelocityComponent>
            } else {
                return elem;
            }
        }

        public render(): React.ReactElement<any> {
            console.log(Target)
            return React.createElement(Target, {}, this.process(Target, this.props.children))
        }
    }

    const func: any = () => {
        return Inner
    }

    return func()
}

@inject('Store') @observer
export class Frame3 extends React.Component<any, any>{
    constructor(props: any, context: any) {
        super(props, context);
    }
 
  componentWillReceiveProps(nextProps:any){
      console.log(nextProps);
  } 

    // handleKepPress = (e: any) => {
    //     switch (e.keyCode) {
    //         case 38:
    //         case 37: this.setState({
    //             cur: this.state.cur - 1 < 0 ? 0 : this.state.cur - 1
    //         }); break;
    //         case 27: this.setState({
    //             isPlaying: false
    //         }); break;
    //         default: {
    //             let finish: boolean = this.state.cur >= this.props.content.length - 1
    //             this.setState({
    //                 isPlaying: finish ? false : true,
    //                 cur: finish ? this.state.cur : this.state.cur + 1
    //             })
    //         }
    //     }

    // }

    render() {
        console.log(this.props.order);
        console.log(this.props.Store.currentCount)
        return <div count={this.props.count}>
        <VelocityTransitionGroup
            {...this.props.Store.currentCount >= this.props.order ? {
                enter: { animation: "transition.fadeIn", stagger: 600},
                runOnMount: true,
               
            } : {}} >
            {this.props.children}
              <VelocityComponent animation={{ "transition.fadeIn":this.props.Store.currentCount >= this.props.order ? 1 : 0 }}  duration={500}>
                    <div>fdsfsfjkhjjdfsf</div>
                </VelocityComponent>
        </VelocityTransitionGroup>
        </div>
    }
}




export class List extends React.Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            animate: this.props.animate ? this.props.animate : true
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

export const others = (defaultProps: any = {}, props: any = {}, ignore?: string[]) => {
    let defaultPropsKeys: Array<string> = Object.keys(defaultProps)
    let others: any = {}
    const animateAttributes = ['animate'];

    ignore = ignore || []
    ignore = ignore.concat(animateAttributes)

    Object.keys(props).forEach((key: string) => {
        // 不能出现在 defaultProps ignore 里
        // 必须在 htmlAttributes 里
        // 如果是 reactNative, 则忽略 dom 属性的检测
        if (ignore.findIndex(item => item === key) > -1) {
            return
        }

    })

    return others
}