class WorkLoadsController < ApplicationController
    def index
        @workloads = WorkLoad.all
        render json: @workloads, status: :ok
    end

    def show 
        render json: @workloads
    end
end