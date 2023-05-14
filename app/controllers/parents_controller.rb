class ParentsController < ApplicationController
  skip_before_action :authorize_parent, only: [:create, :index]
  

  #SignUp
  def create
    parent = Parent.create!(parent_params)
    session[:parent_id] = parent.id
    render json: parent, status: 201
  end

  # GET /parents
  def index 
    render json: Parent.all, status: :ok
  end

  # GET /parent_profile
  def show
    # byebug
    render json: @current_parent, status: :ok
  end

  private
  def parent_params
    params.permit(:name, :password, :password_confirmation, :age, :state)
  end
end
