import React, { Component, PureComponent } from 'react'

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

 class SparkLineChart extends PureComponent {
    render() {
        const { id, type, height, width, data, currentColor, color } = this.props;
        return ( 
            <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{ color: currentColor, width: 2 }}
            dataSource={data}
            xName="x"
            yName='y'
            type={type}>

            {/* <Inject services={[SparklineTooltip]} /> */}

        </SparklineComponent>)
    }
}

export class AppChart extends Component{
    render(){
      return(
        <div>
          {/* <SparkLineChart /> */}
        </div>
      )
    }
  }