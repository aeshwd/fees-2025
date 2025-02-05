const players = [
    {
      name: "Bhavya",
      admissionNumber: "ADM101",
      admissionDate: "2024-01-01",
      feesStatus: "paid",
      dueDate: "2025-01-01",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },
    {
      name: "Gurman",
      admissionNumber: "ADM102",
      admissionDate: "2024-08-03",
      feesStatus: "paid",
      dueDate: "2025-01-03",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },

     {
      name: "Kevit",
      admissionNumber: "ADM103",
      admissionDate: "2024-12-08",
      feesStatus: "paid",
      dueDate: "2025-01-08",
      feesHistory: [
        { month: "Dec", year: 2024, status: "paid" },
         { month: "Jan", year: 2025, status: "paid" },
      ],
    },
    
    {
      name: "Vritika",
      admissionNumber: "ADM105",
      admissionDate: "2024-11-29",
      feesStatus: "pending",
      dueDate: "2025-01-29",
      feesHistory: [
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Mehransh",
      admissionNumber: "ADM106",
      admissionDate: "2024-10-06",
      feesStatus: "paid",
      dueDate: "2025-01-06",
      feesHistory: [
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },
  
    
    {
      name: "Sukhmehar",
      admissionNumber: "ADM109",
      admissionDate: "2024-10-19",
      feesStatus: "paid",
      dueDate: "2025-01-19",
      feesHistory: [
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },
  
    {
      name: "Garvit",
      admissionNumber: "ADM116",
      admissionDate: "2024-09-29",
      feesStatus: "pending",
      dueDate: "2025-01-29",
      feesHistory: [
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
      ],
    },

      {
      name: "Devansh",
      admissionNumber: "ADM117",
      admissionDate: "2025-01-18",
      feesStatus: "paid",
      dueDate: "2025-01-18",
      feesHistory: [
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },
      {
      name: "Dhaval",
      admissionNumber: "ADM118",
      admissionDate: "2025-01-27",
      feesStatus: "paid",
      dueDate: "2025-01-27",
      feesHistory: [
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },

    {
      name: "Aaradhya",
      admissionNumber: "ADM119",
      admissionDate: "2025-01-29",
      feesStatus: "paid",
      dueDate: "2025-01-29",
      feesHistory: [
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },

    {
      name: "Anaya",
      admissionNumber: "ADM120",
      admissionDate: "2025-01-29",
      feesStatus: "paid",
      dueDate: "2025-01-29",
      feesHistory: [
        { month: "Jan", year: 2025, status: "paid" },
      ],
    },
  ];


// Utility function to get the current month and year
function getCurrentMonthYear() {
  const now = new Date();
  const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return {
    month: monthLabels[now.getMonth()],
    year: now.getFullYear(),
  };
}

// Prepare data for the graph
function getCurrentMonthData() {
  const { month, year } = getCurrentMonthYear();
  return players.reduce(
    (data, player) => {
      player.feesHistory.forEach((fee) => {
        if (fee.month === month && fee.year === year) {
          if (fee.status === "paid") {
            data.paid++;
          } else {
            data.pending++;
          }
        }
      });
      return data;
    },
    { paid: 0, pending: 0 }
  );
}

// Initialize Chart.js Graph
let feesChart;
function renderGraph() {
  const ctx = document.getElementById("feesTrendChart").getContext("2d");
  const { paid, pending } = getCurrentMonthData();
  const { month, year } = getCurrentMonthYear();

  if (feesChart) feesChart.destroy(); // Destroy previous chart to avoid duplication

  feesChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Paid", "Pending"],
      datasets: [
        {
          label: `Fees Status for ${month} ${year}`,
          data: [paid, pending],
          backgroundColor: ["#4caf50", "#f44336"],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Automatically refresh graph on month change
let lastMonth = getCurrentMonthYear().month;
setInterval(() => {
  const currentMonth = getCurrentMonthYear().month;
  if (currentMonth !== lastMonth) {
    lastMonth = currentMonth;
    renderGraph();
  }
}, 1000 * 60 * 60); // Check every hour

// Search players by name
function searchPlayers() {
  const searchValue = document.getElementById("searchBar").value.toLowerCase();
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchValue)
  );
  renderPlayers(filteredPlayers);
}



// Render player cards dynamically
function renderPlayers(filteredPlayers) {
  const playerList = document.getElementById("player-list");
  playerList.innerHTML = ""; // Clear the player list

  if (filteredPlayers.length === 0) {
    playerList.innerHTML = `<p>No players found.</p>`;
    return;
  }

  filteredPlayers.forEach((player) => {
    const card = document.createElement("div");
    card.className = `player-card ${player.feesStatus}`;
    card.innerHTML = `
      <h3>${player.name}</h3>
      <p><strong>Admission No:</strong> ${player.admissionNumber}</p>
      <button class="btn" onclick="redirectToDetails('${player.admissionNumber}')">Details</button>
    `;
    playerList.appendChild(card);
  });
}

// Redirect to details page
function redirectToDetails(admissionNumber) {
  const url = `player-details.html?admissionNumber=${encodeURIComponent(admissionNumber)}`;
  window.location.href = url; // Navigate to player-details.html
}

// Populate all players on load
function populatePlayers() {
  renderPlayers(players);
}

// Initialize the application after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Populate players on page load
  populatePlayers();

  // Attach search and filter functionality to buttons
  const searchBar = document.getElementById("searchBar");
  const filterPending = document.getElementById("filterPending");
  const filterPaid = document.getElementById("filterPaid");

  if (searchBar) searchBar.addEventListener("input", searchPlayers);
  if (filterPending) filterPending.addEventListener("click", () => filterByStatus("pending"));
  if (filterPaid) filterPaid.addEventListener("click", () => filterByStatus("paid"));
});
