class UserSerializer < ApplicationSerializer
  attributes :id, :email, :username
  has_many :playlists
end
