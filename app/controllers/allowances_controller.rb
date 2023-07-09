class AllowancesController < ApplicationController
  before_action :find_allowance, only: [:show, :update, :destroy]
  skip_before_action :authorize_kid, only: [:create, :kid_allowances, :parent_allowances, :update_parent_allowance, :destroy_parent_allowance]
  skip_before_action :authorize_parent, only: [:index, :create, :update, :destroy]
  
  # GET /allowances 
  def index          
    render json: current_kid.allowances, status: :ok
  end

  # GET /kid_allowances 
  def kid_allowances
    render json: current_parent.allowances, status: :ok
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
  
  # PATCH /allowances/:id 
  def update          
    @allowance.update!(allowance_params)
    render json: @allowance, status: :accepted      
  end

  # DELETE /allowances/:id  
  def destroy    
    @allowance.destroy
    head :no_content
  end

  # PATCH /kid_allowances/:id 
  def update_parent_allowance     
    @allowance = @current_parent.allowances.find_by_id(params[:id]) 
    @allowance.update!(allowance_params)
    render json: @allowance, status: :accepted      
  end

  # DELETE /kid_allowances/:id  
  def destroy_parent_allowance    
    @allowance = @current_parent.allowances.find_by_id(params[:id]) 
    @allowance.destroy
    head :no_content
  end

  private
  def allowance_params
    params.require(:allowance).permit(:balance, :parent_id, :kid_id)
  end

  def find_allowance
    @allowance = Allowance.find_by_id(params[:id])   
  end
end