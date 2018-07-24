Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: :registrations}
  resources :search, only: [:index]
  resources :users, only: [:show]
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'welcome#home'

  get 'welcome/edit_bartenders'
  get 'welcome/users'
  get 'welcome/not_proper_age'
  get 'welcome/search'


end
