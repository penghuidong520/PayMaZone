# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :user_id, :product_id, :quantity, presence: true
    validates :user_id, uniqueness: { scope: :product_id }

    belongs_to :user
    belongs_to :product
end
