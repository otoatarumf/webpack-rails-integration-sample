Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :sample1, only: :index
  resources :sample2, only: :index
  root 'root#show'
end
