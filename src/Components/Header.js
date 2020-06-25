import React from 'react';

export default class Header extends React.Component{

    render() {
        return(
            <>
            <div className='container'>
                <header className='header flex'>
                    <h1 className='logo'><a href='/'>conduit</a></h1>
                    <nav>
                        <ul className='header-nav flex'>
                            <li className='nav-item'><a href='/'>Home</a></li>
                            <li className='nav-item'><a href='/login'>Sign In</a></li>
                            <li className='nav-item'><a href='/register'>Sign Up</a></li>
                        </ul>

                    </nav>

                </header>
       
            </div>
            
            </>
            
        )
    }
}