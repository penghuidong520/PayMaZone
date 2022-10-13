class Api::CategoriesController < ApplicationController
    
    def show
        @category = Category.find(params[:id])
        if @category
            render :show
        else
            render json: { errors: @category.errors.full_messages }, status: :unprocessable_entity
        end
    end

end
