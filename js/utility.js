function SelectedBtn(btn,select) {
        const selectedPlayer = document.getElementById(select);
        const player = document.getElementById(btn);
        const playerName = player.parentNode.parentNode.children[0].innerText;
        const li = document.createElement('li');
        const playerList = document.createTextNode(playerName);
        li.appendChild(playerList)
        selectedPlayer.appendChild(li);
        player.disabled = 'true';
        player.style.color = '#fff'
        player.style.background = 'red';

}

