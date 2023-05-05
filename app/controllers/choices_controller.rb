class ChoicesController < ApplicationController

  private
  def choice_params
    params.permit(:answer, :correct)
  end
end
