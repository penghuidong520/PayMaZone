Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]

    resources :categories, only: [:index, :show]
    resources :products, only: [:show, :index]
    resources :carts, only: [:index, :create, :update, :destroy]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
    get '/search/products/:term', to: "search#search_results"
  end
  
  # get '/search/products/:term', action: :search_results, controller: 'products'
  get '*path', to: "static_pages#frontend_index"

end