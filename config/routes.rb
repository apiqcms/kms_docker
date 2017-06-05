Rails.application.routes.draw do
  
  mount Kms::Engine => '/kms', as: 'kms'
      
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
