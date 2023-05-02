class AddWalletToKids < ActiveRecord::Migration[7.0]
  def change
    add_column :kids, :wallet, :float
  end
end
