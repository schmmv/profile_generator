const readline = require('readline');

const rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (nameAns) => {
  rl.question("What's an activity you like doing? ", (activityAns) => {
    rl.question("What do you listen to while doing that? ", (musicAns) => {
      rl.question("Which meal is your favourite (eg. dinner, brunch, etc.) ", (mealAns) => {
        rl.question("What's your favourite thing to eat for that meal? ", (foodAns) => {
          rl.question("Which sport is your absolute favourite? ", (sportAns) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superAns) => {
              console.log(`${nameAns} loves listening to ${musicAns} while ${activityAns}, devouring ${foodAns} for ${mealAns}, prefers ${sportAns} over any other sport, and is amazing at ${superAns}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
 