# == Schema Information
#
# Table name: reviews
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  comment      :text             not null
#  rating       :integer          not null
#  commenter_id :bigint           not null
#  proudct_id   :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Review < ApplicationRecord
    validates :title, :comment, :rating, :commenter_id, :proudct_id, presence: true 

    belongs_to :products
    belongs_to :commenter,
        foreign_key: :commenter_id,
        class_name: :User


end
