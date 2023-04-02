Rails.application.routes.draw do
  resources :kids
  resources :quizzes
  # Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Users
  get "/me", to: "kids#show"
  post "/signup", to: "kids#create"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

end
