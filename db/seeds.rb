# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


15.times do
  User.create!({
    name: Faker::Name.name,
    email: Faker::Internet.email,
    bartender: [true, false].sample,
    gender: ['female', 'male'].sample,
    password: "123456",
    password_confirmation: "123456",
    proper_age: rand(21..40),
    home_address: Faker::Address.street_address,
    flair: nil,
    mixologist: nil,
    standard: nil,
  })
end

if User.where(bartender: true)
  User.update({
  rate: rand(10..40),
  standard: [true, false].sample,
  flair: [true, false].sample,
  mixologist: [true, false].sample
 })
end
