import {WithStyles} from '@mui/styles';
import {EvaluationToolType, WorkProgramActions} from '../../types';

import styles from "./CopyModal.styles";

export interface CopyModalProps extends WithStyles<typeof styles> {
    actions: WorkProgramActions;
    isOpen: boolean;
    handleClose: Function;
    evaluationTool: EvaluationToolType;
    sections: Array<{label: string, value: string}>
}