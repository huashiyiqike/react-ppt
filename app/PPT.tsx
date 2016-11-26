import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as cx from 'classnames';
import './ReactPPT.less';
export interface Iprops {

    content: Array<JSX.Element>;
    cur?: number;
}

export interface Istates {
    isPlaying?: boolean;
    cur?: number;
}
export default class PPT extends React.Component<Iprops, Istates> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            isPlaying: false,
            cur: this.props.cur ? this.props.cur : 0
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
            <div className="ppt">
                {this.slider(this.props.content, this.state.isPlaying)}
                {!this.state.isPlaying && this.preview(this.props.content[this.state.cur])}
                {this.view(this.state.isPlaying)}
                {this.control()}
            </div>
        );
    }

    KeyPressInView = (e: any) => {
        if (!this.state.isPlaying) {
            return;
        }
        switch (e.keyCode) {
            case 38:
            case 37: this.setState({
                cur: this.state.cur - 1 < 0 ? 0 : this.state.cur - 1
            }); break;
            case 27: this.setState({
                isPlaying: false
            }); break;
            default: {
                let finish: boolean = this.state.cur >= this.props.content.length - 1
                this.setState({
                    isPlaying: finish ? false : true,
                    cur: finish ? this.state.cur : this.state.cur + 1
                })
            }
        }
    }

    Click = (e: any) => {
        // console.log('click')
        if (!this.state.isPlaying) {
            return;
        }
        e.stopPropagation();
        let finish: boolean = this.state.cur >= this.props.content.length - 1
        this.setState({
            isPlaying: finish ? false : true,
            cur: finish ? this.state.cur : this.state.cur + 1
        })
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
