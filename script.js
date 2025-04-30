const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const messageBox = document.getElementById("messageBox");

const messages = {
  1: "Hey, it’s okay to slow down. You're not alone.",
  2: "It’s a heavy day. Be kind to yourself.",
  3: "You got this!.",
  4: "You're doing well—let’s keep it steady.",
  5: "You're shining today! Keep going!"
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("taskName").value;
  const date = document.getElementById("taskDate").value;
  const mood = parseInt(document.getElementById("mood").value);

  const listItem = document.createElement("li");
  listItem.textContent = `${name} – Due: ${date}`;
  taskList.appendChild(listItem);

  // Show encouragement
  messageBox.textContent = messages[mood] || "Keep going, you're doing great.";
  
  // Clear the form
  form.reset();
});
