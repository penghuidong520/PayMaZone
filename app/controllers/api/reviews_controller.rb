class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in!, only: [:update, :create, :destroy]
    wrap_parameters include: Review.attribute_names + ["userId", "productId"]


    def update 
        @review = Review.find(params[:id])
        if @review.user_id == current_user.id
            if @review.update(cart_params)
                render :show
            else
                render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Has to be the owner to edit review"] }
        end
    end

    def index
        @reviews = Review.find_by(product_id: params[:product_id])
        if @reviews
            render :index
        else
            render json: { message: ["Currently has no reviews"] }
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        if @review.save!
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end

    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.delete
            render json: {success: ["Successfully Deleted Review"]}
        else
            render json: {error: ["Failed to Delete"]}
        end
    end

    private
    def review_params
        params.require(:review).permit(:title, :comment, :rating, :commenter_id, :product_id, :username)
    end

end
