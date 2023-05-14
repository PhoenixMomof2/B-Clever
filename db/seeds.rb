puts "🌱 Seeding B-Clever data..."

puts "Deleting B-Clever data...."
Kid.destroy_all
Parent.destroy_all
Allowance.destroy_all
Question.destroy_all
Choice.destroy_all


puts "Creating kids..."
kal = Kid.create!(name: "Kal", password: "player1", age: 8, avatar: "tchalla.jpg", grade: "2", wallet: 200.00)
miles = Kid.create!(name: "Miles", password: "player2", age: 6, avatar: "mbaku.jpg", grade: "1", wallet: 200.00)
reagan = Kid.create!(name: "Reagan", password: "player3", age: 6, avatar: "nakia.jpg", grade: "K", wallet: 200.00)
kali = Kid.create!(name: "Kali", password: "player4", age: 7, avatar: "shuri.jpg", grade: "2", wallet: 200.00)
gavin = Kid.create!(name: "Gavin", password: "player5", age: 8, avatar: "wkabi.jpg", grade: "2", wallet: 200.00) 
izzie = Kid.create!(name: "Izzie", password: "player6", age: 7, avatar: "okoye.jpg", grade: "K", wallet: 200.00)
  
puts "Creating parents..."
kandis = Parent.create!(name: "Kandis", password: "parent1", age: 39, state: "Virginia")
kara = Parent.create!(name: "Kara", password: "parent2", age: 39, state: "Maryland")
tyshelle = Parent.create!(name: "Tyshelle", password: "parent3", age: 35, state: "Maryland")
tineisha = Parent.create!(name: "Tineisha", password: "parent4", age: 35, state: "Maryland")
gara = Parent.create!(name: "Gara", password: "parent5", age: 42, state: "Maryland")
alisia = Parent.create!(name: "Alisia", password: "parent6", age: 44, state: "Georgia")
    
puts "Creating allowances..."
Allowance.create!([{balance: 25.00, kid: kal, parent: kandis},
  {balance: 25.00, kid: miles, parent: kara},
  {balance: 15.00, kid: reagan, parent: tyshelle},
  {balance: 35.00, kid: kali, parent: tineisha},
  {balance: 50.00, kid: gavin, parent: gara},
  {balance: 45.00, kid: izzie, parent: alisia}])
  
  puts "Creating questions..."
  100.times do |index|
    range = 1..100
    random_number1 = Random.rand(range)
    random_number2 = Random.rand(range)
    total = random_number1 + random_number2
    @question = Question.create(expression: "#{random_number1} + #{random_number2}")
     
    answers = Array.new(3) {Random.rand(range)}
    possible_choices = answers.map!{|answer| @question.choices.create(answer: answer, correct: false)}
    correct_answer = @question.choices.create(answer: total, correct: true)
    possible_choices << correct_answer
    end
  puts "Created #{Question.count} questions"
puts "Done seeding!"