import * as React from 'react';
import { SurveyContext, ISurveyContext} from "./SurveyContext";

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
      }
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
