import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from './Filters.styles'
import cn from 'classnames';

import { getFilters } from '../getters'

import Button from '@mui/material/Button'
import SearchSelector from '../../../components/SearchSelector'
import Box from "@mui/material/Box";

import { languageArray, findIn, yesNoOptions } from '../../WorkProgram/constants';
import { rootState } from '../../../store/reducers'

import actions from '../actions'
import {filterFields} from "../enum";
import { types } from '../../WorkProgram/EvaluationTools/constants';

const Filters: React.FC = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [isReset, setIsReset] = useState<boolean>(false)
  const filters: any = useSelector((state: rootState) => getFilters(state))

  const lists = {
    langs: languageArray,
    toolTypes: types.map((type) => ({ value: type, label: type })),
    findIn,
    yesNoOptions
  }

  const handleFilter = (field: string, value: string|number): void => {
    isReset && setIsReset(false)
    dispatch(actions.changeFiltering({[field]: value}))
  }

  const resetFilters = (): void => {
    setIsReset(true)
    dispatch(actions.changeFiltering({
      [filterFields.LANGUAGE]: '',
      [filterFields.CHECK_POINT]: '',
      [filterFields.TYPE]: '',
      [filterFields.FIND_IN]: '',
    }))
    dispatch(actions.getWorkProgramList())
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.fieldsWrapper}>
        <SearchSelector 
          label='Язык рабочей программы'
          changeSearchText={() => {}}
          list={lists.langs}
          changeItem={(value: string) => handleFilter(filterFields.LANGUAGE, value)}
          value={filters[filterFields.LANGUAGE]}
          valueLabel={''}
          className={classes.field}
          isReset={isReset}
        />
        <SearchSelector
            label='Тип оценочного средства'
            changeSearchText={() => {}}
            list={lists.toolTypes}
            changeItem={(value: string) => handleFilter(filterFields.TYPE, value)}
            value={filters[filterFields.TYPE]}
            valueLabel={''}
            className={classes.field}
            isReset={isReset}
        />
        <SearchSelector
          label='Контрольная точка'
          changeSearchText={() => {}}
          list={lists.yesNoOptions}
          changeItem={(value: string) => handleFilter(filterFields.CHECK_POINT, value)}
          value={filters[filterFields.CHECK_POINT]}
          valueLabel={''}
          className={classes.field}
          isReset={isReset}
        />
        <SearchSelector
          label='Параметры для поиска'
          changeSearchText={() => {}}
          list={lists.findIn}
          changeItem={(value: string) => handleFilter(filterFields.FIND_IN, value)}
          value={filters[filterFields.FIND_IN]}
          valueLabel={''}
          className={classes.field}
          isReset={isReset}
        />
      </Box>
      <Box className={classes.btnsWrapper}>
        <Button
          color="primary"
          variant="outlined" 
          className={cn(classes.btn, classes.resetBtn)}
          onClick={resetFilters}
        >
          Сбросить
        </Button>
        <Button
          color="primary"
          variant="contained" 
          className={cn(classes.btn, classes.filterBtn)}
          onClick={() => dispatch(actions.getWorkProgramList())}
        >
          Отфильтровать
        </Button>
      </Box>
    </Box>
  )
}

export default Filters;