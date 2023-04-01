class KidsController < ApplicationController
  skip_before_action :authorize, only: :create

  #SignUp
  def create
    kid = Kid.create!(kid_params)
    session[:kid_id] = kid.id
    render json: kid, status: 201
  end

  def show
    render json: current_kid, status: :ok
  end

  private
  def kid_params
    params.permit(:name, :password, :password_confirmation, :age, :avatar, :grade)
  end
end
