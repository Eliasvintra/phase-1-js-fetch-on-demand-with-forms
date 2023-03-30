const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  //console.log(event);
  //accessing input value using event object
//   event.target.children[1].value;

//   console.log(event.target.children[1].value)
  //or
  //accessing input value directly
  const input = document.querySelector('input#searchByID');

  //console.log(input.value);

  fetch(`http://localhost:3000/movies/${input.value}`)
  .then(response => response.json())
  .then(data => {
    const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');

    title.innerText = data.title;
    summary.innerText = data.summary;
  });

  });
  
}

document.addEventListener('DOMContentLoaded', init);