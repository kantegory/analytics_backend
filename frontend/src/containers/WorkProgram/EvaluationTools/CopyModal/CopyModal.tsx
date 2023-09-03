import React from 'react';
import get from "lodash/get";
import {shallowEqualObjects} from "shallow-equal";
import classNames from 'classnames';

import {CopyModalProps} from './types';

import {Dialog} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@mui/material/Button';
import {withStyles} from '@mui/styles';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// @ts-ignore
import { types } from '../constants'

import {
    EvaluationToolFields,
    fields,
    workProgramSectionFields,
} from '../../enum';

import connect from './CopyModal.connect';
import styles from './CopyModal.styles';

const disciplines = [
    {
        'pk': 19158,
        'label': 'Фронтэнд-разработка (код: 19785)'
    },
    {
        'pk': 19154,
        'label': 'Бекэнд-разработка (код: 19858)'
    },
    {
        'pk': 19757,
        'label': 'Бекэнд-разработка (код: 19783)'
    }
]

class CopyModal extends React.PureComponent<CopyModalProps> {
    editor = null;

    state = {
        isOpen: false,
        showErrors: false,
        evaluationTool: {
            [EvaluationToolFields.ID]: null,
            [EvaluationToolFields.DESCRIPTION]: '',
            [EvaluationToolFields.SECTIONS]: [],
            [EvaluationToolFields.MIN]: undefined,
            [EvaluationToolFields.NAME]: '',
            [EvaluationToolFields.MAX]: undefined,
            [EvaluationToolFields.TYPE]: '',
            [EvaluationToolFields.DEADLINE]: 1,
            [EvaluationToolFields.CHECK_POINT]: false,
            [EvaluationToolFields.SEMESTER]: '1',
            [EvaluationToolFields.CAN_CLONE]: false,
        },
        copyForm: {
            discipline_section: null,
            tool: null
        }
    };

    componentDidUpdate(prevProps: Readonly<CopyModalProps>, prevState: Readonly<{}>, snapshot?: any) {
        const {evaluationTool} = this.props;

        if (!shallowEqualObjects(this.props, prevProps)){
            this.setState({
                isOpen: this.props.isOpen,
                evaluationTool: {
                    [EvaluationToolFields.ID]: get(evaluationTool, EvaluationToolFields.ID, null),
                    [EvaluationToolFields.NAME]: get(evaluationTool, EvaluationToolFields.NAME, ''),
                    [EvaluationToolFields.DESCRIPTION]: get(evaluationTool, EvaluationToolFields.DESCRIPTION, ''),
                    //@ts-ignore
                    [EvaluationToolFields.SECTIONS]: get(evaluationTool, EvaluationToolFields.SECTIONS, []).map(item => item[workProgramSectionFields.ID]),
                    [EvaluationToolFields.MIN]: get(evaluationTool, EvaluationToolFields.MIN, undefined),
                    [EvaluationToolFields.MAX]: get(evaluationTool, EvaluationToolFields.MAX, undefined),
                    [EvaluationToolFields.DEADLINE]: get(evaluationTool, EvaluationToolFields.DEADLINE, 1),
                    [EvaluationToolFields.TYPE]: get(evaluationTool, EvaluationToolFields.TYPE, ''),
                    [EvaluationToolFields.CHECK_POINT]: get(evaluationTool, EvaluationToolFields.CHECK_POINT, false),
                    [EvaluationToolFields.SEMESTER]: get(evaluationTool, EvaluationToolFields.SEMESTER, '1'),
                    [EvaluationToolFields.CAN_CLONE]: get(evaluationTool, EvaluationToolFields.CAN_CLONE, false),
                }
            });
        }
    }

    handleClose = () => {
        this.props.actions.closeDialog(fields.COPY_EVALUATION_TOOL);
        this.setState({ showErrors: false })
    }

    handleSave = () => {
        const {copyForm} = this.state;

        console.log('copy form', copyForm)

        this.props.actions.copyEvaluationTool(copyForm);
    }

    saveField = () => (e: React.ChangeEvent) => {
        const {evaluationTool} = this.state;

        console.log('evaluation', evaluationTool)

        this.setState({
            copyForm: {
                tool: evaluationTool[EvaluationToolFields.ID],
                discipline_section: get(e, 'target.value')
            }
        })
    }

    hasError = (field: string) => {
        const { showErrors, evaluationTool } = this.state;
        return showErrors && get(evaluationTool, [field, 'length'], 0) === 0
    }

    render() {
        //@ts-ignore
        const {classes} = this.props;
        const {sections} = this.props;
        const {evaluationTool, isOpen} = this.state;

        if (!isOpen) return <></>

        return (
            <Dialog
                open={isOpen}
            >
                <DialogTitle>
                    Копировать оценочное средство
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    {isOpen &&
                        <>
                        {/* <AutoSizer style={{width: '100%'}}> */}
                            {/* {({width}: any) => ( */}
                                <>
                                <FormControl className={classes.disciplineSelector}>
                                    <InputLabel shrink id="section-label">
                                        Выберите дисциплину:
                                    </InputLabel>
                                    <Select
                                        variant="outlined"
                                        className={classes.selector}
                                        // @ts-ignore
                                        fullWidth
                                        displayEmpty
                                        input={
                                            <OutlinedInput
                                                id="section-label"
                                            />
                                        }
                                        style={{ width: '568px' }}
                                    >
                                        {disciplines.map((item: any, index: number) => <MenuItem value={item.pk} key={`discipline-${index}`}>
                                            {item.label}
                                        </MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                                
                                <FormControl className={classes.sectionSelector}>
                                    <InputLabel shrink id="discipline-label">
                                        Выберите раздел дисциплины:
                                    </InputLabel>
                                    <Select
                                        variant="outlined"
                                        className={classes.selector}
                                        // @ts-ignore
                                        onChange={this.saveField()}
                                        fullWidth
                                        displayEmpty
                                        input={<OutlinedInput
                                            notched
                                            name="course"
                                            id="discipline-label" />}
                                        style={{ width: '568px' }}
                                    >
                                        {sections.map((item: any, index: number) => <MenuItem value={item.value} key={`discipline-${index}`}>
                                            {item.label}
                                        </MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                                </>
                            {/* )} */}
                        {/* </AutoSizer> */}
                        </>
                    }
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <Button onClick={this.handleClose}
                            variant="text">
                        Отмена
                    </Button>

                        <Button onClick={this.handleSave}
                                variant="contained"
                                color="primary">
                            Сохранить
                        </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

//@ts-ignore
export default connect(withStyles(styles)(CopyModal));
