class CreateAllowances < ActiveRecord::Migration[7.0]
  def change
    create_table :allowances do |t|
      t.integer :balance
      t.integer :kid_id
      t.integer :parent_id

      t.timestamps
    end
  end
end
