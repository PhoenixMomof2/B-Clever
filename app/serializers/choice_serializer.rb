class ChoiceSerializer < ActiveModel::Serializer
  attributes :id, :answer, :correct, :question_id

  belongs_to :question
end
