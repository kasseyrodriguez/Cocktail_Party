class RegistrationsController < Devise::RegistrationsController

    protected
    
    def after_sign_up_path_for(resource)
        if not resource.proper_age 
            welcome_not_proper_age_path
        elsif resource.bartender
            welcome_bartenders_path 
        else
            welcome_users_path
        end
    end


end