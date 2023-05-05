class Choice < ApplicationRecord
  validates :answer, :quiz_id, presence: true
  validates :correct, inclusion: [true, false]

  belongs_to :quiz
end
