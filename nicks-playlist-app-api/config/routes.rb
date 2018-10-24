Rails.application.routes.draw do
  post '/user_token' => 'user_token#create'
  namespace :api do
    #get 'auth' => 'home#auth'
    resources :playlists
    resources :tracks
    resources :users
    #post '/signup' => 'users#create'
    #post '/login' => 'user_token#create'

    post '/find_user' => 'users#find'


  end
end
