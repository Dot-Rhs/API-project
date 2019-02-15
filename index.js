fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    const titleBox = document.getElementById("title");
    titleBox.innerHTML = `<img src= ${data[0].image}> ${data[0].character} ${
      data[0].quote
    }`;
  });
