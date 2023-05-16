class Kid < ApplicationRecord
  validates :name, uniqueness: true, length: { in: 8..25 }
  validates :age, :avatar, :grade, :wallet, presence: true
  validates :password, length: { in: 8..12 }
  
  has_many :allowances
  has_many :parents, through: :allowances
  
  has_secure_password
end
