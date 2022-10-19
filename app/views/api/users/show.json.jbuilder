json.user do
    json.extract! @user, :id, :email, :username
end

json.carts do
    @user.carts.each do |cart|
        json.set! cart.id do
            json.extract! cart, :id, :user_id, :product_id, :quantity, :created_at
        end
    end
end