Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  resources :users, only: [:create, :index, :show]
  resources :exercises, only: [:index, :show]

  resources :routines
  
  # scope '/routines/:id' do
  #   resources :workloads 
  # end
  resources :workloads
end
