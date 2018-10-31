import * as React from "react";

export interface ISurveyContext{
    genders: string[],
    addGenderFromSurvey?: Function
}

export const SurveyContext = React.createContext<ISurveyContext>({genders: []});