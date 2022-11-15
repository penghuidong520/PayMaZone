class ChangeReviews < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :proudct_id, :product_id
    rename_column :reviews, :commenter_id, :user_id
  end
end
