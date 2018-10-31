import * as React from 'react';
import { SurveyContext } from "./SurveyContext";


export interface ISurveyResultsProps {
}

export default class SurveyResults extends React.Component<ISurveyResultsProps> {
  public render() {
    return (
      <div>
        <SurveyContext.Consumer>
            {
                context => (
                    <div>{context.genders.length}</div>
                )
            }
        </SurveyContext.Consumer>
      </div>
    );
  }
}
