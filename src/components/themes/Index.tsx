const outlinedTheme = {
    minHeight: '50px',
    minWidth: '200px',
    outline: 'none'
}

const standardTheme = {
    minHeight: '50px',
    minWidth: '200px',
    boxSizing: 'border-box',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: "1px solid #000",
    outline: 'none',
    background: 'transparent',
    WebkitTransition: '0.5s',
    transition: '0.5s'
}

const filledTheme = {
    minHeight: '50px',
    minWidth: '200px',
    boxSizing: 'border-box',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: "1px solid #000",
    outline: 'none',
    background: '#d7d7d74f',
    WebkitTransition: '0.5s',
    transition: '0.5s',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px'
}

const BtnOutlined = {
    border: '1px solid black',
    color: ' black',
    padding: '10px 10px 10px 10px',
    textalign: 'center',
    cursor: 'pointer'
}
const BtnFilled = {
    border: 'none',
    background: '#4CAF50',
    color: ' white',
    padding: '10px 10px 10px 10px',
    textalign: 'center',
    cursor: 'pointer'
}
const BtnStandard = {
    border: 'none',
    background: 'none',
    cursor: 'pointer'
}

export { outlinedTheme, standardTheme, filledTheme, BtnOutlined, BtnFilled, BtnStandard }