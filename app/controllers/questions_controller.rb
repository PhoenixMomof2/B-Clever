class QuestionsController < ApplicationController
  skip_before_action :authorize_kid, only: :new_quiz
  skip_before_action :authorize_parent, only: :new_quiz
  
  # GET /new_quiz (get a random set of 30 questions)
  def new_quiz
    thirty_questions = Question.all.sample(30)
    render json: thirty_questions
  end
end
