const players = [
    {
      name: "Bhavya",
      admissionNumber: "ADM101",
      phone: "9876543210",
      admissionDate: "2024-01-01",
      feesStatus: "pending",
      dueDate: "2025-01-01",
      image: "images/bhavya.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Gurman",
      admissionNumber: "ADM102",
      phone: "9876543211",
      admissionDate: "2024-08-03",
      feesStatus: "pending",
      dueDate: "2025-01-03",
      image: "images/gurman.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Vega",
      admissionNumber: "ADM104",
      phone: "9876543213",
      admissionDate: "2024-09-28",
      feesStatus: "pending",
      dueDate: "2025-01-28",
      image: "images/vega.jpg",
      feesHistory: [
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Vritika",
      admissionNumber: "ADM105",
      phone: "9876543214",
      admissionDate: "2024-11-29",
      feesStatus: "pending",
      dueDate: "2025-01-29",
      image: "path-to-image/vritika.jpg",
      feesHistory: [
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Mehransh",
      admissionNumber: "ADM106",
      phone: "9876543215",
      admissionDate: "2024-10-06",
      feesStatus: "pending",
      dueDate: "2025-01-06",
      image: "images/mehransh.jpg",
      feesHistory: [
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
        { month: "Dec", year: 2024, status: "paid" },
      ],
    },
  
    {
      name: "Devansh",
      admissionNumber: "ADM108",
      phone: "9876543217",
      admissionDate: "2024-10-18",
      feesStatus: "pending",
      dueDate: "2025-01-18",
      image: "images/devansh.jpg",
      feesHistory: [
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Sukhmehar",
      admissionNumber: "ADM109",
      phone: "9876543218",
      admissionDate: "2024-10-19",
      feesStatus: "pending",
      dueDate: "2025-01-19",
      image: "path-to-image/sukhmehar.jpg",
      feesHistory: [
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Kashika",
      admissionNumber: "ADM110",
      phone: "9876543219",
      admissionDate: "2023-08-07",
      feesStatus: "pending",
      dueDate: "2025-01-07",
      image: "path-to-image/kashika.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Vihaan",
      admissionNumber: "ADM111",
      phone: "9876543220",
      admissionDate: "2024-01-01",
      feesStatus: "pending",
      dueDate: "2025-01-01",
      image: "path-to-image/vihaan.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Aryan",
      admissionNumber: "ADM112",
      phone: "9876543221",
      admissionDate: "2024-01-01",
      feesStatus: "pending",
      dueDate: "2025-01-01",
      image: "path-to-image/aryan.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Blessy",
      admissionNumber: "ADM113",
      phone: "9876543222",
      admissionDate: "2023-08-07",
      feesStatus: "pending",
      dueDate: "2025-01-07",
      image: "path-to-image/blessy.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
  
    {
      name: "Chinmay",
      admissionNumber: "ADM114",
      phone: "9876543222",
      admissionDate: "2024-10-07",
      feesStatus: "pending",
      dueDate: "2025-01-07",
      image: "path-to-image/blessy.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
  
    {
      name: "Gurshabad",
      admissionNumber: "ADM115",
      phone: "9876543222",
      admissionDate: "2024-07-21",
      feesStatus: "pending",
      dueDate: "2025-01-21",
      image: "path-to-image/blessy.jpg",
      feesHistory: [
        { month: "Aug", year: 2024, status: "paid" },
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
    {
      name: "Garvit",
      admissionNumber: "ADM116",
      phone: "9876543223",
      admissionDate: "2024-09-29",
      feesStatus: "pending",
      dueDate: "2025-01-29",
      image: "path-to-image/garvit.jpg",
      feesHistory: [
        { month: "Sep", year: 2024, status: "paid" },
        { month: "Oct", year: 2024, status: "paid" },
        { month: "Nov", year: 2024, status: "paid" },
      ],
    },
  ];


// Populate players dynamically
function populatePlayers() {
  const playerList = document.getElementById("player-list");
  playerList.innerHTML = "";

  players.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = `player-card ${player.feesStatus}`;
    card.innerHTML = `
      <h3>${player.name}</h3>
      <p>Admission No: ${player.admissionNumber}</p>
      <p>Fees Status: <strong>${player.feesStatus}</strong></p>
      <button class="btn" onclick="redirectToDetails(${index})">Click Here</button>
    `;
    playerList.appendChild(card);
  });
}

// Redirect to details page
function redirectToDetails(index) {
  const player = players[index];
  const url = `player-details.html?admissionNumber=${encodeURIComponent(player.admissionNumber)}`;
  window.location.href = url; // Navigate to player-details.html
}

populatePlayers();
