class AddProperAgeToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :proper_age, :boolean
  end
end
