import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import {classnames, scopedclassname} from '../helpers'
import Icon from '../icon/icon.com'


interface Props {
    visible: boolean
    closeBtn?: boolean
    closeOnClickMask?: boolean
    header?: string
    footer?: Array<ReactElement>
    onClose: React.MouseEventHandler
    classname?:string
}
const scn = classnames
const sc = scopedclassname('mol-modal')

const Modal: React.FunctionComponent<Props> = (props) => {

    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e)
    }
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnClickMask) {
            props.onClose(e)
        }
    }
    const renderModal = (
        props.visible &&
        <>
            <div className={scn(sc('mask'),props.classname)} onClick={onClickMask}></div>
            <div className={scn(sc(),props.classname)}>
                {props.closeBtn && <div className={sc('close')} onClick={onClickClose}><Icon shape="guanbi"></Icon></div>}
                {props.header && <header> {props.header} </header>}
                <main className={scn('',props.classname)}>{props.children}</main>
                {props.footer && props.footer.length > 0 &&
                    <footer className={scn('',props.classname)}>
                        {props.footer.map((button, index) =>
                            React.cloneElement(button, { key: index })
                        )}
                    </footer>
                }
            </div>
        </>
    )

    return (
        ReactDOM.createPortal(renderModal, document.body)
    )
}


Modal.defaultProps = {
    closeBtn: true,
    closeOnClickMask: false
}

export default Modal