class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :grade, :avatar, :wallet, :savings, :wants, :needs

  def savings
    object.wallet*0.30.round(2)
  end

  def wants
    object.wallet*0.25.round(2)      
  end

  def needs
    object.wallet*0.45.round(2)
  end
end
