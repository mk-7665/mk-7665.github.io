
    var Quotes = [
      {
        "quote" : "In the middle of difficulty lies opportunity.",
        "quoter": "Albert Einstein"
      },
      {
        "quote": "Education is what remains after one has forgotten what one has learned in school.",
        "quoter": "Albert Einstein"
      },
      {
        "quote": "When you undervalue what you do, the world will undervalue who you are.",
        "quoter": "Oprah Winfrey"
      },
      {
        "quote": "The thing you fear most has no power. Your fear of it is what has the power. Facing the truth really will set you free.",
        "quoter": "Oprah Winfrey"
      },
      {
        "quote": "Never give up on what you really want to do. The person with big dreams is more powerful than the one with all the facts.",
        "quoter": "Albert Einstein"
      },
      {
        "quote": "You don’t become what you want, you become what you believe.",
        "quoter": "Oprah Winfrey"
      },
      {
        "quote": "The more you read, the more things you know. The more that you learn, the more places you'll go.",
        "quoter": "Dr. Seuss"
      },
      {
        "quote": "Why fit in when you were born to stand out?",
        "quoter": "Dr. Seuss"
      },
      {
        "quote": "To the world you may be one person; but to one person you may be the world.",
        "quoter": "Dr. Seuss"
      },
      {
        "quote": "Everyone wants to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
        "quoter": "Oprah Winfrey"
      },
      {
        "quote": "You get in life what you have the courage to ask for.",
        "quoter": "Oprah Winfrey"
      },
      {
        "quote": "We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.",
        "quoter": "J.K. Rowling"
      },
      {
        "quote": "It is our choices that show what we truly are, far more than our abilities.",
        "quoter": "J.K. Rowling"
      },
      {
        "quote": "They do not love that do not show their love.",
        "quoter": "William Shakespeare"
      },
      {
        "quote": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "quoter": "William Shakespeare"
      }       
    
    ]
var num = 0;
console.log(Quotes.length);

//document loads a random quote when dom is ready
$("document").ready(function(){
  num = Math.floor(Math.random()*15);
  $("h1#quote-box").text(Quotes[num]["quote"]);
  $("p#famous-person").text("- "+ Quotes[num]["quoter"]);
});

//document loads a random quote when button is clicked
$("button#get-quote").on("click", function(){
  num = Math.floor(Math.random()*15);
  $("h1#quote-box").text(Quotes[num]["quote"]);
  $("p#famous-person").text("- "+ Quotes[num]["quoter"]);
});
    
