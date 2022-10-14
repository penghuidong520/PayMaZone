@products.each do |product|
    json.set! product.id do
            json.extract! product, :id, :name, :price, :description, :category_id
    end
end
