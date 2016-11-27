import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactPPT, Frame, Lists, Frame2, Frame3 } from './ReactPPT';
import './index.less';
import * as cx from 'classnames';

class Wrapper extends React.Component<any, any>{
    render() {
        return <div className="wrapper">
            <div className="header">{this.props.header}</div>
            {this.props.children}
            <footer>吕祺|基于深度学习的时间序列建模</footer>
        </div>
    }
}



let divs: Array<JSX.Element> = [
    <Frame>
    <div key={1} className="wrapper">
        <div className="title">
            基于深度学习的时间序列建模</div>
        <div className="body">
            清华大学工程硕士毕业论文答辩<br />
            <h2>吕祺</h2><br />
            <br />
            清华大学-香港中文大学媒体科学技术与系统联合研究中心<br />
            清华大学信息科学与技术国家实验室<br />
            2016年12月<br />
        </div>
    </div>
    </Frame>,

    <Wrapper key={2} header={"提纲"}>
        <ul className="list">
            <li className="ul">研究意义与背景</li>
            <Lists header lists={["主要研究内容"]} >
                <Lists lists={["长时短时记忆模型优化",
                    "LSTM-RTRBM模型"]} />
            </Lists>
            <Lists header lists={["论文主要工作与贡献总结"]} />
        </ul>
    </Wrapper>,

    <Wrapper key={3} header={"提纲"}>
        <ul className="list">
            <li className="ul">研究意义与背景</li>
            <div className="dimmer">
                <Lists header lists={["主要研究内容"]} >
                    <Lists lists={["长时短时记忆模型优化",
                        "LSTM-RTRBM模型"]} />
                </Lists>
                <Lists header lists={["论文主要工作与贡献总结"]} />
            </div>
        </ul>
    </Wrapper>,

    <Wrapper key={4} header={"提纲"}>
        <ul className="list">
            <li className="ul">研究意义与背景</li>
            <Lists header lists={["主要研究内容"]} >
                <Lists lists={["长时短时记忆模型优化",
                    "LSTM-RTRBM模型"]} />
            </Lists>
            <Lists header lists={["论文主要工作与贡献总结"]} />
        </ul>
    </Wrapper>,
        <Wrapper key={5} header={"长时短时记忆模型"}>
            <ul className="list">
                <Lists header lists={["简介", "结构", "训练方法", "优化"]}>
                </Lists>
            </ul>
        </Wrapper>
    ,
    <Wrapper key={6} header={"受限玻尔兹曼机"}>
        <ul className="list">
            <Lists header lists={["简介", "结构", "训练方法"]}>
            </Lists>
        </ul>
    </Wrapper>

    ,
    <Frame key={7}>
    <div>fdsf</div>
    </Frame>,
    <Frame3 count={1} key={8} order={1} animate={{animation:"transition.fadeIn"}} >
    <div>3<div>d</div></div>
    </Frame3>,
    <div>4<div>2</div></div>,
    <div>5<div>2</div></div>,
    <div>1<div>2</div></div>,
    <div> pl;ac</div>,
    <div>1<div>2</div></div>,
    <div> pl;ac</div>,
    <div>1<div>2</div></div>,
    <div> pl;ac</div>,
    <div>1<div>2</div></div>,
    <div> pl;ac</div>,
    <div>1<div>2</div></div>,
    <div> pl;ac</div>,
    <div>1<div>2</div></div>,
    <div> pl;ac</div>,
    <div>1<div>2</div></div>,

]

ReactDOM.render(<ReactPPT content={divs} cur={7} />, document.querySelector('#content'));
