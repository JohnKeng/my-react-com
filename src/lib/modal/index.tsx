import React, { ReactElement, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Modal from "./modal.com"

const dialog = (content: ReactNode, footer?: Array<ReactElement>, afterClose?: () => void) => {
    const destroy = () => {
        ReactDOM.render(React.cloneElement(component, { visible: false }), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component =(
        <Modal
            visible={true}
            footer={footer}
            onClose={() => {
                destroy()
                afterClose && afterClose()
            }}>
            {content}
        </Modal>)
    const div = document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component, div)
    return destroy
}

// const dialog = (content: ReactNode) => {
//     const com = <Modal visible={true} onClose={() => {
//         ReactDOM.render(React.cloneElement(com, { visible: false }), div)
//         ReactDOM.unmountComponentAtNode(div)
//         div.remove()
//     }}> {content} </Modal>
//     const div = document.createElement('div')
//     document.body.append(div)
//     ReactDOM.render(com, div)
// }

const info = (content: string) => {
    dialog(content)
}
const alert = (content: string) => {
    const footer = <button onClick={() => destroy()}>OK</button>
    const destroy = dialog(content, [footer])
}
const confirm = (content: string, sure?: () => void, not?: () => void) => {
    const onSure = () => {
        destroy()
        sure && sure()
    }
    const onNot = () => {
        destroy()
        not && not()
    }
    const footer = [
        <button onClick={onNot}>not</button>,
        <button onClick={onSure}>sure</button>
    ]
    const destroy = dialog(content, footer, not)
}

export { dialog, info, alert, confirm }
export default Modal