class AddUserRefToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :user, foreign_key: true
    add_reference :events, :bartender, foreign_key: true
  end
end
