class Kid < ApplicationRecord
  validates :name, :password, :age, :avatar, :grade, presence: true

  has_secure_password
end
