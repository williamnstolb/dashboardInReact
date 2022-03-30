import '../../../node_modules/react-vis/dist/style.css'

import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis'

const Chart = () => {
  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
    { x: 4, y: 5 },
    { x: 5, y: 20 },
    { x: 6, y: 25 },
    { x: 7, y: 10 },
    { x: 8, y: 5 },
  ]

  return (
    <div className={ { marginTop: '15px' } }>
      <XYPlot width={ 300 } height={ 300 }>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={ data } color="red" />
        <LineSeries data={ data } color="blue" />
        <LineSeries data={ data } color="green" />
      </XYPlot>
    </div>
  )
}

export default Chart;