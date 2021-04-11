import React from 'react'


const AppText = (props) =>{
    const {
        children,
        small,
        medium,
        large,
        bold,
        italic,
        underline,
        white
    } = props
    return(
        <div>
            <p style={
                small && {fontSize:14},
                medium && {fontSize:18},
                large && {fontSize:22},
                white && {color:'white'},
                bold && {fontWeight:'bold'},
                italic && {fontStyle:'italics'},
                underline && {fontStyle:'bold'}
                // {fontSize:14}
        }>
                {children}
            </p>
        </div>
    )
}
export default AppText
