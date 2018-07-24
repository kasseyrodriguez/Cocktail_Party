class Event < ApplicationRecord
    belongs_to :bartender, :class_name => 'User'
    belongs_to :user
end
