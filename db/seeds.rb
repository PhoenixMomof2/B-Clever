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

puts "Done seeding!"