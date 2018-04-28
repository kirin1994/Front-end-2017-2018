
const canvas = document.getElementById('stage');
const context = canvas.getContext('2d');

const PLAYER_SIZE = 25;

const SPEED = 10;

function drawPlayer(player) {
    context.beginPath();
    context.rect(player.position.x, player.position.y, PLAYER_SIZE, PLAYER_SIZE);
    context.fillStyle = player.color;
    context.fill();
    context.closePath();
}

/* Ticker */

const TICKER_INTERVAL = 100;

const ticker$ = Rx.Observable
    .interval(TICKER_INTERVAL, Rx.Scheduler.requestAnimationFrame)
    .map(() => ({
        time: Date.now(),
        deltaTime: null
    }))
    .scan(
        (previous, current) => ({
            time: current.time,
            deltaTime: (current.time - previous.time) / 1000
        })
    );

const MOVE_KEYS = {
    left: 37,
    right: 39
};

const input$ = Rx.Observable
    .merge(
        Rx.Observable.fromEvent(document, 'keydown', event => {
            switch (event.keyCode) {
                case 38:
                    return 1;
                case 39:
                    return 2;
                case 37:
                    return 4;
                case 40:
                    return 3;
                default:
                    return 0;
            }
        }),
        Rx.Observable.fromEvent(document, 'keyup', event => 0)
    )
    .distinctUntilChanged();

const INITIAL_OBJECTS = {
    computer: {
        color: "red",
        position: {
            x: canvas.width / 2,
            y: canvas.height / 2
        },
    },

    player: {
        color: "green",
        position: {
            x: canvas.width / 4,
            y: canvas.height / 4
        },
    },
};

function moveObj(object, move) {
    let objX = object.position.x;
    let objY = object.position.y;
    switch (move) {

        case 1:
            if ((objY -= PLAYER_SIZE) > 0)
                object.position.y -= PLAYER_SIZE;
            break;
        case 2:
            if ((objX += PLAYER_SIZE) < canvas.width)
                object.position.x += PLAYER_SIZE;
            break;
        case 3:
            if ((objY += PLAYER_SIZE) < canvas.height)
                object.position.y += PLAYER_SIZE;
            break;
        case 4:
            if ((objX -= PLAYER_SIZE) > 0)
                object.position.x -= PLAYER_SIZE;
            break;
        default:
            break;
    }
}

drawPlayer(INITIAL_OBJECTS.computer);
drawPlayer(INITIAL_OBJECTS.player);

const objects$ = ticker$
    .withLatestFrom(input$)
    .scan(({ computer, player }, [ticker, keyInput]) => {

        let move = Math.floor((Math.random() * 4) + 1);
        moveObj(computer, move);
        moveObj(player, keyInput)

        if(collision)

        return {
            computer: computer,
            player: player
        };

    }, INITIAL_OBJECTS);


function collision(player, computer) {
    return computer.position.x > player.x - player.width / 2
        && computer.position.x < player.x + player.width / 2
        && computer.position.y > player.y - player.height / 2
        && computer.position.y < player.y + player.height / 2;
}

function update([ticker, objects]) {

    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer(objects.computer);
    drawPlayer(objects.player)

}

const game = Rx.Observable
    .combineLatest(ticker$, objects$)
    .subscribe(update);