json.user do
    json.extract! @user, :id, :email, :username, :created_at, :updated_at
    json.set! 'carts' do
        @user.carts.each do |cart|
            json.extract! cart, :id, :user_id, :product_id, :quantity, :created_at
        end
    end
end