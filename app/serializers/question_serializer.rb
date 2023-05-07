class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :expression, :choices
  
  def choices
    object.choices.sort_by { rand }
  end

  has_many :choices
end
