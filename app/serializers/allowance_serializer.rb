class AllowanceSerializer < ActiveModel::Serializer
  attributes :id, :balance, :kid_id, :parent_id, :date

  def date
    object.updated_at.strftime("%A, %B %d, %Y at %I:%M %p")
  end
  
  belongs_to :kid
end
