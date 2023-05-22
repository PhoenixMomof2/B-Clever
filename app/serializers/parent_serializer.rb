class ParentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :state
  
  has_many :kids
  
  def attributes(*args)
    super.except(:password_digest, :created_at, :updated_at)
  end
end
