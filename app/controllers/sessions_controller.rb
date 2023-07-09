class SessionsController < ApplicationController
  skip_before_action :authorize_kid, only: [:login_kid, :login_parent, :logout_parent]
  skip_before_action :authorize_parent, only: [:login_kid, :login_parent, :logout_kid]

  # Login Kid
  def login_kid    
    kid = Kid.find_by(name: params[:name])
    if kid&.authenticate(params[:password])
      session[:kid_id] = kid.id
      render json: kid, status: 201
    else
      render json: { errors: "Invalid Kid Name or Password" }, status: 401
    end
  end

  # Logout Kid
  def logout_kid
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