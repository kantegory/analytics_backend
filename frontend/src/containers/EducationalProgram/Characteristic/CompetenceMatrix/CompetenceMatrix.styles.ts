import {createStyles, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => createStyles({
    tableHeading: {
        background: theme.palette.primary.main,
        color: 'white',
    },
    tableHeight: {
        height: '1px', // dirty hack for td > div 100% height
    },
    table: {
        '& td': {
            border: '1px solid rgba(224, 224, 224, 1)',
        },
    },
    rowWithPadding: {
        paddingLeft: '50px !important',
    },
    noPaddingCells: {
        padding: '0 !important',
    },
    competenceHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    competenceTableHeading: {
        border: '1px solid rgba(224, 224, 224, 1)',
    },
    competenceHeaderCell: {
        flexGrow: 1,
    },
    competenceCellHolder: {
        display: 'flex',
        height: '100%',
        '& > div:not(:last-of-type)': {
            position: 'relative',
            '&::after': {
                content: "''",
                display: 'block',
                position: 'absolute',
                width: '1px',
                top: 0,
                bottom: 0,
                right: 0,
                background: 'rgba(224, 224, 224, 1)'
            },
        }
    },
    sectionRow: {
        border: '1px solid rgba(224, 224, 224, 1)',
        '& td': {
            borderRight: '0 !important',
            borderLeft: '0 !important'
        },
    },
    competenceCell: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    intersection: {
        textAlign: 'center',
    },
    noIntersection: {
        color: 'rgba(0,0,0,.25)',
        textAlign: 'center',
    },
}));
