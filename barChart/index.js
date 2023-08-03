const ratings = [
  { stars: 1, count: 100 },
  { stars: 2, count: 230 },
  { stars: 3, count: 700 },
  { stars: 4, count: 500 },
  { stars: 5, count: 520 },
];

/* 별점 평균 표시하는 부분 */
const totalStars = ratings.reduce(
  (acc, curr) => acc + curr.stars * curr.count,
  0
);
const totalCount = ratings.reduce((acc, curr) => acc + curr.count, 0);
const average = (totalStars / totalCount).toFixed(1);
const averageElement = document.getElementById('average');
averageElement.innerHTML = `평균 ${average}점`;

/* chart 표시하는 부분 */
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
      x: {
        grid: {
          display: false, // bar 구분하는 격자 숨김
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // 눈금 격자 숨김
        },
        ticks: {
          display: false,
          callback: function (value, index, values) {
            return value.toLocaleString();
          },
        },
      },
    },
  },
});
