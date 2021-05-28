var canvas = new fabric.Canvas("myCanvas");
var blockWidth = 30;
var blockHeight = 30;
var player_x = 10;
var player_y = 10
var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;

        block_object.scaleToWidth(blockWidth);
        block_object.scaleToHeight(blockHeight);
        block_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_object);
    });
}

function up() {
    console.log("playerX = ", player_x, "playerY", player_y);
    if (player_y >= 20) {
        player_y -= blockHeight;
        console.log("playerX = ", player_x, "playerY", player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    console.log("playerX = ", player_x, "playerY", player_y);
    if (player_y <= 458) {
        player_y += blockHeight;
        console.log("playerX = ", player_x, "playerY", player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    console.log("playerX = ", player_x, "playerY", player_y);
    if (player_x >= 20) {
        player_x -= blockWidth;
        console.log("playerX = ", player_x, "playerY", player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    console.log("playerX = ", player_x, "playerY", player_y);
    if (player_x <= 820) {
        player_x += blockWidth;
        console.log("playerX = ", player_x, "playerY", player_y);
        canvas.remove(player_object);
        player_update();
    }
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        console.log("Increase Size");
        blockHeight += 10;
        blockWidth += 10;
        document.getElementById("currentWidth").innerHTML = blockWidth;
        document.getElementById("currentHeight").innerHTML = blockHeight;
    }

    if (e.shiftKey == true && keyPressed == "77") {
        console.log("Decrease Size");
        blockHeight -= 10;
        blockWidth -= 10;
        document.getElementById("currentWidth").innerHTML = blockWidth;
        document.getElementById("currentHeight").innerHTML = blockHeight;
    }

    if (keyPressed == "38") {
        up();
        console.log("Up");
    }

    if (keyPressed == "40") {
        down();
        console.log("Down");
    }

    if (keyPressed == "37") {
        left();
        console.log("Left");
    }

    if (keyPressed == "39") {
        right();
        console.log("Right");
    }

    if (keyPressed == "87") {
        new_image("wall.jpg");
        console.log("Wall");
    }

    if (keyPressed == "71") {
        new_image("ground.png");
        console.log("Ground");
    }

    if (keyPressed == "76") {
        new_image("light_green.png");
        console.log("Light Grass");
    }

    if (keyPressed == "84") {
        new_image("trunk.jpg");
        console.log("Trunk");
    }

    if (keyPressed == "82") {
        new_image("roof.jpg");
        console.log("Roof");
    }

    if (keyPressed == "89") {
        new_image("yellow_wall.png");
        console.log("Yellow Wall");
    }

    if (keyPressed == "68") {
        new_image("dark_green.png");
        console.log("Dark Grass");
    }

    if (keyPressed == "85") {
        new_image("unique.png");
        console.log("Unique");
    }

    if (keyPressed == "67") {
        new_image("cloud.jpg");
        console.log("Clouds");
    }
}

// function clear() {
//     console.log("Clear Canvas");
//     canvas.remove(block_object);
// }
