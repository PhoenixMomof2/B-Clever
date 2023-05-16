class AllowanceSerializer < ActiveModel::Serializer
  attributes :id, :balance, :kid_id, :parent_id

  belongs_to :kid
  belongs_to :parent
end
