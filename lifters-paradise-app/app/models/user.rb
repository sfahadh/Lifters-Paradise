class User < ApplicationRecord
    has_many :routines
    has_secure_password

    validates :first_name, presence: true
    
    validates :last_name, presence: true

    validates :username,
    presence: true,
    uniqueness: true,
    length: { maximum:25 }

    validates :email, 
    presence: true,
    uniqueness: true,
    format: { with: URI::MailTo::EMAIL_REGEXP, message: "only allows valid emails" },
    length: { maximum:55 }

    validates :password, 
    presence: true, 
    length: { minimum: 6 },
    if: -> { new_record? || !password.nil? }
end
