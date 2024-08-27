// Function to generate a random color //
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change the background color of the body
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Function to fetch machine name and display it
function fetchMachineName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("FernandoEliaSanchez"); // Mocking machine name
    }, 1000);
  });
}

// Function to update the DOM with machine name
async function updateMachineName() {
  const machineName = await fetchMachineName();
  document.getElementById("full-name").innerText = machineName;
}

// Function to create a list item from user input
function createListItem() {
  const input = document.getElementById("list-item-input");
  const listItemText = input.value;
  if (listItemText) {
    const list = document.getElementById("list");
    const listItem = document.createElement("li");
    listItem.textContent = listItemText;
    list.appendChild(listItem);
    input.value = ""; // Clear the input
  }
}

// Event listener for the "Change my name" button
document.getElementById("change-name-btn").addEventListener("click", () => {
  updateMachineName();
});

// Event listener for the "Add to list" button
document
  .getElementById("add-to-list-btn")
  .addEventListener("click", createListItem);

// Change background color every 3 seconds
setInterval(changeBackgroundColor, 3000);

// Initialize the machine name on page load
updateMachineName();
