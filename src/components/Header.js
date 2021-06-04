
const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker</h1>
            <h2> Hello {props.name}, Welcome</h2>
        </header>
    )
}

Header.defaultProps = {
    name: 'Human',
}


export default Header

