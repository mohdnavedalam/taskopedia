import logo from '../../images/logo192.png';
import '../../CSS/style.css';
function MainHeader() {
    return (
        <div className='pt-3 py-1 pl-2 banner-background banner-align'>
            <img src={logo} alt='react-logo' className='logo-size' ></img>
            <h1 className="heading1">REACT COURSE - TASKOPEDIA</h1>
        </div>
    );
}

const subHeaderStyle = {
    color: "blueviolet",
    backgroundColor: "lightgray",
};
function SubHeader() {
    return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}
export default function Header() {
    return (
        <div>
            <MainHeader></MainHeader>
            <SubHeader></SubHeader>
        </div>
    );
}

// export default Header;