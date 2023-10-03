const whoMove = document.querySelector('.who-move');
const gameArea = document.querySelector('.game-area');
const areaItem = document.querySelectorAll('.area-item');
const endGameResult = document.querySelector('.end-game-result');
const winnerText = document.querySelector('.winner-text');
const newGameBtn = document.querySelector('.new-game-btn');
const win = 
[
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let step = '';
let winner = '';
let counter = 0;


getWhoMove ();


function getWhoMove ()
{
    if (step == 'crosses')
    {
        step = 'noughts';
        whoMove.textContent = 'Noughts';
    } 
    else 
    {
        step = 'crosses'
        whoMove.textContent = 'Crosses'
    }
}


function checkNoughtsWin ()
{
    for(let i = 0; i < win.length; i++)
    {
        if(
        areaItem[win[i][0]].classList.contains('noughts') &&
        areaItem[win[i][1]].classList.contains('noughts') &&
        areaItem[win[i][2]].classList.contains('noughts')
        )
        {
            areaItem[win[i][0]].classList.add('winColor')
            areaItem[win[i][1]].classList.add('winColor')
            areaItem[win[i][2]].classList.add('winColor')
            winner = "Noughts"
            getEndGame(winner)
            return 1
        }
    }
}

function checkCrossesWin ()
{
    for(let i =0; i<win.length; i++)
    {
        if(
        areaItem[win[i][0]].classList.contains('crosses') &&
        areaItem[win[i][1]].classList.contains('crosses') &&
        areaItem[win[i][2]].classList.contains('crosses')
        ){
            areaItem[win[i][0]].classList.add('winColor')
            areaItem[win[i][1]].classList.add('winColor')
            areaItem[win[i][2]].classList.add('winColor')
            winner = "Сrosses"
            getEndGame(winner)
            return 1
        }
    }
}

function checkGameDraw ()
{
    if (!checkCrossesWin() && !checkNoughtsWin() && (counter >=9)){
        winner = "Game Draw"
        endGame(winner)
    }
}

function getEndGame (winner)
{
    gameArea.style.pointerEvents = 'none';
    endGameResult.style.display = 'flex';
    winnerText.textContent = winner;
}




areaItem.forEach((item)=>
{
    item.addEventListener('click',()=>
    {
        if(!item.classList.contains('noughts') && !item.classList.contains('crosses'))
        {
            item.classList.add(step);

            if (step=='crosses')
            {
                item.textContent = "X"
            }

            if (step=='noughts')
            {
                item.textContent = "0"
            }

            counter++;
            getWhoMove ();
            checkNoughtsWin ();
            checkCrossesWin ();
            checkGameDraw ();
        }
        
    })
})

newGameBtn.addEventListener('click',() =>
{
    document.location.reload()
})