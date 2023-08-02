const ratings = [
  { stars: 1, count: 100 },
  { stars: 2, count: 230 },
  { stars: 3, count: 700 },
  { stars: 4, count: 500 },
  { stars: 5, count: 520 },
];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ratings.map((item) => `${item.stars}점`),
    datasets: [
      {
        label: '별점 분포',
        data: ratings.map((item) => item.count),
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      maintainAspectRatio: false,
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value, index, values) {
            return value.toLocaleString();
          },
        },
      },
    },
  },
});
