import { themeColors } from '/@src/utils/themeColors'

export const customerChartOptions = {
  // customerSeries: [
  //   {
  //     name: 'Ratio',
  //     data: [2.3, 3.1, 4.0, 10.1, 4.0, 2, 3, 4, 3, 2, 1, 4],
  //   },
  // ],
  chart: {
    height: 265,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val: string) {
      return val + '%'
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    categories: ['Jan','Feb','Mar','Apr','May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    position: 'top',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val: string) {
        return val + '%'
      },
    },
  },
  colors: [themeColors.green, themeColors.secondary, themeColors.orange],
  title: {
    text: 'Customers',
    align: 'left',
  },
}
