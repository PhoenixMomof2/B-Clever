class ParentsController < ApplicationController
  skip_before_action :authorize_parent, only: [:create, :index]
  skip_before_action :authorize_kid, only: [:create, :index, :show, :create_allowance]
  
  #SignUp Parent, Kid, and create first allowance
  def create
    ActiveRecord::Base.transaction do
      parent = Parent.create!(parent_params)
      kid = parent.kids.create!(kid_params)
      allowance = kid.allowances.create!(allowance_params)
  
      session[:parent_id] = parent.id
      session[:kid_id] = kid.id
  
      render json: allowance, status: :created
    end
  rescue ActiveRecord::RecordInvalid => e
    render json: { error: e.message }, status: :unprocessable_entity
  end
  # def create
  #   # byebug
  #   # ActiveRecord::Base.transaction do
  #     parent = Parent.create!(parent_params)
  #     kid = Kid.create!(kid_params)
  #     allowance = current_parent.allowances.create!(allowance_params)

  #     session[:parent_id] = parent.id
  #     session[:kid_id] = kid.id

  #     render json: { parent: parent, kid: kid, allowance: allowance }, status: :created
  # end

  #SignUp
  # def create
  #   parent = Parent.create!(parent_params)
  #   session[:parent_id] = parent.id
  #   render json: parent, status: 201
  # end
 
  # GET /parents
  def index 
    render json: Parent.all, status: :ok
  end

  # GET /parent_profile
  def show
    render json: @current_parent, status: :ok
  end

  private
  def parent_params
    params.permit(:name, :password, :password_confirmation, :age, :state)
  end
end