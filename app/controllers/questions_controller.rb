class QuestionsController < ApplicationController
  skip_before_action :authorize_kid, only: [:new_quiz]
  skip_before_action :authorize_parent, only: [:new_quiz]

  # # GET /questions
  # def index
  #   render json: Question.all
  # end

  # # GET /questions/:id
  # def show
  #   find_question
  #   render json: @question
  # end

  # GET /new_quiz (get a random set of 30 questions)
  def new_quiz
    thirty_questions = Question.all.sample(30)
    render json: thirty_questions
  end

  private
  def question_params
    params.permit(:expression)
  end

  def find_question 
    @question = Question.find_by(id: params[:id])
  end
end
