class RegistrationsController < Devise::RegistrationsController

    def after_sign_up_path_for(resource)
        if resource.bartender
            welcome_bartenders_path
        else
            welcome_users_path
        end
    end


end