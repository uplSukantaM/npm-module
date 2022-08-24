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

export { outlinedTheme, standardTheme, filledTheme }