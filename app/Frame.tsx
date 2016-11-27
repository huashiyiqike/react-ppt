/// <reference path="velocity-react.d.ts" /> 
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as cx from 'classnames';
import { VelocityTransitionGroup, VelocityComponent } from 'velocity-react';
require('velocity-animate');
require('velocity-animate/velocity.ui');
// export class Frame extends React.Component<any, any> {

//     constructor(props: any, context: any) {
//         super(props, context);
//         this.state = {
//             animate: false,
//             count: this.props.count
//         }
//     }
//     render() {
//         return (
//             <div onClick={() => { this.setState({ animate: true }); console.log('clicked') } }>
//                 <VelocityComponent animation={{ opacity: this.state.animate ? 1 : 0 }} runOnMount duration={500}>
//                     <div>fdsfsfjkhjjdfsf</div>
//                 </VelocityComponent>
//             </div>
//         );
//     }
// }

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
            return this.state.numAnimationLeft == num
        }

        process = (elem: JSX.Element) => {
            if (!elem || !elem.props) {
                return elem;
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
                    {
                        React.createElement(
                            elem.type as any,
                            newProps,
                            Frame2()(React.createElement(elem.props.children))
                        )
                    }
                </VelocityComponent>
            } else {
                return React.createElement(
                    (Frame2()(React.createElement(elem.props.children)) as any
                    )
                )

            }
        }

        public render():React.ReactElement<any> {
            console.log(Target)
            return React.cloneElement(Target.type, {}, this.props.children)
            // return React.createElement(this.renderWithAnimation(Target) as any)
        }
    }

    const func: any = () => {
        return Inner
    }

    return func()
}

@Frame2()
export class Frame3 extends React.Component<any, any>{
    constructor(props: any, context: any) {
        super(props, context);
    }
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}

export class Frame extends React.Component<any, any>{
    Idanimation = 0;
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            numAnimationLeft: 0
        }
    }

    componentDidMount = () => {
        this.travel(this.props.children)
    }

    travel = (elem: JSX.Element) => {
        if (!elem || !elem.props) {
            return 0;
        }
        let count = elem.props.animate ? 1 : 0;;
        if (elem.props.children == null) {
            return count;
        } else {
            if (elem.props.children instanceof Array) {
                for (let i = 0; i < elem.props.children.length; i++) {
                    count += this.travel(elem.props.children[i]);
                }
            } else {
                count += this.travel(elem.props.children);
            }
            return count;
        }
    }

    myTurnToAnimate = (num: number) => {
        return this.state.numAnimationLeft == num;
    }

    renderWithAnimation = (elem: JSX.Element): JSX.Element => {
        if (!elem || !elem.props) {
            return elem;
        }
        let child = elem.props.children;
        if (child) {
            if (child instanceof Array) {
                for (let i = 0; i < child.length; i++) {
                    if (child[i].props) {

                    }
                }
            } else {
                if (!child.props) {
                    return elem;
                }
                if (child.props.animate) {
                    return React.createElement(elem.type as any, elem.props, this.addVelocity(child))
                } else {
                    // TODO type not right?
                    return React.createElement(elem.type as any, elem.props, this.renderWithAnimation(elem.props.children))
                }
            }
        }
    }

    addVelocity = (child: JSX.Element): JSX.Element => {
        return <VelocityComponent
            {...{
                animation: child.props.animate,
                duration: child.props.duration ? child.props.duration : 500,
                runOnMount: true
            }}>
            <div>
                {child.props && this.renderWithAnimation(child.props.children)}
                {!child.props && child}
            </div>
        </VelocityComponent>;
    }


    // renderWithAnimation = (elem: JSX.Element): JSX.Element => {
    //     if (!elem || !elem.props) {
    //         return elem;
    //     }
    //     let res: JSX.Element = null;
    //     if (elem.props.animate) {
    //         if (!elem.props.runOnMount) {
    //             this.Idanimation += 1;
    //             return <VelocityComponent
    //                 {...this.myTurnToAnimate(this.Idanimation) ? {
    //                     animation: elem.props.animate,
    //                     duration: elem.props.duration ? elem.props.duration : 500,
    //                     runOnMount: false
    //                 } : {}} >
    //                 <div>
    //                     {elem.props.children.map(this.renderWithAnimation)}
    //                 </div>
    //             </VelocityComponent>
    //         } else {
    //             return <VelocityComponent
    //                 {...{
    //                     animation: elem.props.animate,
    //                     duration: elem.props.duration ? elem.props.duration : 500,
    //                     runOnMount: true
    //                 }}>
    //                 <div>
    //                     {elem.props.children && (elem.props.children instanceof Array) ? elem.props.children.map(this.renderWithAnimation) : this.renderWithAnimation(elem.props.children)}
    //                 </div>
    //             </VelocityComponent>
    //         }
    //     } else {
    //         if (elem.props.children) {
    //             if (elem.props.children instanceof Array) {
    //                 for (let i = 0; i < elem.props.children.length; i++) {
    //                     elem.props.children[i] = this.renderWithAnimation(elem.props.children[i]);
    //                 }
    //             } else {
    //                 try{
    //                     elem.props.children = this.renderWithAnimation(elem.props.children);
    //                 }catch(e){
    //                     console.log(e)
    //                 }
    //             }
    //         }
    //         return elem;
    //     }
    // }

    // <VelocityComponent animation={{ opacity: this.state.animate ? 1 : 0 }} runOnMount duration={500}>
    //     <div>fdsfsfjkhjjdfsf</div>
    //     <VelocityComponent animation={{ opacity: this.state.animate ? 1 : 0 }} runOnMount duration={500}>
    //         <div>fdsfsfjkhjjdfsf</div>
    //     </VelocityComponent>
    // </VelocityComponent>
    render() {
        return (
            <div>
                {
                    this.renderWithAnimation(
                        <div>{this.props.children}</div>)
                }
            </div>
        );
    }

    // render() {
    //     return (
    //         <div onClick={() => { this.setState({ animate: true }); console.log('clicked') } }>
    //             {this.renderWithAnimation(this.props.children)}
    //         </div>
    //     );
    // }

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