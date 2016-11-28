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

// count should be at top, counting how many animation you have, key is just for reading

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
            <Lists header lists={["研究意义与背景","研究内容和方法","主要研究内容"]} >
                <Lists lists={["长时短时记忆模型优化",
                    "LSTM-RTRBM模型"]} />
            </Lists>
            <Lists header lists={["研究成果"]} />
        </ul>
    </Wrapper>,

    <Wrapper key={3} header={"提纲"}>
        <ul className="list">
            <Lists header lists={["研究意义与背景"]}>
                <li>深度神经网络的发明，单一时间点的建模能力得到突飞猛进的进步</li>
                <li>单句语音识别，视频捕捉等方面的效果也依此得到进步</li>
                <li>然而在序列模型上，缺乏相应的提升，导致语音识别没有上下文理解能力，
                自然语言处理也没有起色</li>
            </Lists>

        </ul>
    </Wrapper>,

      <Wrapper count={0} key={3} header={" "}>
            <Frame3 order={0} animate={{ animation: "transition.bounceUpIn", duration: 500 }}>
                <img style={{position: 'absolute', left: "0%", top:"1%"}} src="../lib/app/static/xiaobing.jpg"/>
                <img style={{position: 'absolute', left: "50%", top:"15%"}} src="../lib/app/static/xiaohuangji2.jpg"/>
            </Frame3>
    </Wrapper>,

    <Wrapper count={6} key={4} header={"研究意义与背景"}>
        <ul className="list">
            <Frame3 order={1} animate={{ animation: "transition.bounceUpIn", duration: 500 }} >
                <Lists header className="ul" lists={["深度学习的兴起"]}>
                </Lists>
            </Frame3>
            <Frame3 order={[2, 3]}
                animate={{ animation: "transition.perspectiveLeftIn", duration: 500 }}
                animateOut={{ animation: "transition.perspectiveRightOut", duration: 400, }}
                >
                <img src="../lib/app/static/hinton.jpg"></img>
            </Frame3>
            <Frame3 order={3} animate={{ animation: "transition.bounceUpIn", duration: 500 }} >
                <Lists header className="ul" lists={["序列建模"]}>
                </Lists>
                <Frame3 order={[4, 5]}
                    animate={{ animation: "transition.bounceUpIn", duration: 200, stagger: 100 }}
                    animateOut={{ animation: "transition.bounceUpOut", duration: 200 }}
                    >
                    <li>语音识别</li>
                    <li>语音合成</li>
                    <li>视频跟踪</li>
                    <li>视频理解</li>
                </Frame3>
            </Frame3>
            <Frame3 order={5}
                animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 500 }} >
                <Lists header className="ul" lists={["研究现状"]}>
                </Lists>
                <Frame3 order={6}
                    animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}
                    >
                    <li>普通递归神经网络RNN</li>
                    <li>回声状态网络</li>
                    <li>递归时序玻尔兹曼机</li>
                    <li>长时短时记忆网络</li>
                    <li>Hessian Free优化</li>
                </Frame3>
            </Frame3>

        </ul>
    </Wrapper>
    ,
     <Wrapper key={5} header={"研究内容和方法"}>
        <ul className="list">
            <Lists header lists={["通过再现之前的研究结果，找出之前模型的局限所在",
            "对结果进行分析，得到提升模型训练速度和能力的空间",
            "从模型本身的结构，以及训练算法的并行度上进行改进"]}>
            </Lists>
        </ul>
    </Wrapper>,
    <Wrapper key={6} header={"长时短时记忆模型"}>
        <ul className="list">
            <Lists header lists={["简介", "结构", "训练方法", "优化"]}>
            </Lists>
        </ul>
    </Wrapper>
    ,
    <Wrapper key={7} header={"长时短时记忆模型"}>
        <ul className="list">
            <Lists header lists={["简介"]}>
            </Lists>
            <li>能够从输入流中获取和<strong>储存</strong>信息，并根据这些信息解决类似分类，处理，预测等复杂的任务</li>
            <li>性能上优于其他序列学习方法，在语音识别，手写体识别等领域的准确率长期保持领先</li>
        </ul>
    </Wrapper>
    ,
    <Wrapper key={8} header={"长时短时记忆模型"}>
        <ul className="list">
            <Lists header lists={["结构"]}>
            </Lists>
        </ul>
        <img src='../lib/app/static/lstm.png'></img>
    </Wrapper>
    ,
    <Wrapper key={9} count={4} header={"长时短时记忆模型"}>
        <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={1} >
            <img src='../lib/app/static/bptt.png' style={{ position: 'absolute', left: '50%', top: '30%', width: '50%' }}></img>
        </Frame3>
        <ul className="list">
            <Lists header lists={["优化1 -- 训练方法"]}>
            </Lists>
            <li>完全梯度BPTT</li>
            <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={2} >
                <li>RMS-props</li>
            </Frame3>
            <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={3} >
                <li>截断梯度BPTT</li>
            </Frame3>
            <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={4} >
                <li><strong style={{ color: 'red' }}>批训练截断梯度BPTT</strong></li>
            </Frame3>
        </ul>
    </Wrapper>
    ,
    <Wrapper key={10} header={"优化1 -- 训练方法 实验"}>
        <ul className="list">
            <li>批处理与逐一处理(乘法任务)</li>
            <img src="../lib/app/static/batchTime.png"></img>
        </ul>
    </Wrapper>,
    <Wrapper key={11} header={"优化1 -- 训练方法 实验"}>
        <ul className="list">
            <li>使用不同批大小的批处理训练学习收敛速度(乘法任务)</li>
            <img src="../lib/app/static/batch.png"></img>
        </ul>
    </Wrapper>,


    <Wrapper key={12} header={"优化2 -- 优化算法"}>
        <ul className="list">
            <Lists header lists={["一阶算法"]}>
                <li>最速下降算法</li>
                <li>momentum 冲量算法</li>
            </Lists>
        </ul>
    </Wrapper>,


    <Wrapper key={13} header={"优化2 -- 优化算法"}>
        <ul className="list">
            <Lists header lists={["二阶算法"]}>
                <li>LBFGS 拟牛顿算法</li>
                <li>CG 共轭梯度算法 </li>
            </Lists>
        </ul>
    </Wrapper>,

    <Wrapper key={14} header={"优化2 -- 优化算法 实验"}>
        <img src="../lib/app/static/lbfgs.png"></img>
    </Wrapper>,

    <Wrapper key={15} count={3} header={"优化3 -- 门函数激励函数"}>
        <Frame3 animate={{ animation: "transition.bounceUpIn" }} animateOut={{ animation: "transition.bounceUpOut" }} order={[1, 2]} >
            <img src="../lib/app/static/Sigmoid.png"></img>
        </Frame3>
        <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={3} >
            <ul className="list">

                <li>拥有不同紧闭程度的逻辑函数相应的梯度</li>
                <img src="../lib/app/static/gate.png"></img>
            </ul>
        </Frame3>
    </Wrapper>,

    <Wrapper key={16} header={"优化3 -- 门函数激励函数 实验"}>
        <ul className="list">
            <li>使用不同逻辑函数的乘法任务的实验。可以看到大的紧闭值的收敛效果更好</li>
            <img src="../lib/app/static/gateExp.png"></img>
        </ul>
    </Wrapper>,

    <Wrapper key={17} header={"优化4 -- 并行计算"}>
        <ul className="list">
            <li>GPU加速</li>
            <li>多机并行加速 MapReduce</li>
        </ul>
    </Wrapper>,

    <Wrapper key={18} header={"优化4 -- 并行计算 GPU实验"}>
        <img src='../lib/app/static/gpu.png'></img>
    </Wrapper>,
    <Wrapper key={19} header={"优化4 -- 并行计算 MapReduce实验"}>
        <img src='../lib/app/static/multicore.png'></img>
    </Wrapper>,

    <Wrapper key={20} header={"LSTM-RTRBM"}>

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
    <Frame3 count={1} key={8} order={1} animate={{ animation: "transition.bounceUpIn", duration: 500 }} >
        <div>3<div>d</div></div>
    </Frame3>,
    <Wrapper key={'end'} header={"研究成果"}>
        <ul className="list">
            <Lists style={{ fontSize: '25px', listStyle: 'none' }} lists={['[1]	Qi Lyu and Jun Zhu. Revisit Long Short-Term Memory: An Optimization Perspective. In Conference on Neural Information Processing Systems (NIPS) Workshop on Deep Learning and Representation Learning, Montreal, Canada, 2014',
                '[2]	Qi Lyu, Zhiyong Wu, Jun Zhu, Helen Meng. Modelling High-Dimensional Sequences with LSTM-RTRBM: Application to Polyphonic Music Generation. In Proceedings of the Twenty-Fourth International Joint Conference on Artificial Intelligence (IJCAI 2015), 4138 (EI收录, 检索号: 20155101693661)',
                '[3]	Qi Lyu, Zhiyong Wu, Jun Zhu. Polyphonic Music Modelling with LSTM-RTRBM. In Proc. of ACM Multimedia, Brisbane, Australia, 2015. (ACM MM 2015) (EI检索，检索号：20161602252616)'
            ]}>
            </Lists>
        </ul>
    </Wrapper>
    ,
    <Wrapper key={'end'} header={" "}>
        <div style={{ color: 'blue', margin: '200px auto', textAlign: 'center', lineHeight: '100px' }}>
            <div style={{ fontSize: '100px' }}>Thank You!</div>
            <div style={{ fontSize: '100px' }}>{decodeURI('Q&A')}</div>
        </div>
    </Wrapper>
    ,
]

ReactDOM.render(<ReactPPT content={divs} cur={6} />, document.querySelector('#content'));
