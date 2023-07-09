class Kid < ApplicationRecord
  validates :name, uniqueness: true, length: { in: 3..25 }
  validates :age, :avatar, :grade, presence: true
  validates :password, length: { in: 6..12 }
  
  has_many :allowances, dependent: :destroy
  has_many :parents, through: :allowances
  
  has_secure_password  

   def calculate_wallet_total
      self.allowances.sum(:balance)
   end
end
