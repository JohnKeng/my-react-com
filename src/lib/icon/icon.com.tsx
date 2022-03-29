import React from 'react'
import classnames from '../helpers/classnames'
import './style.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
    shape: string
}
const Icon: React.FunctionComponent<IconProps> = (
    { className, shape, ...leftoverProps}
) => {
    return (
        <svg className={classnames('mol-icon', className)} {...leftoverProps}>
            <use xlinkHref={`#icon-${shape}`} />
        </svg>
    )
}

export default Icon