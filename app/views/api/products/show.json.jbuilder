json.extract! @product, :id, :name, :price, :description, :category_id

json.category @product.category.name
# if @product.reviews
json.reviews @product.reviews
# end
if @product.photos.attached?
    json.photourls @product.photos.map {|photo| photo.url}
end
