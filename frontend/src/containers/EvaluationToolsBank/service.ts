import AnalyticsService from "../../service/analytics-service";
import {SortingType, Types} from "../../components/SortingButton/types";
import {filterFields} from "./enum";

class WorkProgramListService extends AnalyticsService{
    getWorkPrograms(currentPage: number, searchQuery: string, sortingField: string, sortingMode: SortingType, filters: any){
        const sortingSymbol = sortingMode === Types.ASC ? '-' : sortingMode === Types.DESC ? '+' : '';
        const language = `language=${filters[filterFields.LANGUAGE]}`;
       
        return this.get(`/api/workprograms?page=${currentPage}&search=${searchQuery}&ordering=${sortingSymbol}${sortingField}&${language}`);
    }

    deleteWorkProgram(id: number){
        return this.delete(`/api/workprogram/delete/${id}`);
    }

    createWorkProgram(workProgram: any){
        return this.post(`/api/workprogram/create`, workProgram);
    }
}

export default WorkProgramListService;
