# json.set! @cart.id do
json.extract! @cart, :id, :user_id, :product_id, :quantity, :created_at
# end