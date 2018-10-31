import * as React from 'react';
import SurveyForm from './SurveyForm';
import SurveyContextProvider from './SurveyContextProvider';
import { SurveyContext } from "./SurveyContext";
import SurveyResults from './SurveyResults';


export interface IAppProps {
}

export interface IAppState {
}

export default class IApp extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
          <h1>Survey</h1>
          <SurveyContextProvider>
            <SurveyContext.Consumer>
              {
                (context) => (
                  <SurveyForm onSubmit={context.addGenderFromSurvey}></SurveyForm>
                )
              }
            </SurveyContext.Consumer>
            <SurveyResults>
              
            </SurveyResults>
          </SurveyContextProvider>
      </div>
    );
  }
}
