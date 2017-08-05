# This migration comes from kms (originally 20160129100437)
class CreateKmsSnippets < ActiveRecord::Migration[4.2]
  def change
    create_table :kms_snippets do |t|
      t.string :name
      t.string :slug
      t.text :content

      t.timestamps null: false
    end
  end
end
