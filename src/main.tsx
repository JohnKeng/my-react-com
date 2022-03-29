import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

// import setup css
import './lib/_setup.scss'
// import storybook example
import IconExample from './storybook/icon.example'
import ButtonExample from './storybook/button.example'
import ModalExample from './storybook/modal.example'

// storybook index
const Home: React.FunctionComponent = () => {
  window.history.pushState(null, '', '')
  return (<div className="intro">
    molecular ui 試圖以最容易的方式詮釋高效！
    所謂經典，是在於對返璞歸真的實踐。<br />
    以最友善、降低心智負擔的方式建立組件，所以你可以看到：
    <ol>
      <li>少即是多的 style - 只保留輪廓不添加任何矯飾，讓開發者自行決定樣式</li>
      <li>友善不為了做而做的 api - 非必要的動畫、或者使用性不高的功能通通拿掉 </li>
      <li>最精簡的複用 -  相同的交互，通過 api 的設計展現不同的介面</li>
      <li>完全使用 TypeScript 編寫，有效增強了代碼的健壯性</li>
      <li>只依賴 React、ReactDOM 兩個核心庫以及 PropTypes 進行類型檢查，還有什麼比這點更讓人安心呢</li>
    </ol>
  </div>)
}

function App() {

  let path = window.location.pathname.replace(/\//, '')
  let initPath = path === '/' ? '/' : path
  let [pathname, setUrl] = React.useState(initPath)

  const linkto = (path: string) => {
    setUrl(path)
    window.history.pushState(null, path, "/" + path)
  }

  const renderSwitch = (pathname: string) => {
    switch (pathname) {
      case 'icon':
        return <IconExample />
      case 'button':
        return <ButtonExample />
      case 'modal':
        return <ModalExample />
      default:
        return <Home />
    }
  }

  return (
    <div className='storybook'>
      <header>
        <h1 onClick={() => linkto('')}>molecular ui</h1>
        一套經典的 PC 端 React 組件庫
      </header>
      <div>
        <aside>
          <h3>Components</h3>
          <ul>
            <li onClick={() => linkto('icon')}>Icon</li>
            <li onClick={() => linkto('button')}>Button</li>
            <li onClick={() => linkto('modal')}>Modal</li>
          </ul>
        </aside>
        <main>
          {renderSwitch(pathname)}
        </main>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)