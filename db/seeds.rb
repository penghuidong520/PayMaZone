# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Cart.destroy_all
User.destroy_all
Product.destroy_all
Category.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('carts')

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


# electronics 

nintendo = Product.create(
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy-Con', 
    price: 299.00, 
    description: "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as 'a home console that you can take with you on the go'.", 
    category_id: 1)

nintendo1 = File.open("app/assets/images/nintendo1.jpeg")
nintendo2 = File.open("app/assets/images/nintendo2.jpeg")

nintendo.photos.attach(io: nintendo1, filename: 'nentendo1.jpeg')
nintendo.photos.attach(io: nintendo2, filename: 'nentendo2.jpeg')

##
drone = Product.create(
    name: 'Holy Stone HS440 Foldable FPV Drone with 1080P WiFi Camera for Adult Beginners and Kids; Voice/Gesture Control RC Quadcopter with Modular Battery for long flight time, Auto Hover, Carrying Case', 
    price: 99.99, 
    description: "1080P HD Auto-Adjustable Camera: Equipped with a 1080P HD camera that can be adjusted within 90° by your remote control or the app, this drone can give you an exciting experience of aerial scenery from the 140° wide-angle lens, and assist you to catch every wonderful moment from a birds-eye perspective. Whether you’re shooting at a deserted beach or capturing the details of a fun family reunion, HS440 can handle it all.", 
    category_id: 1)

drone1 = File.open("app/assets/images/drone.jpg")
drone.photos.attach(io: drone1, filename: "drone.jpg")

##
doorbell = Product.create(
    name: "Blink Video Doorbell | Two-way audio, HD video, motion and chime app alerts and Alexa enabled — wired or wire-free (Black)", 
    price: 49.99, 
    description: "Answer your door no matter where you are from your smartphone with 1080p HD day and infrared night video and two-way audio. Experience long-lasting battery life, custom alerts, privacy settings, and more.",
    category_id: 1)

doorbell1 = File.open("app/assets/images/doorbell.jpg")
doorbell.photos.attach(io: doorbell1, filename: "doorbell.jpg")

##
alexa = Product.create(
    name: "Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal",
    price: 39.99,
    description: "Meet Echo Dot - Our most compact smart speaker that fits perfectly into small spaces. Improved speaker quality - Better speaker quality than Echo Dot Gen 2 for richer and louder sound. Pair with a second Echo Dot for stereo sound.",
    category_id: 1
)

alexa1 = File.open("app/assets/images/alexa.jpg")
alexa.photos.attach(io: alexa1, filename: "alexa.jpg")

# health & household

laundry = Product.create(
    name: "PODS Laundry Detergent Soap Pods, Spring Meadow, 61 count",
    price: 15.00,
    description: "We have only quality products. High quality- save your time and your money. Ensure long-lasting and effective performance.",
    category_id: 2
)

laundry1 = File.open("app/assets/images/laundry.jpg")
laundry.photos.attach(io: laundry1, filename: "laundry.jpg")

##
sanitizer = Product.create(
    name: "Lysol Laundry Sanitizer Additive, Crisp Linen, 90oz + Lysol Disinfecting Wipes, Lemon & Lime Blossom, 80 ct (Pack of 4), Packaging May Vary",
    price: 26.94,
    description: "Lysol Laundry Sanitizer Additive: Tested & Proven to Kill COVID-19 Virus* (*Kills SARS-CoV-2 during pre-soak conditions in 5 minutes), EPA Reg #777-128. Lysol Laundry Sanitizer Additive: Kills 99.9% of bacteria*** detergents leave behind (**When used as directed)",
    category_id: 2
)

sanitizer1 = File.open("app/assets/images/sanitizer.jpg")
sanitizer.photos.attach(io: sanitizer1, filename: "sanitizer.jpg")

##
covidtest = Product.create(
    name: "Celltrion DiaTrust COVID-19 Ag Home Test, 2 Tests Per Pack, FDA EUA Authorized Multiple Target OTC Test, Result in 15 Minutes Without Sending to a Lab",
    price: 19.99,
    description: "SHELF-LIFE EXTENSION: Our tests sold from Amazon has 6 months longer shelf-life than the printed expiration date on the package. FDA granted 6 months shelf-life extension for the Celltrion DiaTrust COVID-19 Ag Home Test, which extended the shelf life from 12 months to 18 months as of May 20th, 2022. The affected lot numbers can be found on FDA’s website: https://www.fda.gov/media/159236/download",
    category_id: 2
)

covidtest1 = File.open("app/assets/images/covidtest.jpg")
covidtest.photos.attach(io: covidtest1, filename: "covidtest.jpg")

# sports

basketball = Product.create(
    name: "WILSON Evolution Game Basketball",
    price: 75.00,
    description: "When you focus on getting better, and not just on getting results, success takes care of itself. That is why the Wilson Evolution Game Ball is the preferred basketball in high schools across the country. THE INDOOR BALL: The Evolution is the indoor game basketball in America, on more courts than any other basketball. Signature EVO feel: the soft feel that the evolution basketball is famous for is due it’s cushion core carcass, making the ball softer to the touch and easier to grip around the rim. Grip & durability: the premium evo microfiber composite cover provides grip that players love and durability to last all season and beyond. Ultimate control: laid in composite channels create a consistent feel and texture over the entire surfACe of the basketball to provide unparalleled control. NFHS approved for play by the national federation of state high school associations (NFHS). Cover construction - micro-fiber composite leather. Intermediate size basketball: 28.5'.",
    category_id: 3
)

basketball1 = File.open("app/assets/images/basketball1.jpg")
basketball.photos.attach(io: basketball1, filename: "basketball1.jpg")

##

football = Product.create(
    name: "WILSON GST Game Footballs",
    price: 109.99,
    description: "Wilson GST Leather Game Football - Official Size. MODERN DESIGN: A New visual design combines signature GST performance with a New-look for a New generation of talent. LIGHT LEATHER FORMULA: Wilson’s Light Leather Formula is the softest football leather on the market, with a unique feel that’s easier for your fingers to sink into for more control. HANDCRAFTED IN THE US: The same skilled craftspeople that make every NFL leather football also make every leather GST, resulting unmatched quality craftsmanship. Sewn-On Stripe: Patented sewn-on stripes are composite material instead of paint and provide 82% more grip to aid release for more accurate throws. Accurate Control Lacing: Patented Accurate Control Lacing (ACL) is pebbled instead of smooth and provides more grip in all conditions. NCAA and NFHS Approved.",
    category_id: 3
)

football1 = File.open("app/assets/images/football1.jpg")
football.photos.attach(io: football1, filename: "football1.jpg")

##

protein = Product.create(
    name: "Organic Vegan Sport Protein Powder, Vanilla - Probiotics, BCAAs, 30g Plant Protein for Premium Post Workout Recovery - NSF Certified, Keto, Gluten & Dairy Free, Non GMO - Garden of Life - 19 Servings",
    price: 54.95,
    description: "Organic sport protein: Certified USDA organic, Non-GMO project verified, NSF certified for sport, informed choice for sport certified, vegan, gluten free, dairy free, soy free, no added sugars. Post workout recovery: Our Garden of Life Vegan Protein helps you refuel & repair muscles after a hard workout with 30 grams of complete protein and over 5 grams BCAA amino acids glutamine & glutamic acid. Recovery drinks: This sport protein powder promotes faster recovery with an organic high antioxidant blend of organic tart cherries, organic apples, organic turmeric, organic gogi berrie and organic blueberries. Immune system support: This BCAAs amino acid powder contains 2 billion CFU probiotic blend to keep your immune system strong during training. Certified clean: Breath easy knowing this vegan amino acid powder is clean and free of any banned substances.",
    category_id: 3
)

protein1 = File.open("app/assets/images/protein1.jpg")
protein.photos.attach(io: protein1, filename: "protein1.jpg")

# games

dota = Product.create(name: 'Dota 2 Large Multiplayer 5 on 5, Intense PvP Online Game', price: 29.99, description: 'Dota 2 is an Action RTS game, developed by Valve Corporation. The title was formally announced on October 13, 2010; and was released as a Free to Play game on July 9th, 2013 for Windows, and July 18th, 2013 for Mac OS and Linux. It is the successor to the very popular Warcraft 3 mod, Defense of the Ancients, which was based on the Aeon of Strife map for StarCraft.', category_id: 5)

dota1 = File.open("app/assets/images/dota.jpg")
dota.photos.attach(io: dota1, filename: "dota.jpg")

##
uno = Product.create(
    name: "UNO Family Card Game, with 112 Cards in a Sturdy Storage Tin, Travel-Friendly, Makes a Great Gift for 7 Year Olds and Up",
    price: 9.99,
    description: "UNO is the classic family card game that's easy to learn and so much fun to play!",
    category_id: 5
)

uno1 = File.open("app/assets/images/uno.jpg")
uno.photos.attach(io: uno1, filename: "uno.jpg")

##
nomansky = Product.create(
    name: "No Man's Sky - Nintendo Switch",
    price: 59.99,
    description: "Embark on an epic voyage, find your own destiny in this epic space adventure. Includes 6 years of updates",
    category_id: 5
)

nomansky1 = File.open("app/assets/images/nomansky.jpg")
nomansky.photos.attach(io: nomansky1, filename: "nomansky.jpg")

