class User < ApplicationRecord
    has_many :routines
    has_secure_password

    validates :name, presence: true

    validates :username,
    presence: true,
    uniqueness: true,
    length: { maximum:25 }

    validates :password, 
    presence: true, 
    length: { minimum: 6 },
    
    if: -> { new_record? || !password.nil? }
end
