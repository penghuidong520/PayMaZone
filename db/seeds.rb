# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Review.destroy_all
Cart.destroy_all
User.destroy_all
Product.destroy_all
Category.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('carts')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

payton = User.create(username: 'Payton', email: 'payton@aa.io', password: 'password1')
demo = User.create(username: 'demo', email: 'demo@aa.io', password: 'password')
josh = User.create(username: 'josh', email: 'josh@aa.io', password: 'password')
mary = User.create(username: 'mary', email: 'mary@aa.io', password: 'password')
key = User.create(username: 'key', email: 'key@aa.io', password: 'password')
marina = User.create(username: 'marina', email: 'marina@aa.io', password: 'password')
nate = User.create(username: 'nate', email: 'nate@aa.io', password: 'password')
jelly = User.create(username: 'jelly', email: 'jelly@aa.io', password: 'password')
nathan = User.create(username: 'josh', email: 'josh@aa.io', password: 'password')

ApplicationRecord.connection.reset_pk_sequence!('categories')

electronics = Category.create(name: 'Electronics') # 1
health = Category.create(name: 'Health & Household') # 2
sports = Category.create(name: 'Sports') # 3
pet = Category.create(name: 'Pet Supplies') # 4
games = Category.create(name: 'Games') # 5
# books = Category.create(name: 'Books') # 6

ApplicationRecord.connection.reset_pk_sequence!('products')


# electronics 

## 1
nintendo = Product.create(
    name: 'Nintendo Switch with Neon Blue and Neon Red Joy-Con', 
    price: 299.00, 
    description: "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as 'a home console that you can take with you on the go'.", 
    category_id: 1)

nintendo1 = File.open("app/assets/images/nintendo1.jpeg")
nintendo2 = File.open("app/assets/images/nintendo2.jpeg")

nintendo.photos.attach(io: nintendo1, filename: 'nentendo1.jpeg')
nintendo.photos.attach(io: nintendo2, filename: 'nentendo2.jpeg')

## 2
drone = Product.create(
    name: 'Holy Stone HS440 Foldable FPV Drone with 1080P WiFi Camera for Adult Beginners and Kids; Voice/Gesture Control RC Quadcopter with Modular Battery for long flight time, Auto Hover, Carrying Case', 
    price: 99.99, 
    description: "1080P HD Auto-Adjustable Camera: Equipped with a 1080P HD camera that can be adjusted within 90° by your remote control or the app, this drone can give you an exciting experience of aerial scenery from the 140° wide-angle lens, and assist you to catch every wonderful moment from a birds-eye perspective. Whether you’re shooting at a deserted beach or capturing the details of a fun family reunion, HS440 can handle it all.", 
    category_id: 1)

drone1 = File.open("app/assets/images/drone.jpg")
drone.photos.attach(io: drone1, filename: "drone.jpg")

## 3
doorbell = Product.create(
    name: "Blink Video Doorbell | Two-way audio, HD video, motion and chime app alerts and Alexa enabled — wired or wire-free (Black)", 
    price: 49.99, 
    description: "Answer your door no matter where you are from your smartphone with 1080p HD day and infrared night video and two-way audio. Experience long-lasting battery life, custom alerts, privacy settings, and more.",
    category_id: 1)

doorbell1 = File.open("app/assets/images/doorbell.jpg")
doorbell.photos.attach(io: doorbell1, filename: "doorbell.jpg")

## 4
alexa = Product.create(
    name: "Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal",
    price: 39.99,
    description: "Meet Echo Dot - Our most compact smart speaker that fits perfectly into small spaces. Improved speaker quality - Better speaker quality than Echo Dot Gen 2 for richer and louder sound. Pair with a second Echo Dot for stereo sound.",
    category_id: 1
)

alexa1 = File.open("app/assets/images/alexa.jpg")
alexa.photos.attach(io: alexa1, filename: "alexa.jpg")

## 5
vr = Product.create(
    name: "Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB",
    price: 399.99,
    description: "Buy Meta Quest 2. Get Beat Saber. For a limited time, get the hit VR rhythm game included when you buy Meta Quest 2.* Keep your experience smooth and seamless, even as high speed action unfolds around you with a super-fast processor and high-resolution display. Experience total immersion with 3D positional audio, hand tracking and haptic feedback, working together to make virtual worlds feel real. Explore an expanding universe of over 350 titles across gaming, fitness, social/multiplayer and entertainment, including exclusive blockbuster releases and totally unique VR experiences. Travel universes in blockbuster fantasies, scare yourself witless in horror adventures or collaborate with colleagues in innovative workspaces.",
    category_id: 1
)

vr1 = File.open("app/assets/images/vr.jpg")
vr.photos.attach(io: vr1, filename: "vr.jpg")

## 6
camera = Product.create(
    name: "Canon EOS Rebel T7 DSLR Camera|2 Lens Kit with EF18-55mm + EF 75-300mm Lens, Black",
    price: 549.99,
    description: "Improved Dual Pixel CMOS AF and eye detection AF 24.1 Megapixel CMOS (APS-C) sensor with is 100–6400 (H: 12800). Built-in Wi-Fi and NFC technology working temperature range: 32-104°F/0-40°C. 9-Point AF system and AI Servo AF. Optical Viewfinder with approx 95% viewing coverage. Use the EOS Utility Webcam Beta Software (Mac and Windows) to turn your compatible Canon camera into a high-quality webcam. Video capture resolution: FHD 1080p.",
    category_id: 1
)

camera1 = File.open("app/assets/images/camera.jpg")
camera.photos.attach(io: camera1, filename: "camera.jpg")

## 7
headset = Product.create(
    name: "Logitech G535 LIGHTSPEED Wireless Gaming Headset - Lightweight on-ear headphones, flip to mute mic, stereo, compatible with PC, PS4, PS5, USB rechargeable - Black",
    price: 79.99,
    description: "LIGHTSPEED Wireless: Pro-grade LIGHTSPEED wireless technology provides 33 hours of battery life(1) and up to 12 meters of reliable wireless freedom. Lightweight and Comfortable: At only 236 grams, G535 is smaller and lighter than the G733; reversible suspension headband helps distribute weight and is adjustable for a customized fit. Plug and Play: Optimize your game time with an easy-to-use plug-and-play gaming headset; G535 uses a USB connection compatible with PC and PlayStation gaming devices. On-Ear Controls: Volume roller is located directly on the ear cup, to quickly turn up your game, music or comms; simply flip up microphone to mute and get it out of the way. 40 mm Drivers: With 40 mm neodymium drivers, this wireless gaming headset delivers crisp, clear, and deep stereo sound that makes your game come alive. All-Day Comfort: Comfortable soft memory foam ear cups and sports mesh material are great for extended use.",
    category_id: 1
)

headset1 = File.open("app/assets/images/headset.jpg")
headset.photos.attach(io: headset1, filename: "headset.jpg")

## 8
speaker = Product.create(
    name: "TREBLAB HD77 - Bluetooth Speaker - Loud 360° HD Surround Sound w/Bass, 25W Stereo, IPX6 Waterproof, 20H Battery Portable Speaker w/Bluetooth, Wireless Dual Pairing, Outdoor Blue Tooth Speaker",
    price: 89.97,
    description: "Rich 360° HD Sound – Hear music like never before with 25W stereo speakers crafted around a 360° HD surround sound system. Pair with other HD77 speakers through TWS mode for 50W of crystal-clear sound and a loud, deep bass. Durable & Rugged Body – Defy the elements with a shockproof, dustproof, impact-resistant, and IPX6 waterproof Bluetooth speaker. Great for outdoor, travel, kitchen, and workshop listening. Seamless Connectivity – Pair the HD77 with any Android, iOS, laptop, tablet, smart TV, or more. The Bluetooth 5.0 wireless speaker with microphone makes taking & making calls a breeze. For Those on the Go – Take your portable Bluetooth speakers wherever you wander with a battery that lasts up to 20 hours. Just charge the device through the USB-C port, and secure it with the carabiner & strap included in the box. Additional Features – Add flair to your wireless outdoor speakers with an ambient LED light mode. Enjoy convenient control buttons for a hassle-free experience. 1-Year Warranty. IPX6 Waterproof Design – Dash through rain or snow with the enduring waterproof Bluetooth speaker. Take your HD77 anywhere from the beach to the pool, or even in the shower. Long-Lasting Battery – Get up to 20 hours without a recharge on your favorite music, podcasts, and more.",
    category_id: 1
)

speaker1 = File.open("app/assets/images/speaker.jpg")
speaker.photos.attach(io: speaker1, filename: "speaker.jpg")

# health & household

## 1
laundry = Product.create(
    name: "PODS Laundry Detergent Soap Pods, Spring Meadow, 61 count",
    price: 15.00,
    description: "We have only quality products. High quality- save your time and your money. Ensure long-lasting and effective performance.",
    category_id: 2
)

laundry1 = File.open("app/assets/images/laundry.jpg")
laundry.photos.attach(io: laundry1, filename: "laundry.jpg")

## 2
sanitizer = Product.create(
    name: "Lysol Laundry Sanitizer Additive, Crisp Linen, 90oz + Lysol Disinfecting Wipes, Lemon & Lime Blossom, 80 ct (Pack of 4), Packaging May Vary",
    price: 26.94,
    description: "Lysol Laundry Sanitizer Additive: Tested & Proven to Kill COVID-19 Virus* (*Kills SARS-CoV-2 during pre-soak conditions in 5 minutes), EPA Reg #777-128. Lysol Laundry Sanitizer Additive: Kills 99.9% of bacteria*** detergents leave behind (**When used as directed)",
    category_id: 2
)

sanitizer1 = File.open("app/assets/images/sanitizer.jpg")
sanitizer.photos.attach(io: sanitizer1, filename: "sanitizer.jpg")

## 3
covidtest = Product.create(
    name: "Celltrion DiaTrust COVID-19 Ag Home Test, 2 Tests Per Pack, FDA EUA Authorized Multiple Target OTC Test, Result in 15 Minutes Without Sending to a Lab",
    price: 19.99,
    description: "SHELF-LIFE EXTENSION: Our tests sold from Amazon has 6 months longer shelf-life than the printed expiration date on the package. FDA granted 6 months shelf-life extension for the Celltrion DiaTrust COVID-19 Ag Home Test, which extended the shelf life from 12 months to 18 months as of May 20th, 2022. The affected lot numbers can be found on FDA’s website: https://www.fda.gov/media/159236/download",
    category_id: 2
)

covidtest1 = File.open("app/assets/images/covidtest.jpg")
covidtest.photos.attach(io: covidtest1, filename: "covidtest.jpg")

## 4
olay = Product.create(
    name: "Olay Regenerist Whip Face Moisturizer, 1.7 Ounce",
    price: 29.99,
    description: "LIGHT AS AIR MOISTURE: Reduces the appearance of fine line and wrinkles. DELIGHTFULLY WHIPPED: Made with Active Rush Technology to transform skin. SCIENCE MEETS BEAUTY: For a lifted look. INSTANT ABSORBTION: Leaves skin feeling soft. POWERFUL BUT BREATHABLE: Your skin will feel hydrated.",
    category_id: 2
)

olay1 = File.open("app/assets/images/olay_health.jpg")
olay.photos.attach(io: olay1, filename: "olay_health.jpg")

## 5
shaver = Product.create(
    name: "Gillette Razor for Men with Exfoliating Bar Gold Edition by GilletteLabs, Includes 1 Handle, 3 Razor Blade Refills, 1 Travel Case, 1 Premium Magnetic Stand",
    price: 28.70,
    description: "GilletteLabs men's razor: for effortless shaving in one efficient stroke. With exfoliating bar: built-in exfoliating bar removes dirt and debris before the blades pass. Incredible comfort and closeness: this razor for men features Gillette’s best razor blades first 4 blades. Adaptive design: 2D FlexDisc contours to your face to ensure comfort and contact with every stroke. Long-lasting durability: the razor handle and exfoliating bar is backed by lifetime warranty See below Warranty tile for more info.",
    category_id: 2
)

shaver1 = File.open("app/assets/images/shaver.jpg")
shaver.photos.attach(io: shaver1, filename: "shaver.jpg")

## 6
supplement = Product.create(
    name: "Simply Nature's Promise - Fruit and Vegetable Supplements - 90 Veggie and 90 Fruit Capsules - Made with Whole Food Superfoods, Packed Vitamins & Minerals - Soy Free - No Fillers or Extracts",
    price: 42.99,
    description: "Whole Food SuperFood - Fruits & Veggies supplements by Simply Nature's Promise. Get all your daily recommended fruits and vegetables. All natural, whole food, fruit and vegetable supplement. Powerful antioxidants and Energy Support. Made With Only FRUITS AND VEGETABLES That's it! - Just fruits and veggies! Only whole food: Broccoli, Cabbage, Carrot, Cauliflower, Cayenne Pepper, Celery Stalk, Garlic, Kale, Onion, Shiitake Mushroom, Spinach, Sweet Potato, Wheat Grass, Zucchini, Aloe Vera, Apple, Banana, Blueberry, Cherry, Cranberry, Grape, Grapefruit, Lemon, Mango, Orange, Papaya, Pineapple, Raspberry, Strawberry, Tomato. All Natural Benefits - Simply Nature's Promise Fruits & Veggies is perfect for everyone looking to live a healthier, happier lifestyle. Customers who take Fruits & Veggies have experienced increased mental clarity and energy, better sleep, a more regulated digestive system; and improved inflammation, blood pressure, cholesterol, hair, skin, nails, vision, and eye health. 100% SOY FREE.",
    category_id: 2
)

supplement1 = File.open("app/assets/images/supplement_health.jpg")
supplement.photos.attach(io: supplement1, filename: "supplement_health.jpg")

## 7
massage = Product.create(
    name: "Shiatsu Neck and Back Massager with Soothing Heat, Nekteck Electric Deep Tissue 3D Kneading Massage Pillow for Shoulder, Leg, Body Muscle Pain Relief, Home, Office, and Car Use",
    price: 36.79,
    description: "8 Powerful Deep-Shiatsu Kneading Massage Nodes. Our neck massager help you better with alleviate muscle soreness, ease neck stiffness, eliminate cervical fatigue, and relax yourself after a long day work. Easy and Safe to Use. Built-in infrared advanced soothing heat function, the massager will improve your blood circulation, and it is settled within 15 minutes overheating auto-shut off protection. (Can be turned off manually). Adjustable Intensity. This shoulder massager has 3 speed strength level, so you can personalize the pressure to relieve muscle pain and the long handle straps can be used to adjust the massage position and strength as well. Durable and Comfortable Matreial. Made of high-quality PU leather and breathable mesh fabric, Nekteck back massager is easy to use and clean. (The zipper is reversed design). Great Gift Idea Choice for Who You Loved. Perfect for home, office, car and travel use, it has a AC adapter and a Car adapter (all are UL listed);1 year warranty and life-time support from Nekteck, just get this massager to your friends and families.",
    category_id: 2
)

massage1 = File.open("app/assets/images/massager_health.jpg")
massage.photos.attach(io: massage1, filename: "massager_health.jpg")

## 8
firstaid = Product.create(
    name: "200-Piece Professional First Aid Kit for Home, Car or Work : Plus Emergency Medical Supplies for Camping, Hunting, Outdoor Hiking Survival",
    price: 14.99,
    description: "200-PIECE FIRST AID: Keep your family safe indoors & outdoors with premium First Aid supplies. COMPACT, LIGHT AND PORTABLE: Rugged kit fits into backpack or car glovebox, weighs only 16 oz. UPGRADED GEAR FOR 2021: Includes Fire Starter Rod, Wire Saw, Fishing Line, & Mylar Blanket. ALL PURPOSE: Recommended for home, car, boat, camping, kitchen, sports and weather emergencies. QUALITY ASSURANCE: Swiss Safe Guarantees customer satisfaction.",
    category_id: 2
)

firstaid1 = File.open("app/assets/images/firstaid_health.jpg")
firstaid.photos.attach(io: firstaid1, filename: "firstaid_health.jpg")

# sports

## 1
basketball = Product.create(
    name: "WILSON Evolution Game Basketball",
    price: 75.00,
    description: "When you focus on getting better, and not just on getting results, success takes care of itself. That is why the Wilson Evolution Game Ball is the preferred basketball in high schools across the country. THE INDOOR BALL: The Evolution is the indoor game basketball in America, on more courts than any other basketball. Signature EVO feel: the soft feel that the evolution basketball is famous for is due it’s cushion core carcass, making the ball softer to the touch and easier to grip around the rim. Grip & durability: the premium evo microfiber composite cover provides grip that players love and durability to last all season and beyond. Ultimate control: laid in composite channels create a consistent feel and texture over the entire surfACe of the basketball to provide unparalleled control. NFHS approved for play by the national federation of state high school associations (NFHS). Cover construction - micro-fiber composite leather. Intermediate size basketball: 28.5'.",
    category_id: 3
)

basketball1 = File.open("app/assets/images/basketball1.jpg")
basketball.photos.attach(io: basketball1, filename: "basketball1.jpg")

## 2
football = Product.create(
    name: "WILSON GST Game Footballs",
    price: 109.99,
    description: "Wilson GST Leather Game Football - Official Size. MODERN DESIGN: A New visual design combines signature GST performance with a New-look for a New generation of talent. LIGHT LEATHER FORMULA: Wilson’s Light Leather Formula is the softest football leather on the market, with a unique feel that’s easier for your fingers to sink into for more control. HANDCRAFTED IN THE US: The same skilled craftspeople that make every NFL leather football also make every leather GST, resulting unmatched quality craftsmanship. Sewn-On Stripe: Patented sewn-on stripes are composite material instead of paint and provide 82% more grip to aid release for more accurate throws. Accurate Control Lacing: Patented Accurate Control Lacing (ACL) is pebbled instead of smooth and provides more grip in all conditions. NCAA and NFHS Approved.",
    category_id: 3
)

football1 = File.open("app/assets/images/football1.jpg")
football.photos.attach(io: football1, filename: "football1.jpg")

## 3
protein = Product.create(
    name: "Organic Vegan Sport Protein Powder, Vanilla - Probiotics, BCAAs, 30g Plant Protein for Premium Post Workout Recovery - NSF Certified, Keto, Gluten & Dairy Free, Non GMO - Garden of Life - 19 Servings",
    price: 54.95,
    description: "Organic sport protein: Certified USDA organic, Non-GMO project verified, NSF certified for sport, informed choice for sport certified, vegan, gluten free, dairy free, soy free, no added sugars. Post workout recovery: Our Garden of Life Vegan Protein helps you refuel & repair muscles after a hard workout with 30 grams of complete protein and over 5 grams BCAA amino acids glutamine & glutamic acid. Recovery drinks: This sport protein powder promotes faster recovery with an organic high antioxidant blend of organic tart cherries, organic apples, organic turmeric, organic gogi berrie and organic blueberries. Immune system support: This BCAAs amino acid powder contains 2 billion CFU probiotic blend to keep your immune system strong during training. Certified clean: Breath easy knowing this vegan amino acid powder is clean and free of any banned substances.",
    category_id: 3
)

protein1 = File.open("app/assets/images/protein1.jpg")
protein.photos.attach(io: protein1, filename: "protein1.jpg")

## 4
punchbag = Product.create(
    name: "Marwan Sports 3 in 1 Punching Bag for Kids|63 Inch Freestanding Punching Bag Set incl Double Volume Air Pump & Boxing Gloves|Gifts for 3-12 Year Old|Kids Punching Bag with Stand",
    price: 42.99,
    description: "【Fun & Healthy Exercise 】Are you looking to minimise the time children spend sitting down watching TV, playing video games? Try Our USA tested Punching bag set for kids. This inflatable kids boxing bag is a fun and enjoyable sports activity to exercise daily that helps release stress & depression and built self confidence. 【Inflate in Less than 60 Seconds】Double Quick Volume Air Pump makes inflating fast and simple just under 1 minute. Double Action hand pump can inflate on both the up and down stroke, mainly used to inflate airbeds, boats, pools, and many other inflatable items at home in half the time. Designed to inflates 0r Deflates when needed. 【Top Quality Leather Gloves】 High Quality Leather Gloves with Double Padded foam will prevent from any skin or hand injury during practicing Karate, Boxing, Taekwondo or MMA. Breathable and easy to put On/Off. 【The Gift That Never Leaks or Wears Out】 Birthdays, Christmas – this punching bag set is perfect for kids toys gifts for all ages and occasions! Whether you’re looking for 4 year old boy gifts, girls toys, or toys for 7 year old boys, this SUPER STRONG boxing bag set will not Wears out as it is fighter’s tested! This kit is designed for kids aged 3 to 10yrs. 【Cannot Beat Quality & After-Sales Service】Top quality guarantee! No exchange, no return, a new pair of Ninja Punching bag with stand send to you! Buying from us means quick response and caring customer service! No exchange, no quality worried！we will send you a new one if there is an issue with your product for quality reason.",
    category_id: 3
)

punchbag1 = File.open("app/assets/images/punchbag_sport.jpg")
punchbag.photos.attach(io: punchbag1, filename: "punchbag_sport.jpg")

## 5
hoverboard = Product.create(
    name: "SISIGAD Hoverboard for Kids Ages 6-12, with Built-in Bluetooth Speaker and 6.5`` Colorful Lights Wheels, Safety Certified Self Balancing Scooter Gift for Kids",
    price: 129.99,
    description: "▶▶HOVERBOARD WITH BLUETOOTH AND LED LIGHTS - Built-in wireless speaker can be easily connected to devices in second, just enjoy your favorite music or books without wearing headphones.Double row cool LED lights,switch freely to present you an amazing lighting when riding, can also illuminate the road at night. ▶▶UNIQUE DESIGN - The hoverboard is up to 6.21mph; Powered by 350W dual motors, ensure go longer with one charge; Solid 6.5 inch tires,aluminum hub hoverboard.The hover board electric can load riders up to 44-200 lbs,charge time is 2-4 hours for full charge. ▶▶QUALITY ASSURANCE- All SISIGAD hoverboards have passed strict electrical test and meet many standards to ensure safety.Shipping from USA, 90 days return service, any issue just feel free to contact us. ▶▶SMART SELF BALANCE SYSTERM - Equipped with professional gyroscopes, acceleration sensors and motherboard, moving controlled by your body balance, and makes it easier than ever for beginners to learn to ride a hoverboard. It's flexible to go forward & backward, turn around, and maintain balance, give you a safety,smooth and stable riding experience. ▶▶PERFECT GIFT - Specially designed for beginners, amateurs, office workers, dog and cat walkers, free your feet - new way for transportation! So have fun with your family and friends!This hoverboard for kids ages 6-12.",
    category_id: 3
)

hoverboard1 = File.open("app/assets/images/hoverboard.jpg")
hoverboard.photos.attach(io: hoverboard1, filename: "hoverboard.jpg")

## 6
skii = Product.create(
    name: "OutdoorMaster Ski Goggles OTG - Over Glasses Ski/Snowboard Goggles for Men, Women & Youth - 100% UV Protection",
    price: 29.99,
    description: "OTG (OVER-THE-GLASSES) DESIGN - Ski goggles that fits over glasses. Suitable for both ADULTS AND YOUTH. ANTI-FOG LENS & EXCELLENT OPTICAL CLARITY - Dual-layer lens technology with anti-fog coated inner lens gives you a FOG-FREE SKI EXPERIENCE. SAFE & RELIABLE WITH UV PROTECTION - Soft TPU frame with lenses that provide 100% UV400 protection and YEARS OF RELIABLE USE. UNIVERSAL HELMET COMPATIBILITY - Extra long elastic strap ensures great helmet compatibility with all helmets. Suitable for both adults & teens. WHAT YOU GET: 1 x OutdoorMaster OTG Ski Goggles, 1 x Carrying Pouch, CUSTOMER-FAVORITE LIFETIME WARRANTY and friendly customer service.",
    category_id: 3
)

skii1 = File.open("app/assets/images/skii_sport.jpg")
skii.photos.attach(io: skii1, filename: "skii_sport.jpg")

## 7
hoop = Product.create(
    name: "Portable Basketball Hoop with LED Lights, Basketball System 4.76-10ft/ 8-10ft Height Adjustment for Youth Adults, Waterproof, Super Bright to Play at Night Outdoor,Gift for Kids",
    price: 279.00,
    description: "【Portable & Easy to Assemble】 basketball system (net weight:66.1lbs) includes two front portable wheels that allow you to easily move the basketball system to anywhere you want. Either indoor or outdoor, as long as you tilt the basketball hoop 40 degrees to the ground, you'll be able to move the basketball goal with minimal effort. For two people assembly, setting up the basketball system takes approximately 35 minutes. 【Adjustable Height】 Basketball Hoop height can be adjusted from 8 ft to 10 ft, Only adjust the pull rod you can reach any height you want in an easy way(no need of any tools)..The adjustable basketball hoop outdoor can fit diverse needs from different age groups, who are able to enjoy basketball no matter your body shape or sizes. 【High-strength PE Extra-Large Base】With triangle support bar design of the extra-large base, the basketball hoop is very sturdy and durable. Pour water (120lbs) or sand (180lbs) into the bottom,In addition, the counterweight box can hold more than 55lbs of sand, to further stabilize the basketball goal. What's more, Stable baffle can better control the ball. 【Durable & Sturdy】The basketball hoop & goal has edge protection design backboard(Backboard Dimensions:43.3``x29.6``) and shock-absorbing bumper. What's more, the basketball hoop has multiple screws to fix the backboard and rust-proof main shaft, to ensure the basketball goal more durable and sturdy when using indoor or outdoor.",
    category_id: 3
)

hoop1 = File.open("app/assets/images/hoop_sport.jpg")
hoop.photos.attach(io: hoop1, filename: "hoop_sport.jpg")

## 8
roller = Product.create(
    name: "EnterSports Ab Rollers Wheel Kit, Exercise Wheel Core Strength Training Abdominal Roller Set with Push Up Bars, Resistance Bands, Knee Mat Home Gym Fitness Equipment for Abs Workout",
    price: 29.97,
    description: "DURABLE&SILENCE - This ab rollers is made of high-strength stainless steel shaft which can support 600 lbs, 3.2” width roller with the non-slip design let you roll across any surface without wobbling. The handle is covered by foam padding prevent hands from slipping during intense workouts. EASY TO ASSEMBLE - It takes less one minute to assemble the wheel roller, it is easy to pack the exercise wheel to your gym bag, backpack or luggage, enjoy workout anywhere you want. WORKOUT YOUR WHOLE BODY - Entersports roller wheel is designed as your personal fitness trainer. It works various muscles targeting your abs, hip flexors, shoulders, and back, burning your calories to shape a better figure. PACKAGE INCLUDED - Entersports ab wheel comes with all the accessories you need. 2 resistance bands, 2 knee pads, 2 Push Up Bars Handles Grips and 1 exercise guide post. The resistance bands use with the roller or handles grips can increase the difficulty of training, suitable for beginners to professional person.",
    category_id: 3
)

roller1 = File.open("app/assets/images/roller_sport.jpg")
roller.photos.attach(io: roller1, filename: "roller_sport.jpg")

# pet

## 1
treat = Product.create(
    name: "Amazon Brand - Wag Dog Treats, Chicken and Waffle Bites",
    price: 9.99,
    description: "Proudly made in the USA, 100% of ingredients are sourced in the USA. Farm-raised American Chicken is the #1 ingredient. 
    No added poultry by-products; no added corn, soy or wheat, no added artificial flavors. Feed as a treat; training aid or reward for your dog. Feed as a whole piece or break into half or smaller size bite sized pieces. Net wt.12 oz (340g) of chicken and waffle bites in a resealable bag to preserve freshness. Satisfaction Guarantee: We’re proud of our products. If you aren’t satisfied, we’ll refund you for any reason within a year of purchase. 1-877-485-0385. An Amazon brand.",
    category_id: 4
)

treat1 = File.open("app/assets/images/pet_treat.jpg")
treat.photos.attach(io: treat1, filename: "pet_treat.jpg")

## 2
pet_bed = Product.create(
    name: "SAVFOX Plush Calming Dog Beds, Donut Dog Bed for Small Dogs, Medium, Large & X-Large, Comfy Cuddler Dog Bed and Cat Bed in Faux Fur, Washable Dog Bed",
    price: 17.99,
    description: "✅ Buy With Confidence - 90 Day Money Back Guarantee: Include a 1-year warranty plus the No Questions Asked 90-day money-back return policy. If you have any questions about the pet bed, simply reach out to our customer service team. All your issues will be friendly & swiftly resolved within 24 hours. ✅ Better Than Most Pet Beds On The Market: Look for a quality pet bed to help eliminate your pets' suffering from anxiety when sleeping? No need to struggle with cheap flimsy donut pet bed. This donut bed is built with durable, much thicker plush faux fur exterior and premium high quality fibers to keep shape up to 3X longer than others. Knitted and fabricated in top-notch manufacturer, which is the same outsourcer of the most popular original calming bed brand as seen everywhere. ✅ Supports Better Sleep: Ideal for pets to twist up or sprawl, paired with profound crevices, the raised rim around provides warmth with a sense of security, it helps them to calm down faster, ease anxiety, and sleep well. It also provides excellent support for the head and neck and relieves joint and muscle pain. ✅ Warm & Cozy: Great engineered synthetic plush fur, a blend of comfortable and breathable, full stuffing to guarantee your little furry friend surrounded by love & warmth, a perfect gift in the cold winter days. ✅ Non-slip & Easy Care: Pet bed has been designed with a non-slip base, which can be easily fixed on the tile and hardwood floor of the home. It's versatile design can be seamlessly added to the decoration of any room. Hand wash or simply machine wash and dryer -- Machine wash, gentle cycle, Tumble dry, low heat. Please pat to make the dog bed completely fluffy before use.",
    category_id: 4
)

pet_bed1 = File.open("app/assets/images/pet_bed.jpg")
pet_bed.photos.attach(io: pet_bed1, filename: "pet_bed.jpg")

## 3
collar = Product.create(
    name: "TIANYAO Dog Harness No-Pull Dog Vest Set Reflective Adjustable Oxford Material Pet Harness for Small Medium Large Dogs with Leash and Collar",
    price: 20.98,
    description: "Large Size (Dog Leash and Collar Included) - The package included a large dog harness (Chest Girth 25-35 inch), a leash(about 6 ft) and an adjustable collar (for attaching tag only). Suitable for medium and large dogs like golden retriever, Labrador, German shepherd, Husky, American bully pitbull and more. Durable and Comfortable-The unique triangular connected straps design is more tear resistant and durable. It strengthens the anti-tear against big pulling, and this durable dog harness design with comfortable lightweight mesh lining with soft sponge padding in chest and belly. Nylon fabric with high density webbing adds durability of the harness set. No Pull & No Choking-This pet harness is with 2 sturdy metal D-ring on front/back range to attach the leash lead. The front clip is discouraging pulling while the back is for relaxing walking. And the pulling pressure is distributed to the body to prevent choking. Reflective and Locking Features - The reflective straps of the easy control harness maintain high visibility in the dark. And locking feature on both snaps makes it much more secure. Universal seatbelt clip keeps your pet safely restrained and secure in car while driving. Easy to Put on and Take Off - With the Quick-Release buckles, it is easy to put on/ take off the dog harness. Fully adjustable straps at the chest and neck allow a custom fit for your fur friend. Great for walking, running, training or hiking.",
    category_id: 4
)

collar1 = File.open("app/assets/images/pet_collar.jpg")
collar.photos.attach(io: collar1, filename: "pet_collar.jpg")

## 4
toy = Product.create(
    name: "Dog Toys for Aggressive Chewers Large Medium Breed Dog Chew Toys Dog Toothbrush Nearly Indestructible Squeaky Interactive Tough Extremely Durable Toys for Medium Large Dogs",
    price: 17.99,
    description: "ALMOST INDESTRUCTIBLE: Made of STRONG UPGRADED EXTREMELY DURABLE RUBBER, the dog toys are long lasting and provide months of tooth brushing and play. The squeaky dog chew toy is absolutely the best Christmas gift for dogs. DOG CHEW TOY: The dog toy is made of premium rubber, no bitter taste or strong smell. The smell of the toy is light milk coconut scent, it smells really good. Dogs like the smell. It attracts dogs to play. ATTRACTIVE DESIGN: When dog chews the toy, it will squeak which attracts dog to play hours. Popular shape and aligned bristles make the dog toy more attractive and effective. It is like dog is playing with a gator while brushing his own teeth, making teeth cleaning easy and interesting. BRUSH TEETH BY THEMSELVES: After adding toothpaste or favorite food in the mouth of the dog toothbrush, your dog can hold the anti-slip strips with paws and brush their own teeth, freshen breath.",
    category_id: 4
)

toy1 = File.open("app/assets/images/pet_toy.jpg")
toy.photos.attach(io: toy1, filename: "pet_toy.jpg")

## 5
cage = Product.create(
    name: "REPTI ZOO Reptile Glass Terrarium, 18`` x 18`` x 24`` Front Opening Terrarium with Double Hinge Door & Top Screen Ventilation, 30 Gallon Tank Large Reptile Terrarium (Knock-Down)",
    price: 109.99,
    description: "Raised bottom frame in order to fit a substrate heater; And waterproof bottom can hold water for some amphibian pets. Separately front-openning doors make you feed your pet easily and prevent escape. 24 Inch tall terrarium is suitable for reptiles amphibians such as lizard, geckos and so on. Installation manual included, install it or knock down it only in 5 minutes.",
    category_id: 4
)

cage1 = File.open("app/assets/images/pet_cage.jpg")
cage.photos.attach(io: cage1, filename: "pet_cage.jpg")

## 6
groom = Product.create(
    name: "Maxpower Planet Pet Grooming Brush - Double Sided Shedding and Dematting Undercoat Rake Comb for Dogs and Cats,Extra Wide",
    price: 14.97,
    description: "Dual-Sided Design: Start with 9 teeth side for stubborn mats and tangles and finish with 17 teeth side for thinning and deshedding. Achieve faster and more professional dematting and grooming results. Skin Friendly to Your Pets: Our Dematting Brush is designed with Sharpened but Fine Rounded Teeth, allows you easily and safely remove mats, tangles, knots, loose hair without irritation or scratching. Effective Dehedding Tool:This undercoat rake gently removes loose hair, and eliminates tangles, knots, dander and trapped dirt.Perfect solution for dogs and cats with thick fur or dense double coat care. Comfortable to Use: Lightweight and Non-Slip rubber handle for comfortable holding and stability.You will absolutely enjoy your grooming time with this pet brush. Great Gift for Pet Lovers: Our pet grooming brush for dogs is a must-have pet brush for all dog, cat and pet lovers. The ideal gift for your friends and family, they will love it!",
    category_id: 4
)

groom1 = File.open("app/assets/images/pet_gromming.jpg")
groom.photos.attach(io: groom1, filename: "pet_gromming.jpg")

# games

## 1
dota = Product.create(name: 'Dota 2 Large Multiplayer 5 on 5, Intense PvP Online Game', price: 29.99, description: 'Dota 2 is an Action RTS game, developed by Valve Corporation. The title was formally announced on October 13, 2010; and was released as a Free to Play game on July 9th, 2013 for Windows, and July 18th, 2013 for Mac OS and Linux. It is the successor to the very popular Warcraft 3 mod, Defense of the Ancients, which was based on the Aeon of Strife map for StarCraft.', category_id: 5)

dota1 = File.open("app/assets/images/dota2.jpg")
dota.photos.attach(io: dota1, filename: "dota2.jpg")

## 2
uno = Product.create(
    name: "PlayerUnknown's Battlegrounds",
    price: 19.99,
    description: "PUBG: Battlegrounds (previously known as PlayerUnknown's Battlegrounds) is a battle royale game developed by PUBG Studios and published by Krafton. The game, which was inspired by the Japanese film Battle Royale (2000), is based on previous mods created by Brendan PlayerUnknown Greene for other games, and expanded into a standalone game under Greene's creative direction. It is the first game in the PUBG Universe series. The game is played from either a third-person or first-person perspective. In the game, up to one hundred players parachute onto an island where they scavenge for weapons and equipment to kill other players while avoiding getting killed themselves. The available safe area of the game's map decreases in size over time, directing surviving players into an ever tightening space to force encounters. The last surviving player (or team) wins the round.",
    category_id: 5
)

uno1 = File.open("app/assets/images/pubg.jpg")
uno.photos.attach(io: uno1, filename: "pubg.jpg")

## 3
nomansky = Product.create(
    name: "No Man's Sky - Nintendo Switch",
    price: 59.99,
    description: "Embark on an epic voyage, find your own destiny in this epic space adventure. Includes 6 years of updates",
    category_id: 5
)

nomansky1 = File.open("app/assets/images/nomansky.jpg")
nomansky.photos.attach(io: nomansky1, filename: "nomansky.jpg")

## 4
lol = Product.create(
    name: "League of Legends",
    price: 29.99,
    description: "League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre. Since its release in October 2009, League has been free-to-play and is monetized through purchasable character customization. The game is available for Microsoft Windows and macOS. In the game, two teams of five players battle in player-versus-player combat, each team occupying and defending their half of the map. Each of the ten players controls a character, known as a champion, with unique abilities and differing styles of play. During a match, champions become more powerful by collecting experience points, earning gold, and purchasing items to defeat the opposing team. In League's main mode, Summoner's Rift, a team wins by pushing through to the enemy base and destroying their Nexus, a large structure located within.",
    category_id: 5
)

lol1 = File.open("app/assets/images/lol.jpg")
lol.photos.attach(io: lol1, filename: "lol.jpg")

## 5
wow = Product.create(
    name: "World of Warcraft",
    price: "79.99",
    description: "World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth, approximately four years after the events of the previous game in the series, Warcraft III: The Frozen Throne.[3] The game was announced in 2001, and was released for the 10th anniversary of the Warcraft franchise on November 23, 2004. Since launch, World of Warcraft has had nine major expansion packs: The Burning Crusade (2007), Wrath of the Lich King (2008), Cataclysm (2010), Mists of Pandaria (2012), Warlords of Draenor (2014), Legion (2016), Battle for Azeroth (2018), Shadowlands (2020), and Dragonflight (2022).",
    category_id: 5
)

wow1 = File.open("app/assets/images/wow.jpg")
wow.photos.attach(io: wow1, filename: "wow.jpg")

## 6
csgo = Product.create(
    name: "Counter Strike: Global Offensive",
    price: 14.99,
    description: "Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Developed for over two years, Global Offensive was released for OS X, PlayStation 3, Windows, and Xbox 360 in August 2012, and for Linux in 2014. Valve still regularly updates the game, both with smaller balancing patches and larger content additions. The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured. There are nine official game modes, all of which have distinct characteristics specific to that mode. The game also has matchmaking support that allows players to play on dedicated Valve servers, in addition to community-hosted servers with custom maps and game modes. A battle-royale game-mode, Danger Zone, was introduced in late 2018.",
    category_id: 5
)

csgo1 = File.open("app/assets/images/csgo.jpg")
csgo.photos.attach(io: csgo1, filename: "csgo.jpg")

## 7
mh = Product.create(
    name: "Monster Hunter",
    price: 59.99,
    description: "Monster Hunter (モンスターハンター, Monsutā Hantā) is a Japanese media franchise centered on a series of fantasy-themed action role-playing video games that started with the game Monster Hunter for the PlayStation 2, released in 2004. Titles have been released across a variety of platforms, including personal computers, home consoles, portable consoles, and mobile devices. The series is developed and published by Capcom. The games are primarily action role-playing games. The player takes the role of a Hunter, slaying or trapping large monsters across various landscapes as part of quests given to them by locals, with some quests involving the gathering of a certain item or items, which may put the Hunter at risk of facing various monsters. As part of its core gameplay loop, players use loot gained from slaying monsters, gathering resources, and quest rewards to craft improved weapons, armor, and other items that allow them to face more powerful monsters. All main series titles feature multiplayer (usually up to four players cooperatively), but can also be played single player.",
    category_id: 5
)

mh1 = File.open("app/assets/images/mh.jpg")
mh.photos.attach(io: mh1, filename: "mh.jpg")

## 8
ark = Product.create(
    name: "Ark: Survival Evolved",
    price: 59.99,
    description: "Ark: Survival Evolved (stylized as ARK) is a 2017 action-adventure survival video game developed by Studio Wildcard. In the game, players must survive being stranded on one of several maps filled with roaming dinosaurs, fictional fantasy monsters, and other prehistoric animals, natural hazards, and potentially hostile human players. The game is played from either a third-person or first-person perspective and its open world is navigated by foot or by riding a prehistoric animal. Players can use firearms and improvised weapons to defend against hostile humans and creatures, with the ability to build bases as a defense on the ground and on some creatures. The game has both single-player and multiplayer options. Multiplayer allows the option to form tribes of Players in a server. The max number of tribe mates varies from each server. In this mode, all tamed dinosaurs and building structures are usually shared between the members. There is a PvE mode where players cannot fight each other unless a specific war even agreed upon by both parties is triggered.",
    category_id: 5
)

ark1 = File.open("app/assets/images/ark.jpg")
ark.photos.attach(io: ark1, filename: "ark.jpg")

## Reviews

#nintendo
Review.create(title: 'It is addicting', comment: 'I can even play video games when I... use your imagination', rating: 5, user_id: 1, product_id: 1, username: "Payton")
Review.create(title: 'best console game', comment: 'very fluid gameplay and usable on TVs', rating: 5, user_id: 3, product_id: 1, username: "josh")
Review.create(title: 'great quality', comment: "quality is too good that when I stepped on it and it broke my foot :')", rating: 3, user_id: 4, product_id: 1, username: "mary")

# Dota
