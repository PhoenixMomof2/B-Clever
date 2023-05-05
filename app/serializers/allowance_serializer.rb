class AllowanceSerializer < ActiveModel::Serializer
  attributes :id, :balance, :kid_id, :parent_id
end
