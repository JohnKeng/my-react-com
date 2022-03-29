import React from 'react'
import Icon from '../lib/icon/icon.com'

function IconExample() {
    return (<>
        <p>Icon:</p>
        <Icon shape="1"
            onClick={(e) => console.log((e.target as SVGUseElement).href)}
            onMouseEnter={() => console.log('enter')}
            onMouseLeave={() => console.log('leave')}
            onTouchStart={() => console.log('手機按下')}
        />
        <Icon shape="2" className='usr-color-fill-blue' />
        <Icon shape="3" />
        <Icon shape="4" />
        <Icon shape="5" />
        <Icon shape="guize" />
        <Icon shape="xianhao" className='usr-color-fill-gold'/>
        <Icon shape="lianjieliu" />
        <Icon shape="icon_yulan" />
    </>)
}

export default IconExample