class Api::CartsController < ApplicationController
    wrap_parameters include: Cart.attribute_names + ["userId", "productId"]
    # before_action :require_logged_in!

    def update

        @cart = current_user.carts.find(params[:id])
        if @cart.update(cart_params)
            render :show
        else
            render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        @carts = current_user.carts
        render :index
    end

    def create
        @cart = Cart.new(cart_params)
        @cart.user_id = current_user.id

        if @cart.save
            render :show
        else
            render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @cart = current_user.carts.find_by(id: params[:id])
        if @cart && @cart.delete
        else
            render jason: { errors: ['Failed to Delete']}
        end
    end

    private
    def cart_params
        params.require(:cart).permit(:quantity, :user_id, :product_id)
    end

end