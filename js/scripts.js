// Example Chart.js setup
const ctx = document.getElementById('equityChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sep 1", "Sep 2", "Sep 3", "Sep 4"],
    datasets: [{
      label: "Cumulative Profit",
      data: [50, 20, 80, 100],
      borderColor: "blue",
      backgroundColor: "rgba(0,0,255,0.1)",
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});
