//cell size (px)
var cell_size = 40;

let maze = [
    0x0E, 0x0A, 0x09, 0x0C, 0x0A, 0x0A, 0x0A, 0x0A, 0x0A, 0x0A, 0x08, 0x0A, 0x0A, 0x0A, 0x08, 0x09,
    0x0C, 0x09, 0x05, 0x06, 0x08, 0x0A, 0x0A, 0x0A, 0x0A, 0x0B, 0x06, 0x0A, 0x0A, 0x0A, 0x03, 0x05,
    0x05, 0x05, 0x05, 0x0C, 0x02, 0x0B, 0x0E, 0x08, 0x0A, 0x0A, 0x08, 0x0A, 0x08, 0x08, 0x09, 0x05,
    0x05, 0x04, 0x01, 0x06, 0x08, 0x0A, 0x09, 0x04, 0x0A, 0x0A, 0x00, 0x0A, 0x03, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x04, 0x09, 0x06, 0x09, 0x05, 0x04, 0x0A, 0x0A, 0x02, 0x0A, 0x0B, 0x05, 0x05, 0x05,
    0x05, 0x04, 0x03, 0x06, 0x0A, 0x02, 0x03, 0x06, 0x0A, 0x0A, 0x0A, 0x0A, 0x09, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x0D, 0x0D, 0x0D, 0x0C, 0x08, 0x0A, 0x0A, 0x0A, 0x0A, 0x09, 0x05, 0x05, 0x05, 0x05,
    0x06, 0x03, 0x04, 0x01, 0x04, 0x01, 0x05, 0x0C, 0x09, 0x0C, 0x08, 0x01, 0x05, 0x05, 0x05, 0x05,
    0x0C, 0x08, 0x01, 0x06, 0x01, 0x05, 0x04, 0x02, 0x03, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x05, 0x0D, 0x06, 0x01, 0x05, 0x0C, 0x0A, 0x01, 0x05, 0x05, 0x05, 0x05, 0x05, 0x05,
    0x05, 0x05, 0x05, 0x04, 0x09, 0x06, 0x03, 0x06, 0x0A, 0x02, 0x00, 0x03, 0x05, 0x04, 0x03, 0x05,
    0x05, 0x04, 0x03, 0x05, 0x05, 0x0C, 0x0A, 0x0A, 0x08, 0x09, 0x04, 0x0A, 0x01, 0x05, 0x0D, 0x05,
    0x05, 0x05, 0x0D, 0x05, 0x05, 0x04, 0x0A, 0x08, 0x03, 0x05, 0x06, 0x0A, 0x03, 0x05, 0x04, 0x01,
    0x05, 0x05, 0x04, 0x01, 0x04, 0x03, 0x0C, 0x02, 0x0B, 0x06, 0x08, 0x0A, 0x0A, 0x03, 0x05, 0x05,
    0x05, 0x06, 0x01, 0x07, 0x06, 0x08, 0x02, 0x0A, 0x0A, 0x0B, 0x06, 0x08, 0x0A, 0x0A, 0x00, 0x01,
    0x06, 0x0A, 0x02, 0x0A, 0x0A, 0x02, 0x0B, 0x0E, 0x0A, 0x0A, 0x0A, 0x02, 0x0A, 0x0A, 0x03, 0x07
];

let see = [
    0x0e, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x09,
    0x0c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01,
    0x06, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x02, 0x03
];

//16x16 bool array for visited
let visited = Array(16).fill().map(() => Array(16).fill(false));
visited[0][0] = true;

//16x16 array for weights
let array = Array(16).fill().map(() => Array(16).fill(0));

let stack = [];

//init floodfill array
for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        array[i][j] = Math.round(Math.abs(i-7.5) + Math.abs(j-7.5) - 1);
    }
}

String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}

let mouse = {
    pos: [0, 0],
    //direction 0=up, 1=right, 2=down, 3=left
    dir: 2,
    stepsTaken: 0,
    moveTo: function(x, y) {
        this.pos = [x, y];
    },
    moveForward: function() {
        switch (this.dir) {
            case 0:
                this.pos[1]--;
                break;
            case 1:
                this.pos[0]++;
                break;
            case 2:
                this.pos[1]++;
                break;
            case 3:
                this.pos[0]--;
                break;
        }
        this.stepsTaken++;
    },
    turnRight: function() {
        this.dir = (this.dir + 1) % 4;
    },
    turnLeft: function() {
        //+3 instead of -1 to avoid negative number for modulo
        this.dir = (this.dir + 3) % 4;
    },
    draw: function(ctx) {
        let x = this.pos[0] * cell_size + cell_size/2;
        let y = this.pos[1] * cell_size + cell_size/2;
        ctx.beginPath();
        ctx.arc(x, y, cell_size * 0.35, 0, 2 * Math.PI);
        ctx.closePath();
        switch (this.dir) {
            case 0:
                ctx.moveTo(x, y - cell_size * 0.1);
                ctx.lineTo(x, y - cell_size * 0.45);
                break;
            case 1:
                ctx.moveTo(x + cell_size * 0.1, y);
                ctx.lineTo(x + cell_size * 0.45, y);
                break;
            case 2:
                ctx.moveTo(x, y + cell_size * 0.1);
                ctx.lineTo(x, y + cell_size * 0.45);
                break;
            case 3:
                ctx.moveTo(x - cell_size * 0.1, y);
                ctx.lineTo(x - cell_size * 0.45, y);
                break;
        }
        ctx.stroke();
    }
};

function updateCanvas() {
    //first canvas
    let c = document.getElementById("canvas");
    let ctx = c.getContext('2d');
    ctx.canvas.height = cell_size * 16;
    ctx.canvas.width = cell_size * 16;
    ctx.font = `${cell_size/2}px Arial`;
    
    //current position
    mouse.draw(ctx);
    
    //maze walls and weights
    ctx.fillStyle = "black";
    for (let i=0; i<16; i++) {
        for (let j=0; j<16; j++) {
            //binary representation
            let bin = maze[16*i+j].toString(2);
            bin = bin.lpad('0', 4);
            //North
            if (bin.charAt(bin.length - 3) == "1") {
                ctx.moveTo(i*cell_size, j*cell_size);
                ctx.lineTo((i+1)*cell_size, j*cell_size);
                ctx.stroke();
            }
            //East
            if (bin.charAt(bin.length - 2) == "1") {
                ctx.moveTo((i+1)*cell_size, j*cell_size);
                ctx.lineTo((i+1)*cell_size, (j+1)*cell_size);
                ctx.stroke();
            }
            //South
            if (bin.charAt(bin.length - 1) == "1") {
                ctx.moveTo((i)*cell_size, (j+1)*cell_size);
                ctx.lineTo((i+1)*cell_size, (j+1)*cell_size);
                ctx.stroke();
            }
            //West
            if (bin.charAt(bin.length - 4) == "1") {
                ctx.moveTo((i)*cell_size, (j)*cell_size);
                ctx.lineTo((i)*cell_size, (j+1)*cell_size);
                ctx.stroke();
            }
        }
    }

    //second canvas
    c = document.getElementById("canvas1");
    ctx = c.getContext('2d');
    ctx.canvas.height = cell_size * 16;
    ctx.canvas.width = cell_size * 16;
    ctx.font = `${cell_size/2}px Arial`;


    //maze walls and weights
    ctx.fillStyle = "black";
    for (let i=0; i<16; i++) {
        for (let j=0; j<16; j++) {
            //binary representation
            let bin = see[16*i+j].toString(2);
            //North
            if (bin.charAt(bin.length - 3) == "1") {
                ctx.moveTo(i*cell_size, j*cell_size);
                ctx.lineTo((i+1)*cell_size, j*cell_size);
                ctx.stroke();
            }
            //East
            if (bin.charAt(bin.length - 2) == "1") {
                ctx.moveTo((i+1)*cell_size, j*cell_size);
                ctx.lineTo((i+1)*cell_size, (j+1)*cell_size);
                ctx.stroke();
            }
            //South
            if (bin.charAt(bin.length - 1) == "1") {
                ctx.moveTo((i)*cell_size, (j+1)*cell_size);
                ctx.lineTo((i+1)*cell_size, (j+1)*cell_size);
                ctx.stroke();
            }
            //West
            if (bin.charAt(bin.length - 4) == "1") {
                ctx.moveTo((i)*cell_size, (j)*cell_size);
                ctx.lineTo((i)*cell_size, (j+1)*cell_size);
                ctx.stroke();
            }

            if (visited[i][j]) {
                ctx.fillStyle = "YellowGreen";
            } else {
                ctx.fillStyle = "Orange";
            }
            ctx.fillRect(cell_size*i + 1, cell_size*j + 1, cell_size - 2, cell_size - 2);
            ctx.fillStyle = "Black";
            ctx.fillText(array[i][j], cell_size*i + cell_size/4, cell_size*j + cell_size*3/4);
           
        }
    }
}


function Step() {
    while (stack.length > 0) {
        let cell = stack.pop();
        let val = array[cell[0]][cell[1]];
        let bin = see[16*cell[0]+cell[1]].toString(2).lpad('0', 4);
        let min_val = 256;
        //North
        if (bin.charAt(bin.length - 3) == "0") {
            if (array[cell[0]][cell[1] - 1] < min_val) {
                min_val = array[cell[0]][cell[1] - 1];
            }
        }
        //East
        if (bin.charAt(bin.length - 2) == "0") {
            if (array[cell[0] + 1][cell[1]] < min_val) {
                min_val = array[cell[0] + 1][cell[1]];
            }
        }
        //South
        if (bin.charAt(bin.length - 1) == "0") {
            if (array[cell[0]][cell[1] + 1] < min_val) {
                min_val = array[cell[0]][cell[1] + 1];
            }
        }
        //West
        if (bin.charAt(bin.length - 4) == "0") {
            if (array[cell[0] - 1][cell[1]] < min_val) {
                min_val = array[cell[0] - 1][cell[1]];
            }
        }
        if (val != min_val + 1) {
            array[cell[0]][cell[1]] = min_val + 1;

            //push to stack
            //north
            if (bin.charAt(bin.length - 3) == "0") {
                stack.push([cell[0], cell[1] - 1]);
            }
            //East
            if (bin.charAt(bin.length - 2) == "0") {
                stack.push([cell[0] + 1, cell[1]]);
            }
            //South
            if (bin.charAt(bin.length - 1) == "0") {
                stack.push([cell[0], cell[1] + 1]);
            }
            //West
            if (bin.charAt(bin.length - 4) == "0") {
                stack.push([cell[0] - 1, cell[1]]);
            }
        }
    }
}


function Move() {
    let cell = mouse.pos;
    stack.push([cell[0], cell[1]]);
    Step();
    let bin = see[16*cell[0]+cell[1]].toString(2).lpad('0', 4);
    let min_val = 256;
    let min_direction = -1;
    let go_straight = false;
    //North
    if (bin.charAt(1) == "0") {
        if (array[cell[0]][cell[1] - 1] < min_val) {
            min_val = array[cell[0]][cell[1] - 1];
            min_direction = 0;
        }
    }
    //East
    if (bin.charAt(2) == "0") {
        if (array[cell[0] + 1][cell[1]] < min_val) {
            min_val = array[cell[0] + 1][cell[1]];
            min_direction = 1;
            go_straight = false;
        } else if (array[cell[0] + 1][cell[1]] == min_val && mouse.dir == 1) {
            go_straight = true;
        } 
    }
    //South
    if (bin.charAt(3) == "0") {
        if (array[cell[0]][cell[1] + 1] < min_val) {
            min_val = array[cell[0]][cell[1] + 1];
            min_direction = 2;
            go_straight = false;
        } else if (array[cell[0]][cell[1] + 1] == min_val && mouse.dir == 2) {
            go_straight = true;
        } 
    }
    //West
    if (bin.charAt(0) == "0") {
        if (array[cell[0] - 1][cell[1]] < min_val) {
            min_val = array[cell[0] - 1][cell[1]];
            min_direction = 3;
            go_straight = false;
        } else if (array[cell[0] - 1][cell[1]] == min_val && mouse.dir == 3) {
            go_straight = true;
        } 
    }

    if (min_direction == mouse.dir || go_straight) {
        mouse.moveForward();
    } else {
        while (min_direction != mouse.dir) {
            mouse.turnRight();
        }
        mouse.moveForward();
    }

    //new mouse position
    cell = mouse.pos;
    visited[cell[0]][cell[1]] = true;
    bin = maze[16*cell[0]+cell[1]].toString(2).lpad('0', 4);
    see_bin = see[16*cell[0]+cell[1]].toString(2).lpad('0', 4);
    //if wall exists but not seen, add wall on both sides
    //North
    if (bin.charAt(1) == "1" && see_bin.charAt(1) == "0") {
        see[(cell[0])*16+cell[1]-1] = see[(cell[0])*16+cell[1]-1] | 0b0001;
    }
    //East
    if (bin.charAt(2) == "1" && see_bin.charAt(2) == "0") {
        see[(cell[0]+1)*16+(cell[1])] = see[(cell[0]+1)*16+(cell[1])] | 0b1000;
    }
    //South
    if (bin.charAt(3) == "1" && see_bin.charAt(3) == "0") {
        see[(cell[0])*16+cell[1]+1] = see[(cell[0])*16+cell[1]+1] | 0b0100;
    }
    //West
    if (bin.charAt(0) == "1" && see_bin.charAt(0) == "0") {
        see[(cell[0]-1)*16+(cell[1])] = see[(cell[0]-1)*16+(cell[1])] | 0b0010;
    }
    see[cell[0]*16+cell[1]] = maze[cell[0]*16+cell[1]];
    Step();
    updateCanvas();
    if (array[cell[0]][cell[1]] == 0) {
        mouse.moveTo(0, 0);
        console.log("Steps taken: " + mouse.stepsTaken);
        mouse.stepsTaken = 0;
        visited = Array(16).fill().map(() => Array(16).fill(false));
        visited[0][0] = true;
        updateCanvas();
    }

}

function ZoomIn() {
    cell_size += 5;
    updateCanvas();
}

function ZoomOut() {
    cell_size -= 5;
    updateCanvas();
}

document.onload = updateCanvas();