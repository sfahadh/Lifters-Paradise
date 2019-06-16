class RoutinesController < ApplicationController
    def index
        @routines = Routine.all
        render json: @routines
    end

    def show 
        @routines = Routine.find(params[:id])
        render json: @routines, status: :ok
    end
end