# This migration comes from kms (originally 20160712094512)
class CreateKmsSettings < ActiveRecord::Migration[4.2]
  def change
    create_table :kms_settings do |t|
      t.json :values

      t.timestamps null: false
    end
  end
end
