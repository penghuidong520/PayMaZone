# == Schema Information
#
# Table name: product_categories
#
#  id          :bigint           not null, primary key
#  product_id  :bigint           not null
#  category_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class ProductCategory < ApplicationRecord
    validates :product_id, :category_id, presence: true
    validates :product_id, uniqueness: {scope: :category_id}
    validates :category_id, uniqueness: {scope: :product_id}
    
    belongs_to :category
    belongs_to :product
end
