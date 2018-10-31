import * as React from 'react';
import { PieChart, Pie } from 'recharts';
import { SurveyContext } from './SurveyContext';

export interface ISurveyPieChartProps {
}

export interface ISurveyPieChartState {
}

export default class SurveyPieChart extends React.Component<ISurveyPieChartProps, ISurveyPieChartState> {
    constructor(props: ISurveyPieChartProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
                <SurveyContext.Consumer>
                    {
                        (context) => (
                            <PieChart width={730} height={250}>
                                <Pie data={context.getVisualizationDataFromSurvey()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            </PieChart>
                        )
                    }

                </SurveyContext.Consumer>

            </div>
        );
    }
}
