import React from 'react';
import './Chart.css'
import ChartBar from "./ChartBar";

function Chart(props) {

    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value); //gets us an array of numbers
    const totalMaximum = Math.max(...dataPointValues); //use the spread operator to split the array into list of arguments

    return (
        <div className="chart">
            { props.dataPoints.map(dataPoint =>
                    <ChartBar key={dataPoint.label}
                              value={dataPoint.value}
                              maxValue={totalMaximum}
                              label={dataPoint.label}/>
                )
            }
        </div>
)
    ;
}

export default Chart;