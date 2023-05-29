class AllowancesController < ApplicationController
  before_action :find_allowance, only: [:show, :update, :destroy]
  skip_before_action :authorize_kid, only: [:create, :parent_allowances]
  # skip_before_action :authorize_parent, only: [:show, :index, :create]

  # GET /allowances 
  def index          
    render json: current_kid.allowances, status: :ok
  end
    
  # POST /allowances
  def create  
    @allowance = current_kid.allowances.create!(allowance_params)
    render json: @allowance, status: :created   
  end

  # POST /parent_allowances
  def parent_allowances  
    @allowance = current_parent.allowances.create!(allowance_params)
    render json: @allowance, status: :created   
  end
  
  # SHOW /allowances/:id
  def show
    render json: @allowance, status: :ok
  end

  # PATCH /allowances/:id 
  def update      
    # byebug
    @allowance.update!(allowance_params)
    render json: @allowance, status: :accepted      
  end

  # DELETE /allowances/:id  
  def destroy    
    @allowance.destroy
    head :no_content
  end

  private
  def allowance_params
    params.require(:allowance).permit(:balance, :parent_id, :kid_id)
  end

  def find_allowance
    @allowance = current_kid.allowances.find_by_id(params[:id])
    if !@allowance
      render json: { error: "Unauthorized" }
    end
  end
end
