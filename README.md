# tic-tac-toe-lance

Making a tic-tac-toe game in the browser

I used HTML and CSS (well, technically SASS) to structure the page. I used JavaScript and jQuery for th page's functionality, and made API calls to 
send and receive data. I attahe all my event listeners in an app.js file, and defined all my api calling functions inside an 
api.js file. My events.js file is where my event handlers are defined, and these are the functions that call the ones in 
api.js. I use a ui.js file to update the screen after api calls are made.

It was difficult to stick to one file at a time, since I wanted to complete each piece of functionality as I began it, not 
leave one file blank while I wrote functions that depended on that file. I don't think I did a great job working the 
recommended way, and I found myself cycling through each file for every piece of functionality.

Here are some wireframes that I didn't exactly follow... 
https://docs.google.com/document/d/e/2PACX-1vTaBBmnTZqiD-AugEumjLW3x18dj-TSv-kUJJNPOsVKNOgCZhxhmq1yQnBzaTflH51IeXb8J-3JT28z/pub
![alt text](https://imgur.com/a/Vq7Jvl6 "Tic-tac-toe wireframe")

They at least helped me think about what elements the page would need, even if I didn't organize the page according to 
the wireframes.

The page still needs work in the styling department. And it would be nice to have the game states shown all together, not 
with separate buttons. I also wish there was a way to list games by winning player (or list games won by a player). The API 
doesn't seem to make that workable, however, by not storing who the winner in each game is. I suppose I could implement 
a workaround where I could calculate a winner from each game returned, but that feels super inefficient.


Here are some user stories! Woo!
As a user, I want to be able to sign up with an email and password
As a user, I want to have impertinent information hidden from me
As a player, I want to be able to click any open square to make my move
As a player, I want to be able to keep track of my games
As a player, I want to be able to re-start my game at any point
As a user, I want to be able to sign-out
