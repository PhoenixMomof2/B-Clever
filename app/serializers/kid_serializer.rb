class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :grade, :avatar, :wallet

  def wallet
    kid_wallet = object.wallet
    { 
      total: kid_wallet,
      savings: (kid_wallet*0.30).round(2),
      wants: (kid_wallet*0.25).round(2),
      needs: (kid_wallet*0.45).round(2)
    }
  end
end
