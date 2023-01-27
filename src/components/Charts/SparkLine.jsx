import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];

const SparkLine = () => {

  
  return (
    <SparklineComponent
      id="line-sparkLine" 
      height="80px"
      width="250px" 
      lineWidth="1"
      valueType="Numeric"
      fill="blue"
      border={{ color: "blue" , width: 2 }}
      dataSource={SparklineAreaData}
      xName="x"
      yName='y'
      type="Line"
    >
        <Inject services={[SparklineTooltip]} />
    </SparklineComponent>



  )

}

export default SparkLine