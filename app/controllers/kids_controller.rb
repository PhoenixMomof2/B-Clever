class KidsController < ApplicationController
  skip_before_action :authorize_kid, only: :index
  skip_before_action :authorize_parent, only: [:show, :index] 

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