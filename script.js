fetch('./data/trades.csv')
  .then(response => response.text())
  .then(csvText => {
    const rows = csvText.trim().split('\n');
    const tableData = rows.slice(1).map(r => r.split(','));

    const tbody = document.querySelector('#trade-table tbody');
    tableData.forEach(row => {
      const tr = document.createElement('tr');
      const cells = [0,1,2,3,4,12];
      cells.forEach(i => {
        const td = document.createElement('td');
        td.textContent = row[i];
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    const ctxProfit = document.getElementById('profitChart').getContext('2d');
    new Chart(ctxProfit, {
      type: 'bar',
      data: {
        labels: tableData.map(r => r[0]),
        datasets: [{ label: 'Profit', data: tableData.map(r => parseFloat(r[12])), backgroundColor: 'rgba(75, 192, 192, 0.6)' }]
      }
    });

    const symbolProfit = {};
    tableData.forEach(r => {
      const symbol = r[4];
      const profit = parseFloat(r[12]);
      symbolProfit[symbol] = (symbolProfit[symbol] || 0) + profit;
    });

    const ctxSymbol = document.getElementById('symbolChart').getContext('2d');
    new Chart(ctxSymbol, {
      type: 'pie',
      data: {
        labels: Object.keys(symbolProfit),
        datasets: [{ data: Object.values(symbolProfit), backgroundColor: ['rgba(255, 99, 132, 0.6)','rgba(54, 162, 235, 0.6)','rgba(255, 206, 86, 0.6)','rgba(75, 192, 192, 0.6)'] }]
      }
    });
  })
  .catch(err => console.error("Error loading CSV:", err));