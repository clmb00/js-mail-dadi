const listMailsCorrect = [
  "matteo@gmail.com","luca@gmail.com","giovanni@gmail.com","marco@gmail.com","paolo@gmail.com","pietro@gmail.com"
];
const output = document.querySelector('p');

document.getElementById('btn').addEventListener('click', function(){
  const userMail = document.getElementById('email');
  let check = false;

  for( i = 0 ; i < listMailsCorrect.length ; i++){
    if (listMailsCorrect[i] == userMail.value){
      check = true;
    };
  };

  if (check) {
    output.innerHTML = 'Your email is correct! You have access to the next page!';
    output.classList = 'text-lime-700';
  } else {
    output.innerHTML = "Your email is incorrect! You don't have access to the next page!";
    output.classList = 'text-red-700';
  };

  document.getElementById("outputBox").classList.remove("hidden");
});

document.getElementById('rst').addEventListener('click', function(){
  document.getElementById("outputBox").classList.add("hidden");
});