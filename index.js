//set up arrays

//first 2 are all 256x1 arrays not 16x16
let japan2007 = [
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

function Comparator(a, b) {
    return a[2] < b[2] ? 1 : -1;
}

String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
}

//16x16 bool array for visited
let visited = Array(16).fill().map(() => Array(16).fill(false));

//16x16 array for weights
let array = Array(16).fill().map(() => Array(16).fill(0));

//for weight updating
let updated = Array(16).fill().map(() => Array(16).fill(false));
updated[7][7] = true;
updated[7][8] = true;
updated[8][7] = true;
updated[8][8] = true;

//init floodfill array
for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        array[i][j] = Math.round(Math.abs(i-7.5) + Math.abs(j-7.5) - 1);
    }
}

let current_position = [0, 0];
let goal = [7.5, 7.5];

let stack = [[0, 0]];



document.onload = updateCanvas();

function updateCanvas() {
    //cell size (px)
    let cell_size = 40;


    //first canvas
    let c = document.getElementById("canvas");
    let ctx = c.getContext('2d');
    ctx.canvas.height = cell_size * 16;
    ctx.canvas.width = cell_size * 16;
    ctx.font = `${cell_size/2}px Arial`;
    
    //current position
    ctx.fillStyle = "green";
    ctx.fillRect(cell_size*current_position[0], cell_size*current_position[1], cell_size, cell_size);
    
    //maze walls and weights
    ctx.fillStyle = "black";
    for (let i=0; i<16; i++) {
        for (let j=0; j<16; j++) {
            //binary representation
            let bin = japan2007[16*i+j].toString(2);
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
            ctx.fillText(array[i][j], cell_size*i + cell_size/4, cell_size*j + cell_size*3/4);
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



        }
    }
}

//pos is [x, y]
function update_weights(pos) {
    let temp_stack = [[pos[0], pos[1], 0]];
    while (temp_stack.length > 0) {
        let cur = temp_stack.shift();
        let x = cur[0];
        let y = cur[1];
        let val = cur[2];
        console.log(x, y, val);
        console.log(temp_stack);
        if (updated[x][y] && val > array[x][y]) {
            val = array[x][y];
        }
        else {
            array[x][y] = val;
        }
        updated[x][y] = true;
        //check surrounding cells
        let bin = see[16*x+y].toString(2).lpad('0', 4);
        //North
        if (bin.charAt(bin.length - 3) == "0") {
            if (visited[x][y-1]) {
                visited[x][y-1] = false;
                temp_stack.push([x, y-1, val+1]);
            }
        }
        //East
        if (bin.charAt(bin.length - 2) == "0") {
            if (visited[x+1][y]) {
                visited[x+1][y] = false;
                temp_stack.push([x+1, y, val+1]);
            }
        }
        //South
        if (bin.charAt(bin.length - 1) == "0") {
            if (visited[x][y+1]) {
                visited[x][y+1] = false;
                temp_stack.push([x, y+1, val+1]);
            }
        }
        //West
        if (bin.charAt(bin.length - 4) == "0") {
            if (visited[x-1][y]) {
                visited[x-1][y] = false;
                temp_stack.push([x-1, y, val+1]);
            }
        }
        updateCanvas();
    }
}

function Step() {
    if (stack.length > 0) {
        current_position = stack.pop();
        let x = current_position[0];
        let y = current_position[1];
        visited[x][y] = true;
        if (array[x][y] == 0) {
            console.log("VICTORY");
            update_weights([x,y]);
            stack = [[0,0]];
            array[x][y] = 0;
            visited = Array(16).fill().map(() => Array(16).fill(false));
            return true;
        }

        //x, y, weight
        let to_visit = [];

        //update what is seen
        see[16*x+y] = japan2007[16*x+y];
        //check surrounding cells
        let bin = see[16*x+y].toString(2).lpad('0', 4);
        //North
        if (bin.charAt(bin.length - 3) == "0") {
            if (!visited[x][y-1]) {
                to_visit.push([x, y-1, array[x][y-1]]);
            }
        }
        //East
        if (bin.charAt(bin.length - 2) == "0") {
            if (!visited[x+1][y]) {
                to_visit.push([x+1, y, array[x+1][y]]);
            }
        }
        //South
        if (bin.charAt(bin.length - 1) == "0") {
            if (!visited[x][y+1]) {
                to_visit.push([x, y+1, array[x][y+1]]);
            }
        }
        //West
        if (bin.charAt(bin.length - 4) == "0") {
            if (!visited[x-1][y]) {
                to_visit.push([x-1, y, array[x-1][y]]);
            }
        }
        to_visit.sort(Comparator);
        for (let elem of to_visit) {
            stack.push([elem[0], elem[1]]);
        }

    } else {
        console.log("EMPTY STACK");
    }
    updateCanvas();
}

function Run() {
    while (!Step()) {}
}