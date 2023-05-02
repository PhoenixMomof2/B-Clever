class CreateChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :choices do |t|
      t.string :answer
      t.boolean :correct
      t.integer :quiz_id

      t.timestamps
    end
  end
end
