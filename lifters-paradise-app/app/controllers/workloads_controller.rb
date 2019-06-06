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

    def create
        @workload = Workload.new(workload_params)
        if @workload.save 
            render json: @workload, status: :created
        else
            render json: { errors: @workload.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @workload = Workload.find(params[:id])
        @workload.destroy
        render json: @workload, status: :ok
      end

    private 

    def workload_params
        params.require(:workload).permit(:weight, :sets, :reps, :rpe, :routine_id, :exercise_id)
    end
end