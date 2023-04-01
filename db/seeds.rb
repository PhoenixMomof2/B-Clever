puts "🌱 Seeding..."

puts "Deleting Kid data...."
Kid.destroy_all

puts "Creating kids..."
Kid.create([
  {name: "Kal", password: "player1", age: 8, avatar:"T'Challa", grade: "2" },
  {name: "Miles", password: "player2", age: 6, avatar:"M'Baku", grade: "1" }, 
  {name: "Reagan", password: "player3", age: 6, avatar:"Nakia", grade: "K" },
  {name: "Kali", password: "player4", age: 7, avatar:"Shuri", grade: "2" },
  {name: "Gavin", password: "player5", age: 8, avatar:"W'Kabi", grade: "2" },
  {name: "Izzie", password: "player6", age: 7, avatar:"Okoye", grade: "K" },
  ])

Quiz.create([
  {id: 1, expression: "21 + 43",}, {id: 2, expression: "17 + 13",}, {id: 3, expression: "23 + 12", 
  }, {id: 4, expression: "13 + 56",}, {id: 5, expression: "49 + 9",}, {id: 6, expression: "36 + 14", 
  }, {id: 7, expression: "16 + 52",}, {id: 8, expression: "73 + 11",}, {id: 9, expression: "86 + 13", 
  }, {id: 10, expression: "15 + 31",}])

Choice([
  { 
    answer: "64",
    correct: true,
    quiz_id: 1
  },
  { 
    answer: "30",
    correct: true,
    quiz_id: 2
  },
  { 
    answer: "35",
    correct: true,
    quiz_id: 3
  },
  { 
    answer: "69",
    correct: true,
    quiz_id: 4
  },
  { 
  answer: "58",
  correct: true,
  quiz_id: 5
  },
  { 
  answer: "50",
  correct: true,
  quiz_id: 6
  },
  { 
  answer: "68",
  correct: true,
  quiz_id: 7
  },
  { 
  answer: "84",
  correct: true,
  quiz_id: 8
  },
  { 
  answer: "99",
  correct: true,
  quiz_id: 9
  },
  { 
  answer: "46",
  correct: true,
  quiz_id: 10
  },{ 
    answer: "74",
    correct: false,
    quiz_id: 1
  },
  { 
    answer: "20",
    correct: false,
    quiz_id: 2
  },
  { 
    answer: "32",
    correct: false,
    quiz_id: 3
  },
  { 
    answer: "59",
    correct: false,
    quiz_id: 4
  },
  { 
  answer: "58",
  correct: false,
  quiz_id: 5
  },
  { 
  answer: "50",
  correct: false,
  quiz_id: 6
  },
  { 
  answer: "68",
  correct: false,
  quiz_id: 7
  },
  { 
  answer: "84",
  correct: false,
  quiz_id: 8
  },
  { 
  answer: "99",
  correct: false,
  quiz_id: 9
  },
  { 
  answer: "46",
  correct: false,
  quiz_id: 10
  },
  { 
    answer: "54",
    correct: false,
    quiz_id: 1
  },
  { 
    answer: "29",
    correct: false,
    quiz_id: 2
  },
  { 
    answer: "33",
    correct: false,
    quiz_id: 3
  },
  { 
    answer: "67",
    correct: false,
    quiz_id: 4
  },
  { 
  answer: "58",
  correct: false,
  quiz_id: 5
  },
  { 
  answer: "50",
  correct: false,
  quiz_id: 6
  },
  { 
  answer: "68",
  correct: false,
  quiz_id: 7
  },
  { 
  answer: "84",
  correct: false,
  quiz_id: 8
  },
  { 
  answer: "99",
  correct: false,
  quiz_id: 9
  },
  { 
  answer: "46",
  correct: false,
  quiz_id: 10
  },
  { 
    answer: "62",
    correct: false,
    quiz_id: 1
  },
  { 
    answer: "40",
    correct: false,
    quiz_id: 2
  },
  { 
    answer: "36",
    correct: false,
    quiz_id: 3
  },
  { 
    answer: "62",
    correct: false,
    quiz_id: 4
  },
  { 
  answer: "58",
  correct: false,
  quiz_id: 5
  },
  { 
  answer: "50",
  correct: false,
  quiz_id: 6
  },
  { 
  answer: "68",
  correct: false,
  quiz_id: 7
  },
  { 
  answer: "84",
  correct: false,
  quiz_id: 8
  },
  { 
  answer: "99",
  correct: false,
  quiz_id: 9
  },
  { 
  answer: "46",
  correct: false,
  quiz_id: 10
  },
])

puts "Done seeding!"