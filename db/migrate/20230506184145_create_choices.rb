class CreateChoices < ActiveRecord::Migration[7.0]
  def change
    create_table :choices do |t|
      t.integer :answer
      t.boolean :correct
      t.integer :question_id

      t.timestamps
    end
  end
end
