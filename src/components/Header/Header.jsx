import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login/Login';
import UserMenu from './UserMenu';

const Header = () => {
  const user = useSelector((state) => state.update_user.user);

  return (
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container'>
        <ul className='navbar-nav'>
          <li className='nav-item-active'>
            <p className='nav-link'>Movie-app</p>
          </li>
        </ul>
        {user ? <UserMenu /> : <Login />}
      </div>
    </nav>
  );
}

export default Header;

////--------------V1--------------:)))
// import React from 'react'
// import Login from './Login/Login'
// import UserMenu from './UserMenu'

// export default class Header extends React.Component {
//     render() {
//         const {user} = this.props
//         return (
//             <nav className='navbar navbar-dark bg-primary'>
//                 <div className='container'>
//                     <ul className='navbar-nav'>
//                         <li className='nav-item-active'>
//                             <p className='nav-link'>Movie-app</p>
//                         </li>
//                     </ul>
//                     {user ? (
//                         <UserMenu/>
//                     ):(
//                     <Login/>
//                     )}                   
//                 </div>
//             </nav>
//         )
//     }
// }
