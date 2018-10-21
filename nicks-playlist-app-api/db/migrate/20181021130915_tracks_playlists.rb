class TracksPlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks_playlists do |t|
      t.integer :track_id
      t.integer :playlist_id

      t.timestamps
    end
  end
end
