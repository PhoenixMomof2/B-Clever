class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :grade, :avatar, :wallet, :savings, :wants, :needs, :parent
  
  def wallet
    all_allowances = object.allowances.collect{|allowance| allowance.balance}
    total = 0
    all_allowances.inject(:+)
  end

  def savings
    wallet*0.30.round(2)
  end

  def wants
    wallet*0.25.round(2)    
  end

  def needs
    wallet*0.45.round(2)
  end

  def parent
    object.parents.first     
  end

  has_many :allowances
end