class AddExercisesToWorkload < ActiveRecord::Migration[5.2]
  def change
    add_reference :workloads, :exercise, foreign_key: true
  end
end
