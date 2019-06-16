class AddLiftToWorkloads < ActiveRecord::Migration[5.2]
  def change
    add_column :workloads, :lift, :string
  end
end
