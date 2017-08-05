require 'dragonfly'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

<<<<<<< HEAD
  secret 'ad26053ed6fa6a713204de348f0a13992e686ac2cbf21a8d4256580313f7bca5'
=======
  secret 'bd887b7de0a92fc6ff2b45bf24a062cd7871c8031c8a384d185b5ed1602fa4c8'
>>>>>>> fc41821962e2e09f6903425e1def27a1176c5a64

  url_format "/media/:job/:name"

  datastore :file,
    root_path: Rails.root.join('public/uploads/dragonfly', Rails.env),
    server_root: Rails.root.join('public')

  fetch_url_whitelist /.+/

  processor :add_watermark do |content, watermark, dissolve, position|
    content.shell_update do |old_path, new_path|
      "composite -dissolve #{dissolve} -gravity #{position} #{watermark} #{old_path} #{new_path}"
    end
  end

end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
