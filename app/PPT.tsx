import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as cx from 'classnames';
import './ReactPPT.less';
import { observer, inject, Provider } from 'mobx-react';
import { observable } from 'mobx'

export interface Iprops {

    content: Array<JSX.Element>;
    cur?: number
    Store: {
        currentCount: number,
        setCount: Function
    }

}

export interface Istates {
    isPlaying?: boolean;
    cur?: number;
    frameCount?: number;
    forward?: boolean;

}
@inject('Store') @observer
export default class PPT extends React.Component<Iprops, Istates> {
    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            isPlaying: false,
            cur: this.props.cur ? this.props.cur : 0,
            forward: true
        }
        // this.setCur = this.setCur.bind(this);
        this.view = this.view.bind(this);

    }

    componentDidUpdate() {
        if (!this.state.isPlaying) {
            (this.refs["view"] as any).blur();
        }
    }
    render() {
        return (
            <Provider currentCount={this.props.Store.currentCount}>
                <div className="ppt">
                    {this.slider(this.props.content, this.state.isPlaying)}
                    {!this.state.isPlaying && this.preview(this.props.content[this.state.cur])}
                    {this.view(this.state.isPlaying)}
                    {this.control()}
                </div>
            </Provider>
        );
    }

    KeyPressInView = (e: any) => {
        if (!this.state.isPlaying) {
            return;
        }
        switch (e.keyCode) {
            case 38:
            case 37:
                if (this.props.Store.currentCount > 0) {
                    this.props.Store.currentCount -= 1;
                } else {
                    let next = this.state.cur - 1 < 0 ? 0 : this.state.cur - 1;
                    this.state.frameCount = this.props.content[next].props && this.props.content[next].props.count;
                    if (this.state.frameCount == undefined) {
                        this.state.frameCount = 0;
                    }
                    // this.props.Store['currentCount'] = 0;
                    this.props.Store.setCount(this.state.frameCount);

                    this.setState({
                        cur: next,
                        forward: false
                    });
                }
                break;
            case 27: this.setState({
                isPlaying: false
            }); break;
            default: {
                let finish: boolean = this.state.cur >= this.props.content.length - 1 && this.props.Store.currentCount >= this.state.frameCount
                if (finish) {
                    this.setState({
                        isPlaying: false
                    })
                } else {
                    if (this.props.Store.currentCount < this.state.frameCount) {
                        console.log(this.props.Store.currentCount)
                        this.props.Store.currentCount += 1;
                    } else {

                        this.state.frameCount = this.props.content[this.state.cur + 1].props && this.props.content[this.state.cur + 1].props.count;
                        if (this.state.frameCount == undefined) {
                            this.state.frameCount = 0;
                        }
                        // this.props.Store['currentCount'] = 0;
                        this.props.Store.setCount(0);
                        this.setState({
                            cur: this.state.cur + 1,
                            forward: true
                        })
                    }
                }

            }
        }
    }

    Click = (e: any) => {
        // console.log('click')
        if (!this.state.isPlaying) {
            return;
        }
        e.stopPropagation();
        let finish: boolean = this.state.cur >= this.props.content.length - 1 && this.props.Store.currentCount >= this.state.frameCount
        if (finish) {
            this.setState({
                isPlaying: false
            })
        } else {
            if (this.props.Store.currentCount < this.state.frameCount) {
                this.props.Store.currentCount += 1;
            } else {
                this.setState({
                    cur: this.state.cur + 1
                })
            }
        }
    }
    view = (show: boolean) => {
        let {content} = this.props;
        return <div className="view" tabIndex={1} ref="view" onClick={this.Click.bind(this)} onKeyDown={this.KeyPressInView.bind(this)}>
            {show && content[this.state.cur]}
        </div>
        // too late
        // return <div className="view" {...this.state.isPlaying?{tabIndex:1}:{}}  ref="view" onKeyDown={this.KeyPressInView.bind(this)}>
        //     {show && content[this.state.cur]}
        // </div>
    }
    setCur = (index: number) => {
        this.setState({
            cur: index,
            isPlaying: this.state.isPlaying
        });
    }
    preview = (content: JSX.Element) => {
        return <div className="preview">
            {content}
        </div>
    }

    play = (e: any) => {
        e.stopPropagation();
        this.setState({
            isPlaying: true,
            cur: this.state.cur
        });
        console.log(this.refs["view"]);
        (this.refs["view"] as any).focus();
    }

    stop = (e: any) => {
        e.stopPropagation();
        this.setState({
            isPlaying: false,
            cur: this.state.cur
        });
    }

    prev = (e: any) => {
        e.stopPropagation();
        this.setState({
            cur: this.state.cur - 1,
            isPlaying: this.state.isPlaying
        });
    }

    next = (e: any) => {
        e.stopPropagation();
        this.setState({
            cur: this.state.cur + 1,
            isPlaying: this.state.isPlaying
        });
        console.log(this.state.cur)
    }

    control = () => {
        return <div className={cx({ "control-play": this.state.isPlaying })}>
            <div className="control">
                <span className="btn-play" onClick={this.play.bind(this)}>o</span>
                <span className="btn-stop" onClick={this.stop.bind(this)}>x</span>
                <span className="btn-prev" onClick={this.prev.bind(this)}>{"<"}</span>
                <span className="btn-next" onClick={this.next.bind(this)}>{">"}</span>
            </div>
        </div>
    }
    slider = (divs: Array<JSX.Element>, show: boolean) => {
        if (show) {
            return null;
        }
        return <div className="slider">
            {
                divs.map((value, index) => {
                    return <div key={index} onClick={this.setCur.bind(this, index)} className="slider-piece">
                        <div className="dummy" />
                        <div className="slider-index"> {index + 1}</div>
                        <div className="slider-value">
                            {value}
                        </div>
                    </div>
                })
            }
        </div>
    }
}
