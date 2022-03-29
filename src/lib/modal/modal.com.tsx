import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import scopedclassname from '../helpers/scopedclassname'
import Icon from '../icon/icon.com'


interface Props {
    visible: boolean
    closeBtn?: boolean
    closeOnClickMask?: boolean
    header?: string
    footer?: Array<ReactElement>
    onClose: React.MouseEventHandler
}

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
            <div className={sc('mask')} onClick={onClickMask}></div>
            <div className={sc()}>
                {props.closeBtn && <div className={sc('close')} onClick={onClickClose}><Icon shape="guanbi"></Icon></div>}
                {props.header && <header> {props.header} </header>}
                <main>{props.children}</main>
                {props.footer && props.footer.length > 0 &&
                    <footer>
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
    closeBtn: true
}

export default Modal