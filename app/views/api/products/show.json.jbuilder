json.extract! @product, :id, :name, :price, :description, :category_id

if @product.photos.attached?
    json.photourls @product.photos.map {|photo| photo.url}
end
