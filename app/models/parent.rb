class Parent < ApplicationRecord
  validates :name, :password, :age, :state, presence: true
  
  has_many :allowances
  has_many :kids, through: :allowances

  has_secure_password
end
