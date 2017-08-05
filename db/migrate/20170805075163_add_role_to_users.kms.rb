# This migration comes from kms (originally 20141121112652)
class AddRoleToUsers < ActiveRecord::Migration[4.2]
  def change
    add_column :kms_users, :role, :string
  end
end
