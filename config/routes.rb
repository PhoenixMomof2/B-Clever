Rails.application.routes.draw do
  # Questions
  get "/new_quiz", to: "questions#new_quiz"
  
  resources :kids
  resources :parents
  resources :allowances

  # Allowances
  post "/parent_allowances", to: "allowances#parent_allowances"
  get "/kid_allowances", to: "allowances#kid_allowances"
  patch "/kid_allowances/:id", to: "allowances#update_parent_allowance"
  delete "/kid_allowances/:id", to: "allowances#destroy_parent_allowance"
  
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