class CreateReview < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :comment, null: false
      t.integer :rating, null: false
      t.references :commenter, null: false, foreign_key: {to_table: :users}
      t.references :proudct, null: false, foreign_key: {to_table: :products}

      t.timestamps
    end
  end
end
