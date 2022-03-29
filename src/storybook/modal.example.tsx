import React, { ReactElement } from 'react'
import Icon from '../lib/icon/icon.com'
import Modal, { dialog, info, alert, confirm } from '../lib/modal'

const styles: { [key: string]: React.CSSProperties } = {
    bottonLeft: {
        marginLeft: 5,
    },
}

const MyModal: React.FunctionComponent = () => {

    const [v, setVisible] = React.useState(false)
    const toggleModal: React.MouseEventHandler = () => {
        setVisible(!v);
    }
    // 自定義 Modal Footer  
    // footer?: Array<ReactElement>
    const b1: ReactElement = <span onClick={toggleModal}>cancel</span>
    const b2: ReactElement = <span onClick={toggleModal}>ok</span>

    return (<>
        <button onClick={toggleModal}>Modal</button>
        <Modal visible={v}
            onClose={() => { setVisible(false) }}
            closeBtn={true} closeOnClickMask={true}
            header={'Header'}
            footer={[b1, b2]}>
            <div>hi i am child</div>
        </Modal>
    </>)
}

const MyInfo: React.FunctionComponent = () => {

    const [v, setVisible] = React.useState(false)
    const toggleModal: React.MouseEventHandler = () => {
        setVisible(!v)
    }

    return (<>
        <button onClick={() => setVisible(!v)}>Info Card</button>
        <Modal visible={!v} onClose={() => { }} closeBtn={false}>
            <Icon shape="icon_yulan" /><span>一則好消息</span>
            <p>哈 哈 哈 ! <span>這是一則好消息</span></p>
            <button onClick={toggleModal}>Close</button>
        </Modal>
    </>)
}



function countDownModal() {
    let secondsToGo = 5

    const footer = <button onClick={() => close()}>OK</button>
    const destroy = dialog('５秒後自動關閉', [footer])

    const timer = setInterval(() => {
        secondsToGo -= 1
        console.log(secondsToGo)
    }, 1000)

    setTimeout(() => {
        clearInterval(timer)
        console.log("停止")
        destroy()
    }, secondsToGo * 1000)
}

const ModalExample: React.FunctionComponent = () => {
    return (<>
        <p>Modal:</p>
        <MyModal /> <MyInfo />
        <button style={styles.bottonLeft} onClick={countDownModal}>Open modal to close in 5s</button>
        <button style={styles.bottonLeft} onClick={() => info('提示訊息視窗，只能關閉')}>Info</button>
        <button style={styles.bottonLeft} onClick={() => alert('注意')}>Alert</button>
        <button style={styles.bottonLeft} onClick={() => confirm('1', () => {
            console.log('You click sure')
        }, () => {
            console.log('You click not')
        })}>Confirm
        </button>
    </>)
}

export default ModalExample