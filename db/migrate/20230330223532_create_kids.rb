class CreateKids < ActiveRecord::Migration[7.0]
  def change
    create_table :kids do |t|
      t.string :name
      t.string :password_digest
      t.integer :age
      t.string :avatar
      t.string :grade

      t.timestamps
    end
  end
end
