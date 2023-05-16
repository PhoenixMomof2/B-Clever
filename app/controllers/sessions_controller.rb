class SessionsController < ApplicationController
  skip_before_action :authorize_kid, only: :create
  skip_before_action :authorize_parent, only: :login_parent

  # Login Kid
  def create    
    kid = Kid.find_by(name: params[:name])
    if kid&.authenticate(params[:password])
      session[:kid_id] = kid.id
      render json: kid, status: 201
    else
      render json: { errors: "Invalid Kid Name or Password" }, status: 401
    end
  end

  # Logout Kid
  def destroy
    session.delete :kid_id
    head :no_content
  end

  # Login Parent
  def login_parent    
    parent = Parent.find_by(name: params[:name])
    if parent&.authenticate(params[:password])
      session[:parent_id] = parent.id
      render json: parent, status: 201
    else
      render json: { errors: "Invalid Parent Name or Password" }, status: 401
    end
  end

  # Logout Parent
  def logout_parent
    session.delete :parent_id
    head :no_content
  end
end