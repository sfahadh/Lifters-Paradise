class AddUserToRoutine < ActiveRecord::Migration[5.2]
  def change
    add_reference :routines, :user, foreign_key: true
  end
end
