# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_04_073807) do
  create_table "pcs", force: :cascade do |t|
    t.string "name"
    t.integer "race_id"
    t.integer "class_id"
    t.integer "str"
    t.integer "dex"
    t.integer "con"
    t.integer "int"
    t.integer "wis"
    t.integer "cha"
    t.integer "exp"
    t.integer "level"
    t.integer "base_hp"
    t.integer "current_hp"
    t.integer "status_id"
    t.integer "gold"
    t.integer "background_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
