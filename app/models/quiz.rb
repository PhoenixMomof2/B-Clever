class Quiz < ApplicationRecord
  validates :expression, presence: true

  has_many :choices  
end
