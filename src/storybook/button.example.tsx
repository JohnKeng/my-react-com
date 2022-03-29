import React from 'react'


function Buttonxample() {
    const [isLiked, changeLike] = React.useState(false)
    return (
        <>
            <p>Button:</p>
            <button className="xxx" onClick={() => {
                changeLike(!isLiked)
            }}>{isLiked ? '取消' : '點讚'}  👍</button>
        </>
    )
}

export default Buttonxample