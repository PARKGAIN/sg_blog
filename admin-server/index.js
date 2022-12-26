const express = require("express");
const app = express();
let cors = require("cors");
const bodyParser = require("body-parser");
const { newEnforcer } = require("casbin");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.listen(5000, function () {});

async function managerLogin() {
  const enforcer = await newEnforcer("basic_model.conf", "./basic_policy.csv");
  const sub = "gain";
  const obj = "data1";
  const act = "read";

  const res = await enforcer.enforce(sub, obj, act);

  if (res) {
    console.log("관리자 로그인 성공");
    return res;
  } else {
    console.log("관리자 로그인 error");
  }
}

app.get("/admin", async (req, res) => {
  try {
    managerLogin();
    res.send({ data: success });
  } catch {
    res.send("error");
  }
});
