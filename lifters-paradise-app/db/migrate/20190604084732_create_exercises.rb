class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :plane_of_motion
      t.string :joint_action
      t.string :muscles_involved
      t.string :start_image
      t.string :end_image
      t.string :type_of_exercise

      t.timestamps
    end
  end
end
