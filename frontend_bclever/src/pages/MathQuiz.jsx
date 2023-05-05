import React from 'react';
import Expression from './Expression'
import ReactDOM from 'react-dom/client' 

const TIME = 30; // Initial game duration, in seconds



class Timer extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.state = this.secondsToTimeObject(Math.floor((props.endTime - Date.now())/1000));
  }
  
  componentDidMount() {
    this.continouslyUpdateTime();
  }
  
  componentDidUpdate() {
    this.continouslyUpdateTime();
  }
  
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  
  continouslyUpdateTime() {
    this.updateTime();
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const {m, s} = this.state;
      if(m > 0 || s > 0) {
        this.continouslyUpdateTime();
      }
      else {
        this.props.onTimerEnd();
      }
    }, 50);
  }
  
  updateTime() {
    const {endTime} = this.props;
    const {m, s} = this.state;
    const remaining = Math.floor((endTime - Date.now()) / 1000);
    
    if(remaining !== m*6 + s) {
      this.setState(this.secondsToTimeObject(remaining));
    }
  }
  
  secondsToTimeObject(s) {
    return {m: Math.floor(s / 60), s: s % 60};
  }
  
  render() {
    const {m, s} = this.state;
    const remaining = m*60 + s;
    return (
      <div className={`timer ${remaining < 5 && remaining > 0? 'animated bounceIn red': ''}`} ref={ref => this.ref = ref}>{m > 9 ? '' : '0'}{m} : {s > 9 ? '' : '0'}{s}</div>
      );
    }
  }
  
  class Header extends React.PureComponent {
    
    constructor(props) {
      super(props);
      
      this.state = {
        score: 0,
      change: 0
    };
  }
  
  static getDerivedStateFromProps(props, state) {
    return {
      score: props.status.score,
      change: props.status.score - state.score
    };
  }
  
  getSnapshotBeforeUpdate() {
    if(this.change) {
      const node = ReactDOM.findDOMNode(this.change);
      node.className = 'change animated hidden';
    }
  }
  
  componentDidUpdate() {
    setTimeout(() => { // Timeout is needed for the animation to properly work
      if(this.change) {
        const {change} = this.state;
        const node = ReactDOM.findDOMNode(this.change);
        node.classList.remove('hidden');
        node.className +=
        change > 0 ? ' btn choice-positive fadeOutUp' : ' btn choice-negative fadeOutDown';
      }
    }, 0);
  }
  
  format(score) {
    return score.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
  }
  
  render() {
    const {onTimerEnd, endTime, status: {multiplier, max, asked, answered}} = this.props;
    const {score, change} = this.state;
    return (
      <div className='header'>
        <div className='container'>
          <Timer endTime={endTime} onTimerEnd={onTimerEnd}/>
          <div className="flex w-32 border btn align-middle bg-purple-600 p-3 align-center text-xs font-bold uppercase rounded-full ">
            <div className="flex divide-y-2 justify-center">up to {max}</div>
            <div className="flex divide-y-2 justify-center">{answered}/{asked}</div>
            <div className="flex divide-y-2 justify-center">
              {this.format(score)}
              {multiplier > 1 &&
              <div className='multiplier'>x{multiplier}</div>}
              {change !== 0 &&
              <div ref={ref => this.change = ref} className='change animated'>{change > 0 ? '+' : ''}{change}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class MultipleChoice extends React.PureComponent {
  
  render() {
    const {values, selected, correct, onClick} = this.props;
    return (
      <div className="flex justify-items-center p-6 bg-yellow-300">
        {values.map(res => (
          <div key={res} res={res} className={`divide-y choice w-20 h-20 quiz-btn animated ${selected === res ? (correct ? 'tada choice-positive divide-y' : 'choice-negative divide-y h-20 w-20 quiz-btn wobble') : ''}`} onClick={() => onClick(res)}>{res}</div>
          ))}
      </div>
    );
  }
}

class Badge extends React.PureComponent {
  render() {
    const {score} = this.props;
    return (
      <div className='badge'>
  <div className='score'>{score}</div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

  </div>
    );
  }
}

class Summary extends React.PureComponent {
  
  componentDidMount() {
    // Hide the summary initially until it's rendered once to skip the initial bounce up animation
    this.mounted = true; 
  }
  
  render() {
    const {show, score, onPlayAgain} = this.props;
    return (
      <div className={`summary ${!this.mounted ? 'hidden' : ''} animated ${show ? 'bounceInDown' : 'bounceOutUp'}`}>
        <div className='title'>
          <div className='big'>GOOD JOB!</div>
          Your Score is:
        </div>
        <Badge score={score}/>
        <div className='button' onClick={onPlayAgain}>PLAY AGAIN</div>
      </div>
    );
  }
}

class MathQuiz extends React.PureComponent {
  
  constructor(props) {
    super(props);
    
    const status = this.getInitialStatus();
    
    this.state = {
      status,
      selected: -1,
      showSummary: false,
      endTime: Date.now() + TIME*1000,
      prev: this.generateProblem(status.max),
      next: this.generateProblem(status.max)
    };
  }
  
  getInitialStatus() {
    return {
      score: 0,
      max: 10,
      asked: 0,
      answered: 0,
      multiplier: 1
    };
  }
  
  randomNumber(max) {
    return Math.floor(Math.random()*max);
  }
  
  generateProblem(max) {
    const a = this.randomNumber(max);
    const b = this.randomNumber(max - a);
    return {a, b, choices: this.getChoices(a, b, max)};
  }
  
  increaseScore() {
    const {status} = this.state;
    let endTime = this.state.endTime;
    let max = status.max;
    
    // Add time and increase max every 5 correct answers
    if(status.answered % 5 === 4) {
      endTime += 15000;
      max *= 2;
    }
    
    this.setState({
      endTime,
      status: {
        ...status,
        multiplier: Math.min(status.multiplier + 1, 5), 
        score: status.score + (max * status.multiplier),
        asked: status.asked + 1,
        answered: status.answered + 1,
        max
      }
    });
  }
  
  decreaseScore() {
    const {status} = this.state;
    this.setState({
      status: {
        ...status,
        multiplier: 1,
        score: Math.max(0, status.score - Math.floor(status.max*0.25)), // Decrease by MAX * <Correct Answer Probability>
        asked: status.asked + 1
      }
    }); 
  }
  
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  getChoices(a, b, max) {
    const result = a + b;
    const choices = [result];
    
    while(choices.length < 4) {
      const choice = this.randomNumber(max);
      if(!choices.includes(choice)) {
        choices.push(choice);
      }
    }
    return this.shuffle(choices);
  }
  
  handleOnClick = value => {
    const {prev: {a, b}, selected} = this.state;
    
    if(selected !== -1) return;
    
    if(value === a + b) {
      this.increaseScore();
    }
    else {
      this.decreaseScore();
    }
    
    this.setState({selected: value});
    
    setTimeout(() => {
      this.setState({
        prev: this.state.next,
        next: this.generateProblem(this.state.status.max),
        selected: -1
      });
    }, 1500);
  };
  
  handleOnTimerEnd = () => {
    this.setState({showSummary: true});
  }
  
  handleOnPlayAgain = () => {
    const status = this.getInitialStatus();
    this.setState({
      status,
      showSummary: false,
      endTime: Date.now() + TIME*1000,
      prev: this.generateProblem(status.max),
      next: this.generateProblem(status.max)
    });
  }
  
  render() {
    const {prev, next, status, selected, showSummary, endTime} = this.state;
    
    return (      
      <div className="rounded bg-gray-400 p-5">
        <header className="pb-2">
          <h1 className="text-3xl font-bold tracking-tight text-center text-gray-900">Math Quiz</h1>
          <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 bg-blue-200 justify-center">
            <main>
              <div className="text-center mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <Header status={status} endTime={endTime} onTimerEnd={this.handleOnTimerEnd}/>
                <Expression from={`${prev.a} + ${prev.b} = `} to={`${next.a} + ${next.b} = `} transitioning={selected !== -1}/>
              </div>
            <div className="text-center">
              <div key={prev.id} className="mx-auto text-center max-w-7xl text-xl fw-bold text-purple-950 bg-blue-700 grid-flow-col grid">
                <MultipleChoice values={prev.choices} selected={selected} onClick={this.handleOnClick} correct={selected === prev.a + prev.b}/>
              </div>
            </div>
            <Summary show={showSummary} score={status.score} onPlayAgain={this.handleOnPlayAgain}/>
            </main>
          </div>
        </header>
      </div>   
    );
  }
}

export default MathQuiz

// import React, { useState } from "react"

// const MathQuiz = () => {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [sum, setSum] = useState(0);
//   const [score, setScore] = useState(0);
//   const generateQuestion = () => {
//     setNum1(Math.ceil(Math.random() * 10));
//     setNum2(Math.ceil(Math.random() * 10));
//   };
//   const submit = (e) => {
//     e.preventDefault();
//     const formValid = +sum >= 0;
//     if (!formValid) {
//       return;
//     }
//     if (+num1 + +num2 === +sum) {
//       setScore((score) => score + 1);
//     }
//     generateQuestion();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={submit}>
//         <div>
//           <h1>Addition Quiz</h1>
//           <h2>Score: {score}</h2> 
//           <div>
//             <h2>
//               {num1}
//               Expression: 20 + 20
//             </h2>
//             <ul>
//               <li>40</li>
//               <li>30</li>
//               <li>100</li>
//               <li>20</li>
//             </ul>
//           </div>
//           {/* <input value={sum} onChange={(e) => setSum(e.target.value)} /> */}
//         </div>
//         <button type="submit">check</button>
//       </form>
//       <button type="button" onClick={generateQuestion}>
//         start game
//       </button>
//     </div>
//   );
// }

// export default MathQuiz
