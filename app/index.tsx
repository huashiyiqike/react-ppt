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

    <div key={1} className="wrapper">
        <div className="title">
            基于深度学习的时间序列建模</div>
        <div className="body">
            清华大学工程硕士毕业论文答辩<br />
            <h2>吕祺</h2><br />
            <br />
            指导老师：吴志勇 副研究员<br/>
            清华大学-香港中文大学媒体科学技术与系统联合研究中心<br />
            清华大学信息科学与技术国家实验室<br />
            2016年12月<br />
        </div>
    </div>
    ,

    <Wrapper key={2} header={"提纲"}>
        <ul className="list">
            <Lists header lists={["研究意义", "研究现状", "研究内容和方法", "主要研究内容"]} >
                <Lists lists={["长时短时记忆模型优化",
                    "LSTM-RTRBM模型"]} />
            </Lists>
            <Lists header lists={["研究成果"]} />
        </ul>
    </Wrapper>,

    <Wrapper count={3} key={3} header={"研究意义"}>
        <ul className="list">
            <li>深度神经网络的发明，单一时间点的建模能力得到突飞猛进的进步</li>
            <Frame3 order={[1, 2]}
                animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
                animateOut={{ animation: "transition.perspectiveRightOut", duration: 100, stagger: 100 }}
                >
                <img src="../lib/app/static/hinton.jpg" style={{ width: '40%' }}></img>
                <img src="../lib/app/static/DeepNetwork.png" style={{ width: '40%' }} ></img>
            </Frame3>
            <Frame3 order={2} animate={{ animation: "transition.slideUpBigIn", duration: 500 }}>
                <li>单句语音识别，视频捕捉等方面的效果也依此得到进步</li>
            </Frame3>
            <Frame3 order={3} animate={{ animation: "transition.slideUpBigIn", duration: 500 }}>
                <li>然而在序列模型上，缺乏相应的提升，导致语音识别没有上下文理解能力，
                自然语言处理也没有起色</li>
            </Frame3>
        </ul >
    </Wrapper >,

    <Wrapper count={1} key={3} header={" "}>
        <Frame3 order={0} animate={{ animation: "transition.bounceUpIn", duration: 500 }}>
            <img style={{ position: 'absolute', left: "0%", top: "1%", height: '90%' }} src="../lib/app/static/xiaobing.jpg" />
        </Frame3>
        <Frame3 order={1} animate={{ animation: "transition.bounceUpIn", duration: 500 }}>
            <img style={{ position: 'absolute', left: "50%", top: "15%", height: '80%' }} src="../lib/app/static/xiaohuangji2.jpg" />
        </Frame3>
    </Wrapper>,

    <Wrapper count={4} key={4} header={"研究意义"}>
        <ul className="list">
            <Frame3 order={1} animate={{ animation: "transition.bounceUpIn", duration: 500 }} >
                <Lists header className="ul" lists={["深度学习的兴起"]}>
                </Lists>
            </Frame3>
            <Frame3 order={2} animate={{ animation: "transition.bounceUpIn", duration: 500 }} >
                <Lists header className="ul" lists={["序列建模"]}>
                </Lists>
                <Frame3 order={[3, 4]}
                    animate={{ animation: "transition.bounceUpIn", duration: 200, stagger: 100 }}
                    animateOut={{ animation: "transition.bounceUpOut", duration: 200 }}
                    >
                    <li>语音识别</li>
                    <li>语音合成</li>
                    <li>视频跟踪</li>
                    <li>视频理解</li>
                </Frame3>
            </Frame3>
        </ul>
    </Wrapper>
    ,
    <Wrapper key={5} header={"研究现状"}>
        <ul className="list">
            <Frame3 order={0}
                animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}
                >
                <li>隐马尔科夫链</li>
                <li>普通递归神经网络RNN</li>
                <li>回声状态网络</li>
                <li>递归时序玻尔兹曼机</li>
                <li>长时短时记忆网络</li>
                <li>Hessian Free优化</li>
            </Frame3>
        </ul>
    </Wrapper>,
    <Wrapper count={2} key={6} header={"研究现状"}>
        <Frame3 order={[1, 2]} >
            <img style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', background: "white", zIndex: 100 }}
                src="../lib/app/static/hmm.jpg" />
        </Frame3>
        <ul className="list">
            <Frame3 order={0}
                animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}
                >
                <Lists header className="ul" lists={["隐马尔科夫链"]}>
                </Lists>
                <Frame3 order={2}
                    animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}
                    >
                    <li>理论完备，工具链完善</li>
                    <li style={{color:'red'}}>离散状态 GMM</li>
                    <li style={{color:'red'}}>状态数量有限 转移矩阵</li>
                    <li  style={{color:'red'}}>时间序列长度依赖有限</li>
                </Frame3>
            </Frame3>
        </ul>
    </Wrapper>,
    <Wrapper count={1} key={7} header={"研究现状"}>
        <ul className="list">
            <Frame3 order={[0, 1]} animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}
                animateOut={{ animation: "transition.bounceUpOut", duration: 500, stagger: 200 }}  >
                <Lists header lists={["普通递归神经网络RNN"]}>
                </Lists>
                <li>能充分利用时序信息，具有储存记忆能力</li>
                <li style={{color:'red'}}>难以训练，反向传播随时间展开导致梯度爆炸</li>
                <li  style={{color:'red'}}>模型过于简单，建模能力有限</li>
                <li style={{color:'red'}}>Hessian Free优化 能一定程度缓解问题，但不能解决模型本身的缺陷</li>
            </Frame3>
            <Frame3 order={1} animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}  >
                <Lists header lists={["回声状态网络ESN"]}>
                </Lists>
                <li>能避免梯度爆炸问题</li>
                <li  style={{color:'red'}}>网络连接权重预设，如何设置没有定论</li>
                <li  style={{color:'red'}}>泛化能力弱</li>
            </Frame3>
        </ul>
    </Wrapper>,

    <Wrapper count={1} key={8} header={"研究现状"}>
        <ul className="list">
            <Frame3 order={0} animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}  >
                <Lists header lists={["递归时序玻尔兹曼机"]}>
                </Lists>
                <li>利用玻尔兹曼机的建模能力，单一时间步建模能力强</li>
                <li>利用递归链接，具有储存记忆能力</li>
                <li  style={{color:'red'}}>长时记忆能力不足</li>
                <li  style={{color:'red'}}>仍然存在梯度爆炸问题，难以训练</li>
            </Frame3>
        </ul>
    </Wrapper>,

    <Wrapper count={1} key={9} header={"研究现状"}>
        <ul className="list">
            <Frame3 order={0} animate={{ animation: "transition.bounceUpIn", duration: 500, stagger: 200 }}  >
                <Lists header lists={["长时短时记忆模型"]}>
                </Lists>
                <li>具有长时记忆能力，能处理长序列的时间依赖关系</li>
                <li>没有梯度爆炸问题</li>
                <li  style={{color:'red'}}>单一时间步建模能力弱</li>
            </Frame3>
        </ul>
    </Wrapper>,

    <Wrapper key={10} header={"研究内容和方法"}>
        <ul className="list">
            <Lists header lists={["通过再现之前的研究结果，找出之前模型的局限所在",
                "对结果进行分析，得到提升模型训练速度和能力的空间",
                "从模型本身的结构，以及训练算法的并行度上进行改进"]}>
            </Lists>
        </ul>
    </Wrapper>,
    <Wrapper key={11} header={"长时短时记忆模型"}>
        <ul className="list">
            <Lists header lists={["简介", "结构", "训练方法", "优化"]}>
            </Lists>
        </ul>
    </Wrapper>
    ,
    <Wrapper key={12} header={"长时短时记忆模型"}>
        <ul className="list">
            <Lists header lists={["简介"]}>
            </Lists>
            <li>能够从输入流中获取和<strong>储存</strong>信息，并根据这些信息解决类似分类，处理，预测等复杂的任务</li>
            <li>性能上优于其他序列学习方法，在语音识别，手写体识别等领域的准确率长期保持领先</li>
        </ul>
    </Wrapper>
    ,
    <Wrapper key={13} header={"长时短时记忆模型"}>
        <ul className="list">
            <Lists header lists={["结构"]}>
            </Lists>
        </ul>
        <img src='../lib/app/static/lstm.png'></img>
    </Wrapper>
    ,
    <Wrapper key={14} count={4} header={"长时短时记忆模型"}>
        <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={1} >
            <img src='../lib/app/static/bptt.png' style={{ position: 'absolute', left: '50%', top: '30%', width: '50%' }}></img>
        </Frame3>
        <ul className="list">
            <Lists header lists={["贡献1 -- 训练方法"]}>
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
    <Wrapper key={15} header={"贡献1 -- 训练方法 实验"}>
        <ul className="list">
            <li>批处理与逐一处理(乘法任务)</li>
            <img src="../lib/app/static/batchTime.png"></img>
        </ul>
    </Wrapper>,

    <Wrapper key={16} header={"贡献1 -- 训练方法 实验"}>
        <ul className="list">
            <li>使用不同批大小的批处理训练学习收敛速度(乘法任务)</li>
            <img src="../lib/app/static/batch.png"></img>
        </ul>
    </Wrapper>,


    <Wrapper key={17} header={"贡献2 -- 优化算法"}>
        <ul className="list">
            <Lists header lists={["一阶算法"]}>
                <li>最速下降算法</li>
                <li>momentum 冲量算法</li>
            </Lists>
        </ul>
    </Wrapper>,


    <Wrapper key={18} header={"贡献2 -- 优化算法"}>
        <ul className="list">
            <Lists header lists={["二阶算法"]}>
                <li>LBFGS 拟牛顿算法</li>
                <li>CG 共轭梯度算法 </li>
            </Lists>
        </ul>
    </Wrapper>,

    <Wrapper key={19} header={"贡献2 -- 优化算法 实验"}>
        <img src="../lib/app/static/lbfgs.png"></img>
    </Wrapper>,

    <Wrapper key={20} count={3} header={"贡献3 -- 门函数激励函数"}>
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

    <Wrapper key={21} header={"贡献3 -- 门函数激励函数 实验"}>
        <ul className="list">
            <li>使用不同逻辑函数的乘法任务的实验。可以看到大的紧闭值的收敛效果更好</li>
            <img src="../lib/app/static/gateExp.png"></img>
        </ul>
    </Wrapper>,

    <Wrapper key={22} header={"贡献4 -- 并行计算"}>
        <ul className="list">
            <li>GPU加速</li>
            <li>多机并行加速 MapReduce</li>
        </ul>
    </Wrapper>,

    <Wrapper key={23} header={"贡献4 -- 并行计算 GPU实验"}>
        <img src='../lib/app/static/gpu.png'></img>
    </Wrapper>,
    <Wrapper key={24} header={"贡献4 -- 并行计算 MapReduce实验"}>
        <img src='../lib/app/static/multicore.png'></img>
    </Wrapper>,

    <Wrapper count={2} key={25} header={"贡献5 -- 改进模型 LSTM-RTRBM"}>
        <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={0} >
            <Lists header lists={["时间序列数据的分析与研究"]}>
                <li>维度高</li>
                <li>时序相关性</li>
                <li>类人脑认知,记忆单元 <span style={{ paddingLeft: '50px' }}>(圆周率)</span></li>

            </Lists>
        </Frame3>
        <Frame3 animate={{ animation: "transition.bounceUpIn", stagger: 500, duration: 500 }} order={1} >
            <span style={{ margin: '25px' }}>3.141</span>
            <span style={{ margin: '25px' }}>5926</span>
            <span style={{ margin: '25px' }}>5358</span>
            <span style={{ margin: '25px' }}>9793</span>
            <span style={{ margin: '25px' }}>2384</span>
            <span style={{ margin: '25px' }}>6264</span><br />
        </Frame3>
        <Frame3 animate={{ animation: "transition.bounceUpIn", stagger: 500, duration: 500 }} order={2} >
            <span style={{ margin: '25px' }}>3.14159265358979323846264</span>
        </Frame3>
    </Wrapper>
    ,
    <Wrapper count={1} key={26} header={"贡献5 -- 改进模型 LSTM-RTRBM"}>
        <Lists header lists={["受限玻尔兹曼机 RBM"]}>
            <Lists lists={["受物理上能量函数启发，根据能量下降方向计算梯度", "乘积专家系统(Product of Expert)，建模能力;比传统高斯混合模型这种加法平均专家系统(Mixture of Expert)，在高纬度数据建模上更有效"]} />
            <Frame3 order={1} animate={{ animation: "transition.bounceUpIn" }}>
                <img src='../lib/app/static/rbm.png' style={{ height: '40%', position: 'absolute', bottom: '20px', left: '40%' }} />
            </Frame3>
        </Lists>
    </Wrapper>,
    <Wrapper count={3} key={26} header={"贡献5 -- 改进模型 LSTM-RTRBM"}>
        <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={0} >
            <Lists header lists={["时序模型能力的分析与研究"]}>
            </Lists>
        </Frame3>
        <Frame3 animate={{ animation: "transition.bounceUpIn" }} order={1} >
            <div style={{  position: 'relative' }}>
                <Frame3 order={[2, 3]}
                    animate={{ animation: "transition.flipBounceXIn" }}
                    animateOut={{ animation: "transition.flipBounceYOut" }}   >
                    <div style={{
                        position: "absolute", left: "200px", top: '0px', width: '700px',
                        height: '250px', border: 'solid 6px red'
                    }}></div>
                </Frame3>
                <Frame3 order={3}
                    animate={{ animation: "transition.flipBounceXIn" }}   >
                    <div style={{
                        position: "absolute", left: "20px", bottom: '0', width: '900px',
                        height: '170px', border: 'solid 6px red'
                    }}></div>
                </Frame3>
                <img style={{ width: "900px", height: "450px" }} src='../lib/app/static/lstm-rtrbm.png' />
            </div>
        </Frame3>
    </Wrapper>
    ,
    <Wrapper count={1} key={27} header={"实验结果"}>
        <ul className="list">
            <Lists header lists={["小球碰撞", "人类运动捕捉数据实验"]}>
            </Lists>
            <Frame3 order={1}
                animate={{ animation: "transition.perspectiveUpIn" }}   >
                <video src='../lib/app/static/example.MP4' style={{ width: '400px' }} controls autoPlay loop>
                    您的浏览器不支持 video 标签。
            </video>
            </Frame3>
        </ul>
    </Wrapper>,

    <Wrapper count={1} key={28} header={"实验结果"}>
        <img style={{ position: 'absolute', top: '10px', right: 0, height: '90%' }} src='../lib/app/static/lstm-rtrbm-result.png' />
        <ul className="list">
            <Lists header lists={["建模复调音乐"]}>
                <Lists lists={["MUSE", "JSB"]}>
                </Lists>
            </Lists>
            <Frame3 order={1} animate={{ animation: "transition.expandIn" }}>
                <img src='../lib/app/static/result.png' />
            </Frame3>
        </ul>
    </Wrapper>,

    <Wrapper key={'end'} header={"研究成果"}>
        <ul className="list">
            <li>Qi Lyu and Jun Zhu. Revisit Long Short-Term Memory: An Optimization Perspective. In Conference on Neural Information Processing Systems (NIPS) Workshop on Deep Learning and Representation Learning, Montreal, Canada, 2014(<span style={{ color: 'red' }}> NIPS </span>)</li>
            <li>Qi Lyu, Zhiyong Wu, Jun Zhu, Helen Meng. Modelling High-Dimensional Sequences with LSTM-RTRBM: Application to Polyphonic Music Generation. In Proceedings of the Twenty-Fourth International Joint Conference on Artificial Intelligence (IJCAI 2015), 4138 (<span style={{ color: 'red' }}> IJCAI, EI收录</span>)</li>
            <li>Qi Lyu, Zhiyong Wu, Jun Zhu. Polyphonic Music Modelling with LSTM-RTRBM. In Proc. of ACM Multimedia, Brisbane, Australia, 2015. (ACM MM 2015) (<span style={{ color: 'red' }}> ACM MM, EI收录</span>)</li>
        </ul>
    </Wrapper>
    ,
    <Wrapper count={8} key={'end'} header={"开源贡献"}>
        <Frame3 order={[0, 1]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }}>
            <img style={{ position: 'absolute', right: '100px', top: '50px', height: '650px', zIndex: 0 }}
                src='../lib/app/static/github.png' />
        </Frame3>

        <Frame3 order={[1, 2]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }}>
            <img src='../lib/app/static/letter1.png' />
        </Frame3>
        <Frame3 order={[2, 3]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }}>
            <img src='../lib/app/static/letter2.png' />
        </Frame3>
        <Frame3 order={[3, 4]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }} >
            <img src='../lib/app/static/letter9.png' />
        </Frame3>
        <Frame3 order={[4, 5]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }}>
            <img src='../lib/app/static/letter4.png' />
        </Frame3>
        <Frame3 order={[5, 6]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }} >
            <img src='../lib/app/static/letter5.png' />
        </Frame3>
        <Frame3 order={[6, 7]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }}>
            <img src='../lib/app/static/letter6.png' />
        </Frame3>
        <Frame3 order={[7, 8]} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }} >
            <img src='../lib/app/static/letter7.png' />
        </Frame3>
        <Frame3 order={8} animate={{ animation: "transition.perspectiveLeftIn", duration: 500, stagger: 400 }}
            animateOut={{ animation: "transition.perspectiveRightOut", duration: 200, stagger: 100 }}>
            <img src='../lib/app/static/letter8.png' />
        </Frame3>
    </Wrapper >,

    <Wrapper key={-1} header={"培养方案完成情况"} >
        <ul className="list">
            <Lists header lists={["学分"]}>
                 <li>培养计划已修满32学位课学分+2非学位学分</li>
            </Lists>
            <Lists header lists={["专业实践"]}>
                 <li>百度深度学习研究院深度学习算法实习</li>
                 <li>Intel深度学习平台研发</li>
            </Lists>
            <Lists header lists={["所获奖励"]}>
                 <li>院设景芝二等奖学金</li>
                 <li>国家奖学金</li>
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

ReactDOM.render(<ReactPPT content={divs} cur={0} />, document.querySelector('#content'));
