import PPT from './PPT';
import * as React from 'react'
import { Frame, Frame2, Frame3, List } from './Frame';
import { Provider } from 'mobx-react';
import {observable, action} from 'mobx'

class Store{
    @observable
    currentCount = 0;
    @observable
    show = false;
    @action
    setCount(num:number){
        this.currentCount = num;
    }
    @action
    setShow(sh:boolean){
        this.show = sh;
    }
}

export default class ReactPPT extends React.Component<any, any> {
    constructor(props:any){
        super(props);
    }
    render() {
        return (
            <Provider Store={new Store()}>
                <PPT {...this.props}>
                    {this.props.children}
                </PPT>
            </Provider>
        );
    }
}
export { ReactPPT, Frame, Frame2, Frame3, List as Lists };