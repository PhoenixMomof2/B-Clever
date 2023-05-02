class Kid < ApplicationRecord
  validates :name, :password, :age, :avatar, :grade, :wallet, presence: true

  has_many :allowances
  has_one :parent, through: :allowances
  
  has_secure_password
end
