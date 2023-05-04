var quoteContainer = document.getElementById('quote-container');
var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function() {
  fetch('https://api.api-ninjas.com/v1/quotes',{
    headers: {
      'X-Api-Key': '7jbw5JiWkTHPX1UqWX+x9Q==hV7y9f53vIyMcGsj'
    }})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    var quote = data[0].quote;
    var author = data[0].author;
    quoteContainer.innerHTML = '<p id="quote-text">' + quote + '</p><p id="quote-author">' + author + '</p>';
    console.log(quote)
    console.log(author)
  })
  .catch(error => {
    console.error('There was a problem with the API request:', error);
  });
});