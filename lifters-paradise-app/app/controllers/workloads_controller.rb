class WorkloadsController < ApplicationController
    def index 
        @routine = Routine.find_by(params[:routine_id])
        @workloads = @routine.workloads.all
        render json: @workloads, include: :routine, status: :ok
    end

    def show
        @routines = Routine.find(params[:id])
        @workloads = @routines.workloads.find(params[:id])
        render json: @workloads, status: :ok
    end
end