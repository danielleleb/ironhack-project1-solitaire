'use strict'


function main() {
    var STARTING_TIME = 0;

    var mainElement = document.querySelector('#site-main');
    var stage;

    // -- SPLASH

    var splashElement;
    var startButton;
    
    var handleStartClick = function() {
        destroySplash();
        buildGame();
    };

    function buildSplash() {
        stage = 'splash';

        //create dom elements
        splashElement = document.createElement('div');
        splashElement.setAttribute('id', 'splash');

        var title = document.createElement('h1');
        title.innerText = 'SOLITAIRE';
        splashElement.appendChild(title);

        startButton = document.createElement('button');
        startButton.innerText = 'let\'s play';
        splashElement.appendChild(startButton);
        
        //append to site-main
        mainElement.appendChild(splashElement);

        //bind click on start play button
        startButton.addEventListener('click', handleStartClick);
    };

    function destroySplash() {
        //unbind start button
        startButton.removeEventListener('click', handleStartClick);
        //remove splash from dom
        splashElement.remove();
        }

    // -- GAMEEEE

    var game;

    function buildGame(){
        stage = 'game';
        game = new Game(mainElement, STARTING_TIME);

        game.onGameOver(function (moves) {
            destroyGame();
            buildGameOver(moves);
        });

        // window.setTimeout(function() {
        //     destroyGame();
        //     buildGameOver();
        // }, 3000);
    };
    function destroyGame() {
        game.destroy();
        // $(game).remove();
    }

    // -- GAME OVERRRR

    var gameOverElement;
    var playAgainButton;
    var handlePlayAgainClick = function() {
        destroyGameOver();
        buildGame();
    }

    function buildGameOver(moves) {
        stage = 'gameOver';

        //create dom elements
        gameOverElement = document.createElement('div');
        gameOverElement.setAttribute('id', 'game-over');

        var textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'game-over-text')
        gameOverElement.appendChild(textDiv)
;
        var title = document.createElement('h1');
        title.innerText = 'you lost :(';
        textDiv.appendChild(title);

        var yourMoves = document.createElement('h2');
        yourMoves.innerText = 'number of moves: ' + moves;
        textDiv.appendChild(yourMoves);


        playAgainButton = document.createElement('button');
        playAgainButton.innerText = 'restart';
        textDiv.appendChild(playAgainButton);

        //append to site-main
        mainElement.appendChild(gameOverElement);

        //bind to click on start play button
        playAgainButton.addEventListener('click', handlePlayAgainClick);
    }

    function destroyGameOver() {
        //unbind event listener
        playAgainButton.removeEventListener('click', handlePlayAgainClick);
        //remove game over from dom
        gameOverElement.remove();
    }

    buildSplash();
}

window.onload = main;