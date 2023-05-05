class ChoiceSerializer < ActiveModel::Serializer
  attributes :id, :answer, :correct, :quiz_id

  belongs_to :quiz
end
