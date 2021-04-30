import React from 'react';
class Header extends React.Component {
    render() {
        return ( < div >
            <img src = { this.props.logo }/> 
            <h1 > { this.props.title } </h1> 
            </div >
        );
    }
}
export default Header;