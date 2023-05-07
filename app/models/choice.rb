class Choice < ApplicationRecord
  validates :answer, :question_id, presence: true
  validates :correct, inclusion: [true, false]

  belongs_to :question
end
