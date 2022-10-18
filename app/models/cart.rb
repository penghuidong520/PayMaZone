# == Schema Information
#
# Table name: carts
#
#  id          :bigint           not null, primary key
#  quantity    :integer          not null
#  user_id     :bigint           not null
#  product_id :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Cart < ApplicationRecord
    validates :user_id, :products_id, :quantity, presence: true

    belongs_to :user
    belongs_to :products
end
