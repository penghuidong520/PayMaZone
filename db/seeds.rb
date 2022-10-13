# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Product.destroy_all
Category.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')

admin = User.create(username: 'Payton', email: 'payton@aa.io', password: 'password1')
demo = User.create(username: 'demo', email: 'demo@aa.io', password: 'password')

ApplicationRecord.connection.reset_pk_sequence!('categories')

electronics = Category.create(name: 'Electronics') # 1
health = Category.create(name: 'Health & Household') # 2
sports = Category.create(name: 'Sports') # 3
movies = Category.create(name: 'Movies') # 4
games = Category.create(name: 'Games') # 5
pharmacy = Category.create(name: 'Pharmacy') # 6
books = Category.create(name: 'Books') # 7

ApplicationRecord.connection.reset_pk_sequence!('products')

nintendo = Product.create(name: 'Nintendo Switch with Neon Blue and Neon Red Joy-Con', price: 299.00, description: "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as 'a home console that you can take with you on the go'.", category_id: 1)

dota = Product.create(name: 'Dota 2 Large Multiplayer 5 on 5, Intense PvP Online Game', price: 29.99, description: 'Dota 2 is an Action RTS game, developed by Valve Corporation. The title was formally announced on October 13, 2010; and was released as a Free to Play game on July 9th, 2013 for Windows, and July 18th, 2013 for Mac OS and Linux. It is the successor to the very popular Warcraft 3 mod, Defense of the Ancients, which was based on the Aeon of Strife map for StarCraft.', category_id: 5)



# rtx3060 = Product.create()