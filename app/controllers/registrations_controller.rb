class RegistrationsController < Devise::RegistrationsController

    

def update
 @user = current_user
 data = params["user"]
 @user.rate= data["rate"]
 @user.home_address= data["home_address"]
 @user.travel_radius= data["travel_radius"]
 @user.standard = data["flair"]
 @user.flair = data["flair"]
 @user.mixologist= data["mixologist"]
 @user.gender = data["gender"]
 @user.save
#  bartender_profile(@user)
 redirect_to @user
end


  


    def after_sign_up_path_for(resource)
        if not resource.proper_age 
            welcome_not_proper_age_path
        elsif resource.bartender
            welcome_bartenders_path 
        else
            root_path
        end
    end








end