/**
 * Almost immutable approach ;)
 * Call function game() if you want to play
 */
function game() {
    const PLAYERS_NUMBER = 4,
        MAX_HP = 10,
        players = [];
    for (let i = 0; i < PLAYERS_NUMBER; i++) {
        players.push(createPlayer(i, MAX_HP));
    }
    const wonId = duel(players);
    console.log(`Player ${wonId} has won`);
}

function duel(players) {
    let currentPlayerPos = 0,
        round = 1;
    while (true) {
        if (currentPlayerPos === 0) {
            console.log(`Round ${round++}`)
        }
        id2 = (currentPlayerPos + 1) % players.length;
        players = hit(currentPlayerPos, id2, players);
        if (players.length < 2) {
            return players[0].id;
        }
        currentPlayerPos = (currentPlayerPos + 1) % players.length;
    }
}

function hit(id1, id2, players) {
    const dmg = Math.round(10 * Math.random());
    players[id2].hp -= dmg;
    console.log(`Player ${players[id1].id} hit player ${players[id2].id} with ${dmg} damage.`);
    if (players[id2].hp <= 0) {
        console.log(`Player ${players[id2].id} is dead.`);
        players.splice(id2, 1);
    }
    return players;
}

function createPlayer(id, hp) {
    return {
        id,
        hp
    }
}
