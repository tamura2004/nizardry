class CreatePcs < ActiveRecord::Migration[7.0]
  def change
    create_table :pcs do |t|
      t.string :name
      t.integer :race_id
      t.integer :class_id
      t.integer :str
      t.integer :dex
      t.integer :con
      t.integer :int
      t.integer :wis
      t.integer :cha
      t.integer :exp
      t.integer :level
      t.integer :base_hp
      t.integer :current_hp
      t.integer :status_id
      t.integer :gold
      t.integer :background_id

      t.timestamps
    end
  end
end
