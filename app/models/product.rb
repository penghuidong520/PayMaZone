# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :float            not null
#  description :text             not null
#  category_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    validates :name, :price, :description, presence: true

    belongs_to :category

    has_many :reviews
        # foreign_key: :product_id,
        # class_name: :Review
        
    has_many :carts


    has_many :commenter,
        through: :reviews,
        source: :commenter

    has_many_attached :photos


end
