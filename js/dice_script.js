const logContainer = document.querySelector("#log");
const userContainer = document.getElementById("userNumber");
const aiContainer = document.getElementById("aiNumber");
const output = document.getElementById("output");

document.getElementById('btn').addEventListener('click', function(){
  const userNumber = Math.floor(Math.random() * (6) + 1);
  const aiNumber = Math.floor(Math.random() * (6) + 1);

  output.classList.remove("bg-amber-500");
  output.classList.remove("bg-red-500");
  output.classList.remove("bg-green-500");

  const historyLog = document.createElement('div');
  historyLog.classList = "container mx-auto px-4 py-2 opacity-70 rounded-xl text-center font-bold mb-2 logs";

  aiContainer.innerHTML = aiNumber;
  userContainer.innerHTML = userNumber;

  if (userNumber==aiNumber) {
    output.innerHTML = "It's a draw!"
    output.classList.add("bg-amber-500");
    historyLog.innerHTML = "Tie";
    historyLog.classList.add("bg-amber-500")
    logContainer.append(historyLog);
  } else if (userNumber>aiNumber) {
    output.innerHTML = "You are the winner!"
    output.classList.add("bg-green-500");
    historyLog.innerHTML = "Win";
    historyLog.classList.add("bg-green-500");
    logContainer.append(historyLog);
  } else {
    output.innerHTML = "You lose!"
    output.classList.add("bg-red-500");
    historyLog.innerHTML = "Defeat";
    historyLog.classList.add("bg-red-500");
    logContainer.append(historyLog);
  };

});

document.getElementById('rst').addEventListener('click', function(){
  output.classList.remove("bg-red-500");
  output.classList.remove("bg-green-500");
  output.classList.add("bg-amber-500");
  aiContainer.innerHTML = "?";
  userContainer.innerHTML = "?";
  output.innerHTML = "???";
  logContainer.innerHTML = '';
});