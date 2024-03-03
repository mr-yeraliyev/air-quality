import { observer } from 'mobx-react'
import { rootStore } from '../stores'
import { BarChart, ScatterChart, axisClasses } from '@mui/x-charts'
import { Box, Typography } from '@mui/material'

const barChartSetting = {
  yAxis: [
    {
      label: 'Average AQI - PM2.5',
    },
  ],
  width: 660,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    background: '#ffffff',
  },
}
const barChartDataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
]
const valueFormatter = (value: number) => `${value}mm`

const scatterChartSetting = {
  yAxis: [
    {
      label: 'Maximum Daily AQI - PM2.5',
    },
  ],
  xAxis: [
    {
      label: 'Minimum Daily Temperature (C)',
    },
  ],
  width: 660,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
    background: '#ffffff',
  },
}

const scatterChartData = [
  {
    id: 'data-0',
    x1: 329.39,
    x2: 391.29,
    y1: 443.28,
    y2: 153.9,
  },
  {
    id: 'data-1',
    x1: 96.94,
    x2: 139.6,
    y1: 110.5,
    y2: 217.8,
  },
  {
    id: 'data-2',
    x1: 336.35,
    x2: 282.34,
    y1: 175.23,
    y2: 286.32,
  },
  {
    id: 'data-3',
    x1: 159.44,
    x2: 384.85,
    y1: 195.97,
    y2: 325.12,
  },
  {
    id: 'data-4',
    x1: 188.86,
    x2: 182.27,
    y1: 351.77,
    y2: 144.58,
  },
  {
    id: 'data-5',
    x1: 143.86,
    x2: 360.22,
    y1: 43.253,
    y2: 146.51,
  },
  {
    id: 'data-6',
    x1: 202.02,
    x2: 209.5,
    y1: 376.34,
    y2: 309.69,
  },
  {
    id: 'data-7',
    x1: 384.41,
    x2: 258.93,
    y1: 31.514,
    y2: 236.38,
  },
  {
    id: 'data-8',
    x1: 256.76,
    x2: 70.571,
    y1: 231.31,
    y2: 440.72,
  },
  {
    id: 'data-9',
    x1: 143.79,
    x2: 419.02,
    y1: 108.04,
    y2: 20.29,
  },
  {
    id: 'data-10',
    x1: 103.48,
    x2: 15.886,
    y1: 321.77,
    y2: 484.17,
  },
  {
    id: 'data-11',
    x1: 272.39,
    x2: 189.03,
    y1: 120.18,
    y2: 54.962,
  },
  {
    id: 'data-12',
    x1: 23.57,
    x2: 456.4,
    y1: 366.2,
    y2: 418.5,
  },
  {
    id: 'data-13',
    x1: 219.73,
    x2: 235.96,
    y1: 451.45,
    y2: 181.32,
  },
  {
    id: 'data-14',
    x1: 54.99,
    x2: 434.5,
    y1: 294.8,
    y2: 440.9,
  },
  {
    id: 'data-15',
    x1: 134.13,
    x2: 383.8,
    y1: 121.83,
    y2: 273.52,
  },
  {
    id: 'data-16',
    x1: 12.7,
    x2: 270.8,
    y1: 287.7,
    y2: 346.7,
  },
  {
    id: 'data-17',
    x1: 176.51,
    x2: 119.17,
    y1: 134.06,
    y2: 74.528,
  },
  {
    id: 'data-18',
    x1: 65.05,
    x2: 78.93,
    y1: 104.5,
    y2: 150.9,
  },
  {
    id: 'data-19',
    x1: 162.25,
    x2: 63.707,
    y1: 413.07,
    y2: 26.483,
  },
  {
    id: 'data-20',
    x1: 68.88,
    x2: 150.8,
    y1: 74.68,
    y2: 333.2,
  },
  {
    id: 'data-21',
    x1: 95.29,
    x2: 329.1,
    y1: 360.6,
    y2: 422.0,
  },
  {
    id: 'data-22',
    x1: 390.62,
    x2: 10.01,
    y1: 330.72,
    y2: 488.06,
  },
]

const MainPage = observer(() => {
  const {
    mainPageStore: { mainPageTitle },
  } = rootStore

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          color: '#FFFFFF',
          marginY: 5,
          fontWeight: 'normal',
        }}
      >
        {mainPageTitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <BarChart
          dataset={barChartDataset}
          xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[
            { dataKey: 'london', label: 'London', valueFormatter },
            { dataKey: 'paris', label: 'Paris', valueFormatter },
            { dataKey: 'newYork', label: 'New York', valueFormatter },
            { dataKey: 'seoul', label: 'Seoul', valueFormatter },
          ]}
          {...barChartSetting}
        />
        <ScatterChart
          series={[
            {
              label: 'Series A',
              data: scatterChartData.map((v) => ({
                x: v.x1,
                y: v.y1,
                id: v.id,
              })),
            },
            {
              label: 'Series B',
              data: scatterChartData.map((v) => ({
                x: v.x1,
                y: v.y2,
                id: v.id,
              })),
            },
          ]}
          {...scatterChartSetting}
        />
      </Box>
    </div>
  )
})

export default MainPage
