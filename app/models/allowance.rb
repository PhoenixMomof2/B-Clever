class Allowance < ApplicationRecord
  validates :balance, :kid_id, :parent_id, presence: true

  belongs_to :kid
  belongs_to :parent
end
