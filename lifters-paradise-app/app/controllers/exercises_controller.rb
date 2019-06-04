class ExercisesController < ApplicationController
    def index
        @exercises = Exercise.all
        render json: @exercises, status: :ok
    end

    def show 
        render json: @exercise
    end
end