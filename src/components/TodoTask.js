import React from 'react';
import TextField from "@material-ui/core/TextField";
import {
    MuiPickersUtilsProvider,
    DatePicker

} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import { connect } from 'react-redux';

import { startDateChange, endDateChange } from '../actions';

/*const mapStateToProps = (state) => ({
    startDate: state.taskTodo.startDate
})*/

var mapStateToProps = function mapStateToProps(state) {
    console.log('state --- mp - ', state);
    return {
      startDate: state.taskTodo.startDate,
      endDate: state.taskTodo.endDate
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
        onStartDateChange: (newDate) => {
            dispatch(startDateChange(newDate));
        },
        onEndDateChange: (newEndDate) => {
            console.log('newEndDate -- ', newEndDate);
            dispatch(endDateChange(newEndDate));
        }
    }
}

const TodoTask = ({startDate, endDate, onStartDateChange, onEndDateChange}) => {    
    console.log('end date --', endDate);
    startDate == undefined && (startDate = new Date())
    endDate == undefined && (endDate = new Date())
    return (
        <form onSubmit={() => { }}>
            <TextField
                id="name"
                name="name"
                label="Add a task to do..."
                fullWidth
                variant="outlined"
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    variant="outlined"
                    format="MM/dd/yyyy"
                    label="Start Date"
                    value={startDate}
                    onChange={onStartDateChange}
                    disablePast
                />
                <DatePicker
                    variant="outlined"
                    format="MM/dd/yyyy"
                    label="End Date"
                    value={endDate}
                    onChange={onEndDateChange}
                    disablePast
                />
            </MuiPickersUtilsProvider>
        </form>
    )
}

/*const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));*/

export default connect(mapStateToProps, mapDispatchToProps)(TodoTask);