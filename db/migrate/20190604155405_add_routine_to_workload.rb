class AddRoutineToWorkload < ActiveRecord::Migration[5.2]
  def change
    add_reference :workloads, :routine, foreign_key: true
  end
end
