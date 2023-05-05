Rails.application.routes.draw do
  resources :kids
  resources :parents
  resources :allowances
  resources :quizzes
  resources :choices
  
  # Quiz
  get "/generate_expression", to: "quizzes#generate_expression"
  get "/set_quiz", to: "quizzes#set_quiz"
  # Choices
  get "/random_choices", to: "choices#generate_choices"
  # Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Users
  get "/me", to: "kids#show"
  post "/signup", to: "kids#create"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

end
