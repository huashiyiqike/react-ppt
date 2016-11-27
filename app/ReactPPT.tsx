import PPT from './PPT';
import * as React from 'react'
import { Frame, Frame2, Frame3, List } from './Frame';
import { Provider } from 'mobx-react'

export default class ReactPPT extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <Provider frame={{count:0}}>
                <PPT {...this.props}>
                    {this.props.children}
                </PPT>
            </Provider>
        );
    }
}
export { ReactPPT, Frame, Frame2, Frame3, List as Lists };