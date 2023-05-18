class Allowance < ApplicationRecord
  validates :balance, presence: true

  belongs_to :kid
  belongs_to :parent
end
