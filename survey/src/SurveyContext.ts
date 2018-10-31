import * as React from "react";

export interface ISurveyContext{
    genders: string[],
    addGenderFromSurvey?: Function,
    getVisualizationDataFromSurvey?: Function
}

export const SurveyContext = React.createContext<ISurveyContext>({genders: []});