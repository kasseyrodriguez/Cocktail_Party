class AddUserRefToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :user, foreign_key: true
    add_reference :events, :bartender
    add_foreign_key :events, :users, column: :bartender_id

  end


end
