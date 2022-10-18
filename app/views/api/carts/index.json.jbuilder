@carts.carts do |cart|
    json.set! cart.id do
        json.extract! cart, :id, :user_id, :product_id, :quantity
    end
end
