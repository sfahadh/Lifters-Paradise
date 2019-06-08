class UsersController < ApplicationController
    before_action :authorize_request, except: :create

    def index
        @users = User.all
        render json: @users, status: :ok
    end

    def show 
        render json: @user
    end
 
    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user, status: :created
        else
            render json: { errors: @user.errors.full_messages },
            status: :unprocessable_entity
        end
    end  
     
    private
     
    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    end
end
