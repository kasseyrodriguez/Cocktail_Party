class AddBartenderToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :bartender, :boolean
  end
end
