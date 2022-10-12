# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')

admin = User.create(username: 'Payton', email: 'payton@aa.io', password: 'password1')
demo = User.create(username: 'demo', email: 'demo@aa.io', password: 'password')