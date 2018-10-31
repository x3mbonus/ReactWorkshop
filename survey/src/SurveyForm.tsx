import * as React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Button from '@material-ui/core/Button';

export interface ISurveyFormProps {
    onSubmit:Function;
}

export interface ISurveyFormState {
    gender: string
}

export default class SurveyForm extends React.Component<ISurveyFormProps, ISurveyFormState> {
    
  constructor(props: ISurveyFormProps) {
    super(props);

    this.state = {
        gender: 'female',
    }
  }

  handleChange = event => {
    this.setState({ gender: event.target.value });
  };

  sendSurvey = () => {
    this.props.onSubmit(this.state.gender);
  };

  public render() {
    return (
      <div>
          <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
        
        <Button variant="contained" color="primary" onClick={this.sendSurvey}>
            Submit survey
        </Button>
        
      </div>
    );
  }
}
