class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  before_action :authorize
  
  def current_kid
    @current_kid = Kid.find_by_id(session[:kid_id])
  end

  private
  def authorize
    @current_kid = Kid.find_by_id(session[:kid_id])
    render json: { errors: ["Not Authorized"] }, status: :unauthorized unless @current_kid
  end

  # Error handling methods
  def render_not_found_response
    render json: { errors:  ["Not found"] }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
