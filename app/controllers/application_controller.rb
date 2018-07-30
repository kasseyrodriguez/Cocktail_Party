class ApplicationController < ActionController::Base
  layout :by_resource
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authenticate_user!
 
 


  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,
      keys:
      [:name, :bartender, :proper_age, :rate, :home_address, :travel_radius,
       :standard, :flair, :mixologist, :gender, :picture, :rating, :monday, :tuesday, :wednesday,
       :thursday, :friday, :saturday, :sunday])
  end




  private

    def by_resource
      if devise_controller?
        "devise"
      else
        "application"
      end

    end



  end
