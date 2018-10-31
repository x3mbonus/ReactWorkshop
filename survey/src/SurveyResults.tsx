import * as React from 'react';
import { SurveyContext } from "./SurveyContext";
import SurveyPieChart from './SurveyPieChart';


export interface ISurveyResultsProps {
}

export default class SurveyResults extends React.Component<ISurveyResultsProps> {
  public render() {
    return (
      <div>
        <SurveyPieChart></SurveyPieChart>
      </div>
    );
  }
}
