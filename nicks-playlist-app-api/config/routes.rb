Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  namespace :api do
    #get 'auth' => 'home#auth'
    resources :users
    post 'user_token' => 'user_token#create'
    post 'find_user' => 'users#find'

    resources :playlists
    resources :tracks
  end
end
