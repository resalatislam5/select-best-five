// common selected player function
function SelectedBtn(btn,select) {
        const arr = []
        const selectedPlayer = document.getElementById(select);
        const player = document.getElementById(btn);
        const playerName = player.parentNode.parentNode.children[0].innerText;
        const li = document.createElement('li');
        const playerList = document.createTextNode(playerName);
        li.appendChild(playerList)
        selectedPlayer.appendChild(li);
        arr.push(selectedPlayer);
        if( arr[0].children.length > 4){
            const disables =  document.querySelectorAll('.btn-disable')
            for (const disable of disables) {
                disable.disabled = 'true';
            }
            alert('ar click korta paban na')
            player.disabled = 'true';
            player.style.color = '#fff'
            player.style.background = '#000';
            player.style.background = 'red';
            return;
        }
        player.disabled = 'true';
        player.style.color = '#fff'
        player.style.background = 'red';
}
// inputString to Number 
function cost(insertCost) {
    const perplayer = document.getElementById(insertCost);
    const perplayerString = perplayer.value;
    const perplayerValue = parseFloat(perplayerString);
    return perplayerValue;
}

document.getElementById('btn-calculate-player').addEventListener('click', function () {
    const selectedV = document.getElementById('selected-v');
    const perplayerValue = cost('per-player')
    const perplayerResult = selectedV.children.length * perplayerValue;
    const insertPlayerCost = document.getElementById('insert-player-cost');
    insertPlayerCost.innerText =  perplayerResult;
})