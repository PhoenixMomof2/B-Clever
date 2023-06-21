class ParentsController < ApplicationController
  skip_before_action :authorize_parent, only: [:create, :index]
  skip_before_action :authorize_kid, only: [:create, :index, :show, :create_allowance]
  
  #Sign up parent and their kid
  def create
    parent = nil
    kid = nil
  
    ActiveRecord::Base.transaction do
      kid_params = params[:kid][:kid_attributes]
      existing_kid = Kid.find_by(name: kid_params[:name])
  
      if existing_kid
        kid = existing_kid
      else
        kid = Kid.create(kid_params.permit(:name, :age, :grade, :avatar, :password, :password_confirmation))
      end
  
      if kid.name.blank?
        render json: { errors: ["Kid name is blank."] }, status: :unprocessable_entity
        raise ActiveRecord::Rollback
      end
      # parent_params_with_kids = parent_params.merge(kids: [kid])
      parent = Parent.create!(parent_params)
      # byebug
  
      session[:parent_id] = parent.id
      session[:kid_id] = kid.id
    end
  
    if parent
      allowance = parent.allowances.create!(balance: params[:allowance][:balance], kid_id: kid.id)
      # byebug
      pa = ActiveModelSerializers::SerializableResource.new(parent, adapter: :json).as_json
      k = ActiveModelSerializers::SerializableResource.new(kid, adapter: :json).as_json
      a = ActiveModelSerializers::SerializableResource.new(allowance, adapter: :json).as_json
      merge_data = pa.merge(k).merge(a)
      render json: merge_data, status: :created
    end
  end
  
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
    params.require(:parent).permit(:name, :password, :password_confirmation, :age, :state)
  end
end

#kid_attributes: [:name, :age, :grade, :avatar, :password, :password_confirmation]