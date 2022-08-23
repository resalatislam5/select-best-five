document.getElementById('btn-masi').addEventListener('click', function () {
    SelectedBtn('btn-masi', 'selected-v')

})
document.getElementById('btn-Neymar').addEventListener('click', function () {
    SelectedBtn('btn-Neymar', 'selected-v')

})
document.getElementById('btn-Kylian').addEventListener('click', function () {
    SelectedBtn('btn-Kylian', 'selected-v')

})
document.getElementById('btn-Machado').addEventListener('click', function () {
    SelectedBtn('btn-Machado', 'selected-v')

})
document.getElementById('btn-Ramos').addEventListener('click', function () {
    SelectedBtn('btn-Ramos', 'selected-v')

})
document.getElementById('btn-Renato').addEventListener('click', function () {
    SelectedBtn('btn-Renato', 'selected-v')

})
//btn-calculate-player
document.getElementById('btn-calculate-player').addEventListener('click', function () {
    const selectedV = document.getElementById('selected-v');
    const perplayerValue = inputValue('per-player')
    const perplayerResult = selectedV.children.length * perplayerValue;
    const insertPlayerCost = document.getElementById('insert-player-cost');
    insertPlayerCost.innerText =  perplayerResult;
})
// insert-Total-cost
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const expenses = textValue('insert-player-cost');
    const managerCost = inputValue('manager-cost');
    const coachCost = inputValue('coach-cast');
    const totalCost = expenses + managerCost + coachCost;
    const insertPlayerCost = document.getElementById('insert-Total-cost');
    insertPlayerCost.innerText =  totalCost;
})
