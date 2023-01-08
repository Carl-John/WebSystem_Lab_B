const add = require("./add");
const read = require("./read");

const cmd = process.argv;
const data = read();
const emp = {
  employee: cmd[3],
  role: cmd[4],
  department: cmd[5],
};
add(data, emp);
