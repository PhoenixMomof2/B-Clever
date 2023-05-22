class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :grade, :avatar, :wallet_total, :parent
 
  def parent
    object.parents.first 
  end 

  def wallet_total
    object.calculate_wallet_total
  end

  has_many :allowances
end