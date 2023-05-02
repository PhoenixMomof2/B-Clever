class Parent < ApplicationRecord
  has_many :allowances
  has_many :kids, through: :allowances
end
