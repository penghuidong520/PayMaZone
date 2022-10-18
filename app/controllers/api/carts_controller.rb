class Api::CartsController < ApplicationController
    before_action :require_logged_in!

    def edit
        @cart = current_user.carts.find(params[:id])
        render :edit
    end

    def update

        @cart_item = current_user.carts.find(params[:id])
        if @cart_item.update(cart_params)
            render :edit
        else
            render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
        end

        # @cart = Cart.find(params[:id])
        # if @cart.user_id == current_user.id
        #     if @cart.update(cart_params)
        #         render :index
        #     else
        #         render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        #     end
        # else
        #     render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        # end
    end

    def index
        @cart_items = current_user.products
        render :index
    end

    def create
        @cart = Cart.new(cart_params)
        @cart.user_id = current_user.id

        if @cart.save
            render :index
        else
            render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @cart = current_user.carts.find_by(id: params[:id])
        if @cart && @cart.delete
            render :index
        else
            render jason: { errors: ['Failed to Delete']}
        end
    end

    private
    def cart_params
        params.require(:cart).permit(:quantity, :user_id, :product_id)
    end

end