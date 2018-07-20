class ApplicationController < ActionController::Base
  layout :by_resource
  before_action :authenticate_user!
 
  private
 
  def by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end
  end

