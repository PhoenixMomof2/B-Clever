Rails.application.routes.draw do
  # Questions
  get "/new_quiz", to: "questions#new_quiz"
  
  resources :kids, only: :index
  resources :parents, only: :index
  resources :allowances, except: :show

  # Allowances
  post "/parent_allowances", to: "allowances#parent_allowances"
  get "/kid_allowances", to: "allowances#kid_allowances"
  patch "/kid_allowances/:id", to: "allowances#update_parent_allowance"
  delete "/kid_allowances/:id", to: "allowances#destroy_parent_allowance"
  
  # Sessions
  post "/login_kid", to: "sessions#login_kid"
  delete "/logout_kid", to: "sessions#logout_kid"
  post "/login_parent", to: "sessions#login_parent"
  delete "/logout_parent", to: "sessions#logout_parent"

  # Kids
  get "/me", to: "kids#show"

  # Parents
  get "/parent_profile", to:"parents#show"
  post "/signup_parent", to: "parents#signup_parent_kid"
end