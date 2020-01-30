import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import AppTitleBar from '../components/AppTitleBar';
import ModalContainer from './ModalContainer';
import { openModal, closeModal, openCreateMenu, closeCreateMenu} from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  targetMenu: state.addMain.menuTarget
});

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (event) => {
      dispatch(openCreateMenu(event))
    },
    onMenuClose: () => {
      dispatch(closeCreateMenu())
    },
    onModalOpen: (menu) => {
      dispatch(openModal(menu))
    },
    onModalClose: () => {
      dispatch(closeModal())
    }
  }
};


function App({ targetMenu, onMenuClick,  onMenuClose, onModalOpen, onModalClose}) {
  return (
    <>
      <AppTitleBar />
      { /* login */}
      { /* dashboard */}
  
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={onMenuClick}
      >
        Create
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={targetMenu}
        keepMounted
        open={Boolean(targetMenu)}
        onClose={onMenuClose}
      >
        <MenuItem
          onClick={() => onModalOpen('TODO_MENU')}
        >
          Todo Task
        </MenuItem>
      </Menu>
      <ModalContainer
        handleModalClose={onModalClose}
      >
      </ModalContainer>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
