import React, { useState } from "react";
import { connect } from 'react-redux';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import TodoTask from '../components/TodoTask';


const mapStateToProps = (state) => ({
    openModal: state.addMain.openModal,
    clickedMenu: state.addMain.clickedMenu
});

const ModalContainer = ({ openModal, clickedMenu, handleModalClose }) => {
    console.log('Modal Container..');
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    if (!openModal) {
        return null;
    }
    return (
        <>
            <Modal
                open={openModal}
                onClose={handleModalClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    {
                        (() => {
                            if (clickedMenu === 'TODO_MENU') {
                                return <TodoTask />
                            }
                        })()
                    }
                    <Button onClick={handleModalClose} variant="contained" color="primary">Save</Button>
                    <Button onClick={handleModalClose}>Cancel</Button>
                </div>
                {/*
                <div className='modal'>
                    <section className='modal-main'>
                        {children}
                        <button onClick={handleModalClose}>Close</button>
                    </section>
                </div>*/
                }
            </Modal>
        </>
    );
}


function getModalStyle() {
    const top = 50, left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: `80%`,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
}));


export default connect(mapStateToProps, () => ({}))(ModalContainer);