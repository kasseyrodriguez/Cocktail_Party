Rails.application.routes.draw do
  devise_for :users, controllers: {registrations: :registrations}
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'welcome#home'

  get 'welcome/bartenders'
  get 'welcome/users'

end
