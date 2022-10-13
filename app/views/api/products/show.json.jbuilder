json.product do
    json.extract! @product, :id, :name, :price, :description, :category_id
end