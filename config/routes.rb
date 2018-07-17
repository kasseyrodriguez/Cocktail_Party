Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'welcome#home'

  get 'bartenders', to: 'welcome#bartenders'
  get 'login', to: 'welcome#login'
  get 'signup', to: 'welcome#signup'
end
