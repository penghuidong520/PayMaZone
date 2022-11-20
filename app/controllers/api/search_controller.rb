class Api::SearchController < ApplicationController
    def search_results
        @products = Product.where("lower(name) LIKE:term", term: "%#{params[:term]}%".downcase)
        if @products 
            render :index
        else
            render json: {message: "No products found"}
        end
    end
end