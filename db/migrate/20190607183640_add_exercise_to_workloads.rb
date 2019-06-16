class AddExerciseToWorkloads < ActiveRecord::Migration[5.2]
  def change
    add_column :workloads, :exercise, :string
  end
end
