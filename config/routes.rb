Rails.application.routes.draw do
  get "/new_quiz", to: "questions#new_quiz"
  
  resources :kids
  resources :parents
  resources :allowances
  post "/parent_allowances", to: "allowances#parent_allowances"
  # Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/login_parent", to: "sessions#login_parent"
  delete "/logout_parent", to: "sessions#logout_parent"

  # Kids
  get "/me", to: "kids#show"
  # post "/signup", to: "kids#create"

  # Parents
  get "/parent_profile", to:"parents#show"
  post "/signup_parent", to: "parents#create"
end