
const jokesArray = [
    {
        "joke": "Why don't scientists trust atoms? Because they make up everything!",
        "author": "Anonymous"
    },
    {
        "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "author": "John Doe"
    },
    {
        "joke": "What do you call fake spaghetti? An Impasta!",
        "author": "Jane Smith"
    },
    {
        "joke": "Why was the math book sad? Because it had too many problems.",
        "author": "Math Enthusiast"
    },
    {
        "joke": "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "author": "Golf Lover"
    },
    {
        "joke": "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
        "author": "Farm Fanatic"
    },
    {
        "joke": "What do you get when you cross a vampire and a snowman? Frostbite.",
        "author": "Monster Mixer"
    },
    {
        "joke": "How do you organize a space party? You planet.",
        "author": "Space Enthusiast"
    },
    {
        "joke": "Why did the bicycle fall over? Because it was two-tired!",
        "author": "Bike Rider"
    },
    {
        "joke": "What do you call a bear with no teeth? A gummy bear!",
        "author": "Nature Lover"
    },
    {
        "joke": "Why did the computer go to the doctor? Because it had a virus!",
        "author": "Tech Guru"
    },
    {
        "joke": "Why don't skeletons fight each other? They don't have the guts.",
        "author": "Halloween Fan"
    },
    {
        "joke": "What do you call cheese that isn't yours? Nacho cheese.",
        "author": "Cheese Lover"
    },
    {
        "joke": "Why did the tomato turn red? Because it saw the salad dressing!",
        "author": "Foodie"
    },
    {
        "joke": "Why don't some couples go to the gym? Because some relationships don't work out.",
        "author": "Fitness Enthusiast"
    },
    {
        "joke": "Why did the coffee file a police report? It got mugged.",
        "author": "Barista"
    },
    {
        "joke": "How does a penguin build its house? Igloos it together.",
        "author": "Arctic Adventurer"
    },
    {
        "joke": "Why don't programmers like nature? It has too many bugs.",
        "author": "Coder"
    },
    {
        "joke": "Why was the big cat disqualified from the race? Because it was a cheetah.",
        "author": "Animal Lover"
    },
    {
        "joke": "Why did the picture go to jail? Because it was framed.",
        "author": "Photographer"
    }
];


function showJoke() {
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    const joke = jokesArray[randomIndex];


    const jokeTextElement = document.getElementById('jokeText');
    const jokeAuthorElement = document.getElementById('jokeAuthor');

    jokeTextElement.innerText = joke.joke;
    jokeAuthorElement.innerText = joke.author;
}

document.getElementById('getJokeButton').addEventListener('click', showJoke);
