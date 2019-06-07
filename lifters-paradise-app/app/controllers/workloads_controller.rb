class WorkloadsController < ApplicationController
    def index 
        @workloads = Workload.all
        render json: @workloads, status: :ok
    end

    def show
        @workloads = Workload.find(params[:id])
        render json: @workloads, status: :ok
    end

    def create
        @workload = Workload.create(workload_params)
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

    def update 
        @workload = Workload.find(params[:id])
        @workload.update(workload_params)
        render json: @workload, status: :ok
    end

    private 

    def workload_params
        params.require(:workload).permit(:weight, :sets, :reps, :rpe, :lift, :routine_id, :exercise_id)
    end
end