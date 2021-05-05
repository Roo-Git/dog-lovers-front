import React from 'react'
import { LOGOUT } from '../../redux/types/userType';
import { DOGLOGOUT } from '../../redux/types/dogType';
import { REQUESTLOGOUT } from '../../redux/types/requestType';
import { Button, Menu, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';


function MenuMaterialUi(props) {


  const [anchorel, setAnchorel] = React.useState(null)

  const handleClose = () => {
    setAnchorel(null)
  }

  const openMenu = (ev) => {
    setAnchorel(ev.currentTarget)
  }

  let history = useHistory();

  const logOut = () => {
    props.dispatch({ type: LOGOUT, payload : {}});
    props.dispatch({ type: DOGLOGOUT, payload : {}});
    props.dispatch({ type: REQUESTLOGOUT, payload : {}});
    setTimeout(()=> {
        history.push('/');
    });
  }

  return (
    <div className="menuMaterialUiComponent">

    <Button
      variant="contained"
      onClick={openMenu}
    >Menu
    </Button>
    <Menu

      id="menuMateriaulUiComponent"
      anchorEl={anchorel}
      keepMounted
      open={Boolean(anchorel)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Close</MenuItem>
      <MenuItem component={Link} to="/owner" >Owners</MenuItem>
      <MenuItem component={Link} to="/sitter">Sitters</MenuItem>
      <MenuItem component={Link} to="/profile">Profile</MenuItem>
      <MenuItem onClick={logOut}>Logout</MenuItem>

    </Menu>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      user : state.userReducer.user,
      dog: state.dogReducer.dog,
      request: state.requestReducer.request,
  }
}

export default connect(mapStateToProps)(MenuMaterialUi);
