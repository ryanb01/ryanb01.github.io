const quotes = [
  {
    quote: "Pure mathematics is, in its way, the poetry of logical ideas.",
    author: "Albert Einstein",
  },
  {
    quote:
      "It is not knowledge, but the act of learning, not possession but the act of getting there, which grants me the greatest enjoyment.",
    author: "Carl Gauss",
  },
  {
    quote:
      "I consider that I understand an equation when I can predict the properties of its solutions, without actually solving it.",
    author: "Paul Dirac",
  },
  {
    quote:
      "I would rather have questions that can't be answered than answers that can't be questioned.",
    author: "Richard Feynman",
  },
  {
    quote: "We must know. We will know.",
    author: "David Hilbert",
  },
  {
    quote:
      "If I have seen further it is by standing on the shoulders of giants.",
    author: "Isaac Newton",
  },
  {
    quote: "A man who is certain he is right is almost sure to be wrong.",
    author: "Michael Faraday",
  },
  {
    quote:
      "Bring forward what is true. Write it so that it is clear. Defend it to your last breath.",
    author: "Ludwig Boltzmann",
  },
  {
    quote:
      "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
    author: "Niels Bohr",
  },
  {
    quote:
      "Not only is the universe stranger than we think, it is stranger than we can think.",
    author: "Werner Heisenberg",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
