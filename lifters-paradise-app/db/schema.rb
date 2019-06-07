# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_07_194914) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.string "plane_of_motion"
    t.string "joint_action"
    t.string "muscles_involved"
    t.string "start_image"
    t.string "end_image"
    t.string "type_of_exercise"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routines", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_routines_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "workloads", force: :cascade do |t|
    t.integer "weight"
    t.integer "sets"
    t.integer "reps"
    t.integer "rpe"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "routine_id"
    t.bigint "exercise_id"
    t.string "lift"
    t.index ["exercise_id"], name: "index_workloads_on_exercise_id"
    t.index ["routine_id"], name: "index_workloads_on_routine_id"
  end

  add_foreign_key "routines", "users"
  add_foreign_key "workloads", "exercises"
  add_foreign_key "workloads", "routines"
end
