class AddAttributesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :rate, :float
    add_column :users, :home_address, :string
    add_column :users, :travel_radius, :int
    add_column :users, :standard, :boolean
    add_column :users, :flair, :boolean
    add_column :users, :mixologist, :boolean
    add_column :users, :gender, :string
  end
end
