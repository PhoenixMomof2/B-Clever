class AllowancesController < ApplicationController
  before_action :find_allowance, only: [:show, :update, :destroy]
  # skip_before_action :authorize_parent, only: [:create, :show, :index]

  # GET /kids/:kid_id/allowances 
  def index          
    render json: current_kid.allowances, status: :ok
  end
  
  # GET /kids/:kid_id/allowances/:id
  def show
    render json: @allowance, status: :ok    
  end
  
  # POST /kids/:kid_id/allowances
  def create  
    byebug
    @allowance = current_kid.allowances.create!(allowance_params)
    render json: @allowance, status: :created   
  end
  
  # PATCH /kids/:kid_id/allowances/:id 
  def update      
    @allowance.update!(allowance_params)
    render json: @allowance, status: :accepted      
  end

  # DELETE /kids/:kid_id/allowances/:id  
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
