# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  comment    :text             not null
#  rating     :integer          not null
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :title, :comment, :rating, presence: true 
    validates :user_id, :product_id, presence: true
    validates :user_id, uniqueness: { scope: :product_id }
    belongs_to :product
        # foreign_key: :product_id,
        # class_name: :Product

    belongs_to :user


end
