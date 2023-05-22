class KidsController < ApplicationController
  skip_before_action :authorize_kid, only: [:create, :index]
  # skip_before_action :authorize_parent, only: [:create, :show, :index]

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

  # def update
  #   kid = Kid.find(params[:id])
  #   if kid.update(kid_params)
  #     render json: kid, status: :ok
  #   else
  #     render json: kid.errors, status: :unprocessable_entity
  #   end
  # end
  
  private
  def kid_params
    params.permit(:name, :password, :password_confirmation, :age, :avatar, :grade)
  end
end
