@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :price, :description, :category_id

        json.category product.category.name

        if product.photos.attached?
            json.photourls product.photos.map {|photo| photo.url}
        end
    end
    
end
