# This migration comes from kms (originally 20150209120632)
class AddPositionToKmsPages < ActiveRecord::Migration[4.2]
  def change
    add_column :kms_pages, :position, :integer, default: 0, null: false
  end
end
