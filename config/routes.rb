Rails.application.routes.draw do
  resources :kids
  resources :parents
  resources :allowances
  resources :questions
  resources :choices
  
  # Custom Question Routes
  get "/new_quiz", to: "questions#new_quiz"
  
  # Sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/login_parent", to: "sessions#login_parent"
  delete "/logout_parent", to: "sessions#logout_parent"

  # Kids
  get "/me", to: "kids#show"
  post "/signup", to: "kids#create"

  # Parents
  get "/parent_profile", to:"parents#show"
  post "/signup_parent", to: "parents#create"
end