class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
        if @product
            render :show
        else
            render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
        end
    end

end
