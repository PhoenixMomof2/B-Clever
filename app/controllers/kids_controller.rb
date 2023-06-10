class KidsController < ApplicationController
  skip_before_action :authorize_kid, only: [:create, :index]
  skip_before_action :authorize_parent, only: [:create, :show, :index] 

  #SignUp
  def create
    kid = Kid.create!(kid_params)
    session[:kid_id] = kid.id
    render json: kid, status: 201
  end

  def show  
    render json: @current_kid, status: :ok
  end

  def index
    render json: Kid.all, status: :ok
  end
  
  private
  def kid_params
    params.require(:kid).permit(:name, :password, :password_confirmation, :age, :avatar, :grade)
  end
end