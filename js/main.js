let btn = document.getElementById("new-quote");
let newQuote = document.querySelector(".quote");
let newPerson = document.querySelector(".person");
let quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    person: "Oscar Wilde",
  },
  {
    quote: "True friends stab you in the front.",
    person: "Oscar Wilde",
  },
  {
    quote: "Women are made to be Loved, not understood.",
    person: "Oscar Wilde",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    person: "Mahatma Gandhi",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    person: "Mahatma Gandhi",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "Do one thing every day that scares you.",
    person: "Eleanor Roosevelt",
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
    person: "Martin Luther King",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: "Martin Luther King",
  },
  {
    quote: "Injustice anywhere is a threat to justice everywhere.",
    person: "Martin Luther King",
  },
  {
    quote:
      "Life's most persistent and urgent question is, 'What are you doing for others?",
    person: "Martin Luther King",
  },
  {
    quote:
      "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
    person: "Albert Einstein",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas A. Edison",
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas A. Edison",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    person: "Thomas A. Edison",
  },
  {
    quote:
      "If we did all the things we are capable of, we would literally astound ourselves.",
    person: "Thomas A. Edison",
  },
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    person: "Albert Einstein",
  },
];
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  newQuote.innerText = quotes[random].quote;
  newPerson.innerText = quotes[random].person;
});
