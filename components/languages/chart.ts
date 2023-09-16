const chartOptions = {
    labels: [],
    theme: {
        monochrome: {
          enabled: true
        },
    },
    chart: {
        type: "donut",
    },
    dataLabels: {
        formatter(val:any, opts:any) {
          const name = opts.w.globals.labels[opts.seriesIndex]
          return [name, val.toFixed(1) + '%']
        }
      },
      legend: {
        show: false
      },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 300,
                    height: 300,
                },
                legend: {
                    position: "top",
                },
            },
        },
    ],
};
 export default chartOptions;