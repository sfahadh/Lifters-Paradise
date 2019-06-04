class RoutinesController < ApplicationController
    def index
        @routines = Routine.all
        render json: @routines, status: :ok
    end

    def show 
        render json: @routine
    end
end