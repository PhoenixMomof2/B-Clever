class ParentsController < ApplicationController
  skip_before_action :authorize_parent, only: [:signup_parent_kid, :index]
  skip_before_action :authorize_kid, only: [:signup_parent_kid, :index, :show]
  
  #Sign up parent and their kid
  def signup_parent_kid
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

      parent = Parent.create!(parent_params)
      
    end
  
    if parent
      allowance = parent.allowances.create!(balance: params[:allowance][:balance], kid_id: kid.id)
      pa = ActiveModelSerializers::SerializableResource.new(parent, adapter: :json).as_json
      k = ActiveModelSerializers::SerializableResource.new(kid, adapter: :json).as_json
      a = ActiveModelSerializers::SerializableResource.new(allowance, adapter: :json).as_json
      merge_data = pa.merge(k).merge(a)
      render json: merge_data, status: :created
    end
  end
   
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