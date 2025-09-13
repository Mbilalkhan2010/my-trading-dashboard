// Load saved settings on page load
window.onload = function() {
  if(localStorage.getItem("title")) {
    document.getElementById("dashboardTitle").innerText = localStorage.getItem("title");
    document.getElementById("siteName").innerText = localStorage.getItem("title");
    document.getElementById("footerText").innerText = "© 2025 " + localStorage.getItem("title");
  }
  if(localStorage.getItem("sidebarColor")) {
    document.getElementById("sidebar").style.background = localStorage.getItem("sidebarColor");
    document.getElementById("sidebarColor").value = localStorage.getItem("sidebarColor");
  }
  if(localStorage.getItem("bgColor")) {
    document.body.style.background = localStorage.getItem("bgColor");
    document.getElementById("bgColor").value = localStorage.getItem("bgColor");
  }
};

// Open settings panel
function openSettings() {
  document.getElementById("settingsPanel").style.display = "block";
}

// Save settings
function saveSettings() {
  const title = document.getElementById("titleInput").value;
  const sidebarColor = document.getElementById("sidebarColor").value;
  const bgColor = document.getElementById("bgColor").value;

  if(title) {
    localStorage.setItem("title", title);
    document.getElementById("dashboardTitle").innerText = title;
    document.getElementById("siteName").innerText = title;
    document.getElementById("footerText").innerText = "© 2025 " + title;
  }

  localStorage.setItem("sidebarColor", sidebarColor);
  document.getElementById("sidebar").style.background = sidebarColor;

  localStorage.setItem("bgColor", bgColor);
  document.body.style.background = bgColor;

  alert("✅ Settings Saved!");
}

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
