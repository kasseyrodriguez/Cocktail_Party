import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const handleLogout = () => {
  let link = document.createElement('a');
  link.setAttribute('href', '/users/sign_out');
  link.setAttribute('rel', 'nofollow');
  link.setAttribute('data-method', 'delete');
  document.body.appendChild(link);
  link.click();
}

// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: Colors.darkBlack,
//     primaryColor: Colors.white,
//     primary2Color: Colors.indigo700,
//     accent1Color: Colors.redA200,
//     pickerHeaderColor: Colors.darkBlack,
//     alternateTextColor: Colors.redA200
//    }
//  })


const NavigationBar = (props) => {
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit"  style={{flexGrow: 1}}>
          <img src="https://i.imgur.com/N1Iwx9P.png" alt="logo" width="300"/>
        </Typography>
        <Typography
         variant="subheading"
         color="inherit"
       >
        <p>Hi!</p>
       </Typography>
       <Button
          color="inherit"
          onClick={ handleLogout }
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
