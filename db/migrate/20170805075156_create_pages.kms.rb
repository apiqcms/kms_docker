# This migration comes from kms (originally 20141027065341)
class CreatePages < ActiveRecord::Migration[4.2]
  def change
    create_table :kms_pages do |t|
      t.string :title
      t.string :slug
      t.text :content, default: ""
      t.boolean :published

      t.timestamps null: false
    end
  end
end
