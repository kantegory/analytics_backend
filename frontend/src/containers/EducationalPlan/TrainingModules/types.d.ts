import {ActionCreatorWithoutPayload, ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {WithStyles} from "@material-ui/core";

import {SortingType} from "../../../components/SortingButton/types";

import {mapStateToProps, mapDispatchToProps} from "./TrainingModules.connect";
import {TrainingModuleFields, fields} from './enum';
import {DirectionType} from "../../Direction/types";

import styles from "./TrainingModules.styles";
import {UserType} from '../../../layout/types';

export interface TrainingModulesActions {
    getTrainingModulesList: ActionCreatorWithoutPayload;
    setTrainingModulesList: ActionCreatorWithPayload;
    getTrainingModule: ActionCreatorWithPayload<GetTrainingModulePayload>;
    setTrainingModule: ActionCreatorWithPayload;

    changeSearchQuery: ActionCreatorWithPayload;
    changeCurrentPage: ActionCreatorWithPayload;
    changeAllCount: ActionCreatorWithPayload;
    changeSorting: ActionCreatorWithPayload;

    openDialog: ActionCreatorWithPayload<OpenDialogPayload>;
    closeDialog: ActionCreatorWithoutPayload;

    createTrainingModule: ActionCreatorWithPayload<CreateTrainingModulePayload>;
    changeTrainingModule: ActionCreatorWithPayload<ChangeTrainingModulePayload>;
    deleteTrainingModule: ActionCreatorWithPayload;
    changeFiltering: ActionCreatorWithPayload;

    showOnlyMy: ActionCreatorWithPayload<boolean>;

    changeEditorList: ActionCreatorWithPayload;
}

export type OpenDialogPayload = {
    data: TrainingModuleType|{};
}

export type CreateTrainingModulePayload = {
    data: {
        [TrainingModuleFields.NAME]: string;
        [TrainingModuleFields.DESCRIPTION]: string;
    };
}

export type GetTrainingModulePayload = {
    id: number;
}

export type ChangeTrainingModulePayload = {
    data: TrainingModuleType
}

export interface trainingModulesState {
    [fields.DETAIL_TRAINING_MODULE]: TrainingModuleType|{};
    [fields.TRAINING_MODULES_LIST]: Array<TrainingModuleType>;
    [fields.SORTING]: {
        [fields.SORTING_FIELD]: string,
        [fields.SORTING_MODE]: SortingType;
    };
    [fields.ALL_COUNT]: number;
    [fields.CURRENT_PAGE]: number;
    [fields.SEARCH_QUERY]: string;
    [fields.TRAINING_MODULE_DIALOG]: {
        [fields.IS_OPEN_TRAINING_MODULE_DIALOG]: boolean;
        [fields.TRAINING_MODULE_DIALOG_DATA]: TrainingModuleType|{};
    };
    [fields.SHOW_ONLY_MY]: boolean;
}

export interface TrainingModulesProps extends WithStyles<typeof styles>, PropsFromRedux, ActionsFromRedux{}

export type PropsFromRedux = ReturnType<mapStateToProps>;
export type ActionsFromRedux = ReturnType<mapDispatchToProps>;

export type TrainingModuleType = {
    [TrainingModuleFields.ID]: number;
    [TrainingModuleFields.NAME]: string;
    [TrainingModuleFields.DESCRIPTION]: string;
    [TrainingModuleFields.TYPE]: string;
    [TrainingModuleFields.DISCIPLINE]: {
        [TrainingModuleFields.ACADEMIC_PLAN]: {
            [TrainingModuleFields.EDUCATIONAL_PROFILE]: string;
            [TrainingModuleFields.ACADEMIC_PLAN_IN_FIELD_OF_STUDY]: Array<{[TrainingModuleFields.FIELD_OF_STUDY]: DirectionType}>;
        }
    };
    [TrainingModuleFields.EDITORS]: Array<UserType>;
    [TrainingModuleFields.CAN_EDIT]: boolean;
}
