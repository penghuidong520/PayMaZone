@cart_items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :name, :price, :description, :category_id

        if item.photos.attached?
            json.photourls item.photos.map {|photo| photo.url}
        end
    end
end