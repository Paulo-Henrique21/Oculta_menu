import './App.css';
import { CiFilter } from 'react-icons/ci';
import edit from '../src/img/edit.png'
import inbox from '../src/img/envelope.png'
import logout from '../src/img/log-out.png'
import help from '../src/img/question.png'
import user from '../src/img/user.png'
import settings from '../src/img/settings.png'
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(true)

  return (
    <div className="App">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <CiFilter className='img' />
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <h3>The Kiet<br /><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img={user} text={"My profile"} />
            <DropdownItem img={edit} text={"Edit Profile"} />
            <DropdownItem img={inbox} text={"Inbox"} />
            <DropdownItem img={settings} text={"Settings"} />
            <DropdownItem img={help} text={"Helps"} />
            <DropdownItem img={logout} text={"Logout"} />
          </ul>

        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className='dropdownItem'>
      <img src={props.img}></img>
      <a>{props.text}</a>
    </li>
  );
}

export default App;
