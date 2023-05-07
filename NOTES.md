Question.create!([
  {id: 1, expression: "21 + 43", choices: [
    Choice.create(answer: 64, correct: true, question_id: 1),
    Choice.create(answer: 74, correct: false, question_id: 1),
    Choice.create(answer: 54, correct: false, question_id: 1),
    Choice.create(answer: 62, correct: false, question_id: 1),
    ]},  
  {id: 2, expression: "17 + 13", choices: [
    Choice.create(answer: 30, correct: true, question_id: 2),
    Choice.create(answer: 20, correct: false, question_id: 2),
    Choice.create(answer: 29, correct: false, question_id: 2),
    Choice.create(answer: 27, correct: false, question_id: 2),
    ]}, 
  {id: 3, expression: "23 + 12", choices: [
    Choice.create(answer: 35, correct: true, question_id: 3),
    Choice.create(answer: 32, correct: false, question_id: 3),
    Choice.create(answer: 33, correct: false, question_id: 3),
    Choice.create(answer: 36, correct: false, question_id: 3),
    ]}, 
  {id: 4, expression: "13 + 56", choices: [
    Choice.create(answer: 69, correct: true, question_id: 4),  
    Choice.create(answer: 59, correct: false, question_id: 4),
    Choice.create(answer: 67, correct: false, question_id: 4),
    Choice.create(answer: 62, correct: false, question_id: 4),
    ]}, 
  {id: 5, expression: "49 + 9", choices: [
  Choice.create(answer: 58, correct: true, question_id: 5),
  Choice.create(answer: 48, correct: false, question_id: 5),
  Choice.create(answer: 46, correct: false, question_id: 5),
  Choice.create(answer: 38, correct: false, question_id: 5),
    ]}, 
  {id: 6, expression: "36 + 14", choices: [
    Choice.create(answer: 50, correct: true, question_id: 6), 
    Choice.create(answer: 40, correct: false, question_id: 6),
    Choice.create(answer: 52, correct: false, question_id: 6),
    Choice.create(answer: 51, correct: false, question_id: 6),
    ]}, 
  {id: 7, expression: "16 + 52", choices: [
    Choice.create(answer: 68, correct: true, question_id: 7),
    Choice.create(answer: 68, correct: false, question_id: 7),
    Choice.create(answer: 68, correct: false, question_id: 7),
    Choice.create(answer: 68, correct: false, question_id: 7),
    ]}, 
  {id: 8, expression: "73 + 11", choices: [
  Choice.create(answer: 84, correct: true, question_id: 8),
  Choice.create(answer: 80, correct: false, question_id: 8),
  Choice.create(answer: 81, correct: false, question_id: 8),
  Choice.create(answer: 74, correct: false, question_id: 8),
    ]}, 
  {id: 9, expression: "86 + 13", choices: [
    Choice.create(answer: 99, correct: true,question_id: 9),
    Choice.create(answer: 95, correct: false, question_id: 9),
    Choice.create(answer: 100, correct: false, question_id: 9),
    Choice.create(answer: 97, correct: false, question_id: 9),
    ]}, 
  {id: 10, expression: "15 + 31", choices: [
    Choice.create(answer: 46, correct: true, question_id: 10),
    Choice.create(answer: 36, correct: false, question_id: 10),
    Choice.create(answer: 26, correct: false, question_id: 10),
    Choice.create(answer: 56, correct: false, question_id: 10),
    ]}
])    
/* div {
  user-select: none;
}
.container {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.game-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
.header {
  display: flex;
  align-items: flex-end;
  width: 100%;
  justify-content: center;
  background-color: #1abc9c;
  flex: 1;
  margin-bottom: 25px;
}
.header .container {
  margin-bottom: -25px;
}
.header .timer, .header .score {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(42, 58, 62, 0.1);
}
.header .timer {
  font-size: 18px;
  width: 100px;
  height: 50px;
  background-color: white;
  border-radius: 3px;
}
.header .timer.animated {
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
.header .timer.red {
  color: #e74c3c;
}
.header .status {
  display: flex;
  align-items: center;
  height: 44px;
  background-color: #1abc9c;
  border: 3px solid #fff;
  border-radius: 50px;
  color: #fff;
  position: relative;
  padding: 0 10px;
}
.header .status .status-item {
  height: 100%;
  border-right: 1px solid #fff;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.header .status .status-item:last-child {
  border-right: none;
}
.header .status .score {
  font-size: 26px;
}
.header .status .multiplier {
  position: absolute;
  right: -20px;
  top: 10px;
  background-color: #f1c40f;
  color: black;
  font-size: 18px;
  padding: 5px 8px;
  color: #2c3e50;
  transform: rotateZ(20deg);
}
.header .status .change {
  position: absolute;
  right: -15px;
  animation-duration: 2s;
  background-color: white;
  padding: 5px;
  font-size: 0.8em;
}
.header .status .change.hidden {
  visibility: hidden;
}
.header .status .change.positive {
  color: #2ecc71;
}
.header .status .change.negative {
  color: #e74c3c;
}
.body {
  display: flex;
  align-items: center;
  height: 40vh;
}
.body .expression {
  height: 80px;
  overflow: hidden;
}
.body .expression.transitioning .from, .body .expression.transitioning .to {
  transition: all 0.5s 1s cubic-bezier(0.25, 0.1, 0, 1);
  transform: translateY(-80px);
}
.body .expression .from, .body .expression .to {
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  transform: translateY(0);
}
.body .expression .text {
  margin-right: 20px;
  font-size: 52px;
}
.body .expression .box {
  border: 2px dashed #7f8c8d;
  width: 78px;
  height: 48px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #7f8c8d;
}
.multiple-choice {
  display: flex;
  flex: 1;
  justify-content: center;
}
.multiple-choice .choice {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #7f8c8d;
  color: #fff;
  width: 80px;
  height: 50px;
  border-radius: 3px;
  font-size: 24px;
  cursor: pointer;
  margin-right: 15px;
  box-shadow: 0px 4px 0px #465556;
}
.multiple-choice .choice:last-child {
  margin-right: 0;
}
.multiple-choice .choice.positive {
  background-color: #2ecc71;
}
.multiple-choice .choice.negative {
  background-color: #e74c3c;
}
.footer {
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1abc9c;
  margin-top: 25px;
}
.footer .container {
  margin-top: -25px;
}
.summary {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #fff;
}
.summary.hidden {
  visibility: hidden;
}
.summary .badge {
  position: relative;
  margin: 15px;
}
.summary .badge svg {
  width: 200px;
  height: 200px;
}
.summary .badge .score {
  font-size: 28px;
  color: #fff;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  text-align: center;
}
.summary .title {
  text-align: center;
  color: #95a5a6;
}
.summary .title .big {
  font-size: 24px;
  color: #2c3e50;
}
.summary .button {
  font-size: 20px;
  background-color: #1abc9c;
  color: #fff;
  padding: 5px 10px;
  font-weight: 400;
  border-radius: 3px;
  box-shadow: 0 3px 0 #2c3e50;
  cursor: pointer;
} */