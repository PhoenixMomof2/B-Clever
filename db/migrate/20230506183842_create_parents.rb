class CreateParents < ActiveRecord::Migration[7.0]
  def change
    create_table :parents do |t|
      t.string :name
      t.string :password_digest
      t.integer :age
      t.string :state

      t.timestamps
    end
  end
end
