import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

// we are not doing destructing below and using props instead so we can see the old school way. 
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      {
        props.user ?
          <div className="history-and-logout">
            <div></div>
            <span>Welcome {props.user.name}</span>
            <div className="history-logout-icon">
              <Link to="/services"><i class="fas fa-history"></i>Services</Link>
              <Link onClick={handleLogOut} to=""><i class="fas fa-sign-out-alt"></i></Link>
            </div>
          </div>
          :
          <div className="signup-login">
            <Link to="/signup"><i class="fas fa-user-plus"></i></Link>
            &nbsp;&nbsp;   &nbsp;&nbsp; <Link to="/login"><i class="fas fa-sign-in-alt"></i></Link>
            &nbsp;&nbsp;&nbsp;&nbsp;<Link><i class="fas fa-shopping-cart"></i></Link>
          </div>
      }
    </nav>
  );
}