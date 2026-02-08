// Sample array of quotes
const quotes = [
  { text: "I'm gonna be King of the Pirates!", character: "Monkey D. Luffy", anime: "One Piece" },
  { text: "I am the hope of the universe. I am the answer to all living things that cry out for peace.", character: "Goku", anime: "Dragon Ball Z" },
  { text: "When you give up, that's when the game is over.", character: "Hinata Hyuga", anime: "Naruto" },
  { text: "If you don’t take risks, you can’t create a future!", character: "Monkey D. Luffy", anime: "One Piece" },
  { text: "A lesson without pain is meaningless. That’s because no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart.", character: "Edward Elric", anime: "Fullmetal Alchemist" },
  { text: "The world is not beautiful, therefore it is.", character: "Sin City", anime: "Attack on Titan" },
  { text: "I will protect them with my life, because that’s what it means to be a hero!", character: "All Might", anime: "My Hero Academia" },
  { text: "I will never give up! That's my ninja way!", character: "Naruto Uzumaki", anime: "Naruto" },
  { text: "People’s lives don’t end when they die, it ends when they lose faith.", character: "Itachi Uchiha", anime: "Naruto" },
  { text: "It’s not the face that makes someone a monster; it’s the choices they make with their lives.", character: "Naruto Uzumaki", anime: "Naruto" },
  { text: "No matter how deep the night, it always turns to day, eventually.", character: "Brook", anime: "One Piece" },
  { text: "Even if I’m not the strongest, I’ll be the smartest!", character: "Lelouch vi Britannia", anime: "Code Geass" },
  { text: "I’m not gonna run away, I never go back on my word! That’s my nindo: my ninja way!", character: "Naruto Uzumaki", anime: "Naruto" },
  { text: "A lesson without pain is meaningless. That’s because no one can gain without sacrificing something.", character: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood" },
  { text: "Power comes in response to a need, not a desire. You have to create that need.", character: "Goku", anime: "Dragon Ball Z" },
  { text: "When you give up, that's when the game is over.", character: "Kuroko Tetsuya", anime: "Kuroko no Basket" },
  { text: "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.", character: "Hinata Shouyou", anime: "Haikyuu!!" },
  { text: "The world is not beautiful, therefore it is.", character: "Kino", anime: "Kino's Journey" },
  { text: "I want to become the very best, like no one ever was.", character: "Ash Ketchum", anime: "Pokémon" },
  { text: "I’ll take a potato chip... and eat it!", character: "Light Yagami", anime: "Death Note" },
  { text: "I am gonna be the Wizard King!", character: "Asta", anime: "Black Clover" },
];

// Generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Display the quote and character
  document.getElementById('quote').textContent = `"${randomQuote.text}"`;
  document.getElementById('character').textContent = `- ${randomQuote.character}`;

  // Update the Twitter share URL with the quote
  const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomQuote.text)} - ${encodeURIComponent(randomQuote.character)} (${encodeURIComponent(randomQuote.anime)})`;
  document.getElementById('twitter-share').setAttribute('href', twitterURL);
}

// Handle anime filter
document.getElementById('anime-filter').addEventListener('change', function() {
  const selectedAnime = this.value;
  const filteredQuotes = selectedAnime === "all" ? quotes : quotes.filter(quote => quote.anime === selectedAnime);

  // Update the quote array with filtered results
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex];

  // Display the quote and character
  document.getElementById('quote').textContent = `"${randomQuote.text}"`;
  document.getElementById('character').textContent = `- ${randomQuote.character}`;
});

// Initialize with a random quote on page load
window.onload = generateQuote;

// Add event listener to the generate button
document.getElementById('generate-button').addEventListener('click', generateQuote);
