class RegistrationsController < Devise::RegistrationsController

    

def update
 @user = current_user
 data = params["user"]
 @user.rate= data["rate"]
 @user.home_address= data["home_address"]
 @user.travel_radius= data["travel_radius"]
 @user.standard = data["standard"]
 @user.flair = data["flair"]
 @user.mixologist= data["mixologist"]
 @user.gender = data["gender"]
 @user.bio = data["bio"]
 @user.rating = data["rating"]
 @user.monday = data["monday"]
 @user.tuesday= data["tuesday"]
 @user.wednesday = data["wednesday"]
 @user.thursday = data["thursday"]
 @user.friday = data["friday"]
 @user.saturday = data["saturday"]
 @user.sunday = data["sunday"]
 @user.picture.attach(data["picture"])
 @user.save
 redirect_to @user
end




    def after_sign_up_path_for(resource)
        @user = current_user
        if not resource.proper_age 
            welcome_not_proper_age_path
        elsif resource.bartender
            welcome_edit_bartenders_path 
        else
            root_path
        end
    end

   
    
   







end