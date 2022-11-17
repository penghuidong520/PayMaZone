class AddReviewsColumn < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :username, :string, null: false
  end
end
