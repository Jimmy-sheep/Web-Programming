import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(0),
        width: 200
    },
    textField2: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(1),
        width: 50
    }
}));
function CalendarApp() {
    const [SetDate,defaultdate] = useState("民國  91年/01月/01號")
    return (
        <form className={useStyles().container} noValidate>
            <TextField value={SetDate}
                id="basic"
                label="阿公店開店日選擇"
                className={useStyles().textField}
                InputLabelProps={{
                    shrink: true
                }}
            />
            <TextField 
                id="date"
                label=" "
                type="date"
                className={useStyles().textField2}
                onChange={event => {
                    defaultdate(Date(event.target.value))
                }}
                InputLabelProps={{
					shrink: true
                }}
            />
        </form>
    );
}
function Date(date) {
    const [year, month ,day]=date.split('-')
        return(`民國 ${year-1911}年/${month}月/${day}號`);
}
export default CalendarApp