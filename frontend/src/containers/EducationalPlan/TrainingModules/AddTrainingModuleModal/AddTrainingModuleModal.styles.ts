import {createStyles, Theme} from "@material-ui/core";

export default (theme: Theme) => createStyles({
    list: {
        height: '300px',
        paddingRight: '20px',
        marginTop: '50px',
    },
    selectedItem: {
        display: 'flex',
        alignItems: 'center'
    },
    dialogContent: {
        height: '450px'
    },
    filtersLine: {
        display: 'flex',
        gap: 20,
    },
    searchButton: {
        marginLeft: 'auto',
    },
    input: {
        width: '100%',
    },
    actions: {
        padding: '15px 24px 20px'
    },
    dialog: {
        padding: 20,
    },
});