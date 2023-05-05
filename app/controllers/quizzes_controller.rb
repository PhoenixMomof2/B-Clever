class QuizzesController < ApplicationController
  skip_before_action :authorize, only: [:index, :generate_expression, :set_quiz]

  # GET /quizzes
  def index
    render json: Quiz.all
  end

  def set_quiz
    ten_questions = Quiz.all.sample(2)
    # byebug
    render json: ten_questions
  end

  def generate_expression
      range = 1..100
      random_number1 = Random.rand(range)
      random_number2 = Random.rand(range)
      @quiz = Quiz.create(expression: "#{random_number1} + #{random_number2}")
      total = random_number1 + random_number2
    
      answers = Array.new(4) {Random.rand(range)}
      possible_choices = answers.map{|answer| @quiz.choices.create(answer: answer, correct: false)}
      random_choice = possible_choices.sample(1) 
      
      possible_choices.find{|random_choice| random_choice['answer'] = total
        random_choice['correct'] = true}
      byebug
      render json: @quiz
  end

  private
  def quiz_params
    params.permit(:expression)
  end
end
