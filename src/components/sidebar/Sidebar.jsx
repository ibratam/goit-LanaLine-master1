import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SmsIcon from '@mui/icons-material/Sms';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PeopleIcon from '@mui/icons-material/People';
import Typography from '@mui/material/Typography';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem('user'));
  
  return (
    <div className="sidebar">
      <div className="top">
        <Grid2><img src= {process.env.PUBLIC_URL+"/images/lana.jpg"} width={"200px"} height={'auto'}/></Grid2>
      

          
              

        
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/sms" style={{ textDecoration: "none" }}>
            <li>
              <SmsIcon className="icon" />
              <span>SMS</span>
            </li>
          </Link>
          <Link to="/send" style={{ textDecoration: "none" }}>
            <li>
              <SendIcon className="icon" />
              <span>Send SMS</span>
            </li>
          </Link>

          {user.email === "admin@lanaline.ps" && <Link to="/add" style={{ textDecoration: "none" }}>
            <li>
              <p></p>
              <AddBoxIcon className="icon" />
              <span>Add SMS </span>
            </li>
          </Link>}

          <p className="title">Settings</p>
          {user.email === "admin@lanaline.ps" && <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <p></p>
              <PeopleIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>}
          <li onClick={() => dispatch({ type: "LOGOUT" })}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
