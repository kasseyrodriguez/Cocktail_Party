class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :location
      t.boolean :confirmed

      t.timestamps
    end
  end
end
