import React, { memo } from 'react'
import { Controller } from 'react-hook-form'
// import Error from '../Error'
// import Label from '../Label'

const Index = (props) => {
    return (
        <div className={props?.className}>
            <Controller
                name={props?.controller?.name}
                control={props?.controller?.control}
                render={props?.controller?.render}
            />

        </div>
    )
}

export default memo(Index)