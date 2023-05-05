class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :grade, :avatar
end
