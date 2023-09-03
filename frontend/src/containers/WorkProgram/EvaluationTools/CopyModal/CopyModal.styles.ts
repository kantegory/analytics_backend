import {Theme} from "@mui/material";
import createStyles from "@mui/styles/createStyles";

export default (theme: Theme) => createStyles({
    nameInput: {
        marginTop: '24px !important'
    },
    actions: {
        padding: '15px 24px 20px'
    },
    radioGroup: {
        display: 'flex',
        //@ts-ignore
        flexDirection: 'row !important',
        marginBottom: '30px',
        width: '550px'
    },
    input: {
        marginBottom: '30px important',
        width: '100%'
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    disabledButton: {
        color: '#fff !important'
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    numberInput: {
        marginRight: '20px !important'
    },
    marginBottom30: {
        marginBottom: '30px !important',
    },
    weekTitle: {
        marginBottom: '20px !important'
    },
    dialogContent: {},
    disciplineSelector: {
        '& .MuiInputLabel-shrink': {
            transform: 'translate(13px, -6.5px) scale(0.75) !important',
        },
        '& .MuiOutlinedInput-notchedOutline legend': {
            width: '135px !important'
        },
        marginBottom: '30px !important',
        marginTop: '30px !important',
    },
    sectionSelector: {
        '& .MuiInputLabel-shrink': {
            transform: 'translate(13px, -6.5px) scale(0.75) !important',
        },
        '& .MuiOutlinedInput-notchedOutline legend': {
            width: '180px !important'
        },
        marginBottom: '30px !important',
    },
    selector: {
        width: '500px'
    },
    label: {
        fontSize: '14px',
        marginBottom: 10,
    },
    tooltipIcon: {
        position: 'relative',
        top: '5px',
        left: '5px'
    },
});