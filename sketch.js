var ball, dbBall, position;

function setup() {


    database = firebase.database();
    console.log(database);
    dbBall = database.ref('ball/position');
    dbBall.on("value", readPosition, showError);


    createCanvas(500, 500);
    dbBall = createSprite(250, 250, 10, 10);
    dbBall.shapeColor = "red";
}

function draw() {
    background("white");

    if (position !== undefined) {

        if (keyDown(LEFT_ARROW)) {
            writePosition(-1, 0);
        }
        else if (keyDown(RIGHT_ARROW)) {
            writePosition(1, 0);
        }
        else if (keyDown(UP_ARROW)) {
            writePosition(0, -1);
        }
        else if (keyDown(DOWN_ARROW)) {
            writePosition(0, +1);
        }
    }
    drawSprites();
}

function writePosition(x, y) {
    database.ref('ball/position').set({

        'x': position.x + x,
        'y': position.y + y

    })
}

function readPosition(data) {
    position = data.val();
    console.log(position);
    dbBall.x = position.x;
    dbBall.y = position.y;
}

function showError() {
    console.log("showError");
}





