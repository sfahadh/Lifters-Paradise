class AuthenticationController < ApplicationController
    def login
        @user = User.find_by_email(params[:email])
        if @user.authenticate(params[:password]) 
          token = JsonWebToken.encode(user_id: @user.id, email: @user.email)
          render json: { token: token }, status: :ok
        else
          render json: { error: 'unauthorized' }, status: :unauthorized
        end
      end
    
      private
    
      def login_params
        params.permit(:email, :password)
      end
end
