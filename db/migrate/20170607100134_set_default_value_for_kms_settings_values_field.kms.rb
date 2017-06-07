# This migration comes from kms (originally 20161118151849)
class SetDefaultValueForKmsSettingsValuesField < ActiveRecord::Migration[5.0]
  def change
    change_column_default :kms_settings, :values, {}
  end
end
