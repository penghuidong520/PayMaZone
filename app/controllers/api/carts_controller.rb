class Api::CartsController < ApplicationController
    before_action :require_logged_in!

    def edit
        @cart = Cart.find(params[:id])
        render :edit
    end

    def update
        @cart = Cart.find(params[:id])
        if @cart.user_id == current_user.id
            if @cart.update(cart_params)
                render :index
            else
                render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        @carts = Cart.find_by(user_id: params[:user_id])
        render :index
    end

    def create
        @cart = Cart.new(cart_params)
        @cart.user_id = current_user.id

        if @cart.save
        else
            render json: { errors: @cart.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @goal = current_user.goals.find_by(id: params[:id])
        if @goal && @goal.delete
            redirect_to users_url
        end
    end

    private
    def cart_params
        params.require(:cart).permit(:quantity, :user_id, :product_id)
    end

end