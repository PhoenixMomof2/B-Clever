class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create

  # Login
  def create    
    kid = Kid.find_by(name: params[:name])
    if kid&.authenticate(params[:password])
      session[:kid_id] = kid.id
      render json: kid, status: 201
    else
      render json: { errors: "Invalid Kid Name or Password" }, status: 401
    end
  end

  # Logout
  def destroy
    session.delete :kid_id
    head :no_content
  end
end