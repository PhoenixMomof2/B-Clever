class QuestionsController < ApplicationController
  skip_before_action :authorize, only: [:index, :generate_expression, :set_quiz]

  # GET /quizzes
  def index
    render json: Question.all
  end

  # GET /quizzes/:id
  def show
    find_question
    render json: @question
  end

  # GET /set_quiz 
  # get a random set of 10 quiz questions
  def set_quiz
    ten_questions = Question.all.sample(10)
    # byebug
    render json: ten_questions
  end

  def generate_expression
      range = 1..100
      random_number1 = Random.rand(range)
      random_number2 = Random.rand(range)
      @question = Question.create(expression: "#{random_number1} + #{random_number2}")
      total = random_number1 + random_number2
    
      answers = Array.new(3) {Random.rand(range)}
      possible_choices = answers.map{|index| @question.choices.create(answer: Random.rand(range), correct: false)}
      correct_answer = @question.choices.create(answer: total, correct: true)
      possible_choices << correct_answer
      
      # byebug     
      render json: @question
  end

  private
  def question_params
    params.permit(:expression)
  end

  def find_question 
    @question = Question.find_by(id: params[:id])
  end
end
