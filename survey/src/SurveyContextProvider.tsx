import * as React from 'react';
import { SurveyContext, ISurveyContext } from "./SurveyContext";

export interface ISurveyContextProviderProps {
}

export default class SurveyContextProvider extends React.Component<ISurveyContextProviderProps, ISurveyContext> {
  constructor(props: ISurveyContextProviderProps) {
    super(props);

    this.state = {
      genders: [],
      addGenderFromSurvey: (gender) => {
        this.setState({
          ...this.state,
          genders: [...this.state.genders, gender]
        })
      },
      getVisualizationDataFromSurvey: () => Array.from(
        this.state.genders.reduce(
          (result, value) => result.set(value, (result.get(value) || 0) + 1),
          new Map<string, number>([])
        )
      )
        .map(
          i => ({
            "name": i[0],
            "value": i[1]
          })
        )
        
    }
  }

  public render() {
  return (
    <div>
      <SurveyContext.Provider value={this.state}>
        {this.props.children}
      </SurveyContext.Provider>
    </div>
  );
}
}
