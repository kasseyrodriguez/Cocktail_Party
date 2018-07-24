class AddDatesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :monday, :boolean
    add_column :users, :tuesday, :boolean
    add_column :users, :wednesday, :boolean
    add_column :users, :thursday, :boolean
    add_column :users, :friday, :boolean
    add_column :users, :saturday, :boolean
    add_column :users, :sunday, :boolean
  end
end
