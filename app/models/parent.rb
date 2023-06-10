class Parent < ApplicationRecord
  validates :name, :password, :age, :state, presence: true
  
  has_many :allowances
  has_many :kids, -> { distinct }, through: :allowances
  accepts_nested_attributes_for :kids

  has_secure_password
end
