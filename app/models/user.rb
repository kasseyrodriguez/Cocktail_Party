class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  scope :bartender, -> { where(bartender: true ) }
  scope :regular, -> { where(bartender: [nil, false] ) }
  
  has_many :events
  has_many :jobs, class_name: "Event", foreign_key: "bartender_id"

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_one_attached :picture


end
