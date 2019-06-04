class CreateWorkloads < ActiveRecord::Migration[5.2]
  def change
    create_table :workloads do |t|
      t.integer :weight
      t.integer :sets
      t.integer :reps
      t.integer :rpe

      t.timestamps
    end
  end
end
