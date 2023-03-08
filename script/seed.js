"use strict";

const {
  db,
  models: { User, Products },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: "Cody",
      password: "123",
      email: "cody@gmail.com",
      firstN: "Cody",
      lastN: "DiBella",
      address: "123 Words Ln",
      phone: "(987) 654-3210",
      isAdmin: true,
    }),
    User.create({
      username: "Ron",
      password: "123",
      email: "ron@aol.com",
      firstN: "Ronnie",
      lastN: "Angeles",
      address: "123 Words Ln",
      phone: "(123) 456-7890",
      isAdmin: true,
    }),
    User.create({
      username: "Chris",
      password: "123",
      email: "chris@gmail.com",
      firstN: "Chris",
      lastN: "Kang",
      address: "123 Words Ln",
      phone: "911",
      isAdmin: true,
    }),
    User.create({
      username: "Ryan",
      password: "123",
      email: "ryan@hotmail.com",
      firstN: "Ryan",
      lastN: "Pearl",
      address: "123 Words Ln",
      phone: "(702) 488-6981",
      isAdmin: true,
    }),
  ]);

  const products = await Promise.all([
    Products.create({
      name: "Surfing Van",
      description:
        "The perfect van for surfers! This van comes with a custom surfboard rack, wet suit drying rack, and outdoor shower. The interior is equipped with a cozy sleeping area and a kitchenette to cook up some post-surfing meals.",
      price: 40000,
      quantity: 5,
      imageUrl: "https://www.surfertoday.com/images/stories/vwtransporter.jpg",
    }),
    Products.create({
      name: "Musician Van",
      description:
        "Beautiful large van set up with state-of-the-art sound system and hookups for all types of electric instruments. It also has space for a drum kit, is lined with acoustic sound-deadening panels, and comes with a luxurious sleeping area for when the music session is over.",
      price: 90000,
      quantity: 8,
      imageUrl:
        "https://innotechtoday.com/wp-content/uploads/2022/03/Jason-Walsmith.jpg",
    }),
    Products.create({
      name: "Skiing Van",
      description:
        "Hit the slopes with this custom ski van! The interior is equipped with racks to store your skis, snowboards, and all your winter gear. Stay cozy after a day on the mountain with a built-in heater and a comfortable sleeping area.",
      price: 85000,
      quantity: 6,
      imageUrl:
        "https://freeskier.com/wp-content/uploads/2017/03/Marmot_Featured-640x427.jpg",
    }),
    Products.create({
      name: "Hiking Van",
      description:
        "This van is perfect for outdoor enthusiasts! The interior is designed to store all your hiking gear and comes with a comfortable sleeping area. It also has a built-in outdoor stove, perfect for cooking up a hot meal after a long day on the trails.",
      price: 75000,
      quantity: 3,
      imageUrl:
        "https://i0.wp.com/brookebeyond.com/wp-content/uploads/2020/05/P4081901-scaled.jpg?resize=1024%2C768&ssl=1",
    }),
    Products.create({
      name: "Fishing Van",
      description:
        "Hit the fishing hole with this custom fishing van! The interior is equipped with a fishing rod rack and a built-in fish cleaning station. It also comes with a comfortable sleeping area and kitchenette to cook up your catch.",
      price: 85000,
      quantity: 7,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/58188366f7e0ab31b49f3274/1522319590418-H9120AJWVF7MKE3TVL4B/van.jpg?format=1000w",
    }),
    Products.create({
      name: "Climbing Van",
      description:
        "Take your climbing adventures to the next level with this custom climbing van! The interior is designed to store all your climbing gear and comes with a comfortable sleeping area. It also has a built-in outdoor stove, perfect for cooking up a hot meal after a day on the rocks.",
      price: 80000,
      quantity: 4,
      imageUrl:
        "https://gnomadhome.com/wp-content/uploads/2020/03/backdoors-open-and-mountain_1200x900-1-1024x768.jpg",
    }),
    Products.create({
      name: "Beach Bum Van",
      description:
        "The perfect van for beach lovers! The interior comes with a comfortable sleeping area, an outdoor shower to rinse off sandy toes, and a built-in cooler to keep your drinks cold.",
      price: 70000,
      quantity: 2,
      imageUrl: "https://lushpalm.com/wp-content/uploads/2016/12/DSC7221.webp",
    }),
    Products.create({
      name: "Biker Van",
      description:
        "Take your biking adventures to the next level with this custom biking van! The interior is designed to store all your biking gear and comes with a comfortable sleeping area. It also has a built-in outdoor stove, perfect for cooking up a hot meal after a long day on the bike.",
      price: 70000,
      quantity: 2,
      imageUrl:
        "https://www.twowheeledwanderer.com/wp-content/uploads/2022/01/MTBVanBuild_JillKintner1-1024x1024.jpeg",
    }),
    Products.create({
      name: "Gamer Van",
      description:
        "A van designed with gamers in mind, featuring a top-of-the-line gaming PC, multiple monitors, and a comfortable gaming chair. Perfect for LAN parties or solo gaming sessions on the road.",
      price: 20000,
      quantity: 10,
      imageUrl:
        "https://gamervan.co.uk/wp-content/uploads/2021/09/football-stadium-aspect-ratio-600-400.jpg",
    }),
    Products.create({
      name: "Bookworm Van",
      description:
        "For those who love to read, this van features a cozy reading nook with a built-in bookshelf and plenty of natural light. Perfect for a quiet escape or a literary road trip.",
      price: 12000,
      quantity: 3,
      imageUrl:
        "https://i0.wp.com/incessantbookworm.com/wp-content/uploads/2019/03/cincy-book-bus-featured-image.png?fit=1170%2C780&ssl=1",
    }),
    Products.create({
      name: "Family Van",
      description:
        "A spacious van with plenty of room for the whole family, complete with a kitchenette, sleeping quarters, and a bathroom. Perfect for a family road trip or a weekend camping adventure.",
      price: 30000,
      quantity: 8,
      imageUrl:
        "https://spaceshipsrentals.co.uk/assets/Uploads/Family-Motorhome-happy-travellers__FocusFillWzk2MCw1NDAsInkiLDUwXQwp.webp",
    }),
    Products.create({
      name: "Road Trip Van",
      description:
        "Hit the open road in this classic van, featuring a comfortable bed, plenty of storage space, and all the essentials for a memorable road trip.",
      price: 18000,
      quantity: 6,
      imageUrl:
        "https://roadtriporegon.com/wp-content/uploads/2019/07/QT7A1486-1024x696.jpg",
    }),
    Products.create({
      name: "Artists' Van",
      description:
        "A van designed for artists, with a spacious workspace, plenty of natural light, and all the supplies you need to create your next masterpiece. Perfect for a creative escape or a cross-country art tour.",
      price: 22000,
      quantity: 4,
      imageUrl:
        "https://i.pinimg.com/originals/18/68/f6/1868f6116f5ce25cc52e3f2973733ab7.jpg",
    }),
    Products.create({
      name: "Foodie Van",
      description:
        "A van designed for food lovers, featuring a gourmet kitchen, plenty of storage space, and all the cooking tools and equipment you need to prepare delicious meals on the go. Perfect for a culinary adventure or a food-focused road trip.",
      price: 28000,
      quantity: 7,
      imageUrl:
        "https://www.hospitalitymagazine.com.au/wp-content/uploads/food-truck-in-the-street-496731672-863bfb69328341c1804fec18e39be715.jpg",
    }),
    Products.create({
      name: "Gardener Van",
      description:
        "Perfect for those who love gardening on the go. Comes with a built-in greenhouse and plenty of storage space for all your gardening tools.",
      price: 20000,
      quantity: 5,
      imageUrl:
        "https://i0.wp.com/www.curbsideclassic.com/wp-content/uploads/2018/01/CC-349-015.jpg",
    }),
    Products.create({
      name: "Luxury Van",
      description:
        "For those who like to travel in style. This van is equipped with all the latest luxury amenities, including a flat-screen TV, leather seats, and a wine fridge.",
      price: 100000,
      quantity: 1,
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-unity-scenic-1612452233.jpg?crop=0.505xw:0.757xh;0.170xw,0.137xh&resize=1200:*",
    }),
    Products.create({
      name: "Student Van",
      description:
        "The perfect van for students on-the-go! This van comes with a built-in desk and plenty of storage for textbooks and school supplies. It also includes a comfortable sleeping area and a kitchenette to cook up some late-night study snacks.",
      price: 70000,
      quantity: 10,
      imageUrl:
        "https://www.sojitz.com/caravan/article/images/article_post_1_11.jpg",
    }),
    Products.create({
      name: "Football Van",
      description:
        "Get ready for game day with this custom football van! The interior is designed to store all your football gear and includes a built-in locker room for changing. It also has a comfortable sleeping area for post-game recovery.",
      price: 90000,
      quantity: 8,
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/e03cd15d-71d3-483c-b65d-08658e2e16ba-1608304771.jpeg",
    }),
    Products.create({
      name: "Baseball Van",
      description:
        "Take your love for baseball on the road with this custom baseball van! The interior is designed to store all your baseball gear and includes a built-in batting cage for practice. It also has a comfortable sleeping area for post-game recovery.",
      price: 85000,
      quantity: 6,
      imageUrl:
        "https://thejournaylist.com/wp-content/uploads/2021/03/Daniel-Norris-Van-Life-Millionaire-01_.jpg",
    }),
    Products.create({
      name: "Hockey Van",
      description:
        "Hit the ice with this custom hockey van! The interior is designed to store all your hockey gear and includes a built-in ice rink for practice. It also has a comfortable sleeping area for post-game recovery.",
      price: 95000,
      quantity: 4,
      imageUrl:
        "https://mytourig.com/wp-content/uploads/2023/01/camper-van-in-snow.jpg",
    }),
    Products.create({
      name: "Basketball Van",
      description:
        "Get ready to shoot some hoops with this custom basketball van! The interior is designed to store all your basketball gear and includes a built-in court for practice. It also has a comfortable sleeping area for post-game recovery.",
      price: 80000,
      quantity: 7,
      imageUrl:
        "https://tinyhousetalk.com/wp-content/uploads/Familys-Van-Conversion-with-Basketball-Hoop-2-900x600.jpg",
    }),
    Products.create({
      name: "Murder Mystery Van",
      description:
        "This van is perfect for mystery enthusiasts! The interior is designed to give you a feeling of being in a real-life Clue game. It comes with hidden compartments, puzzles, and a special kit to solve mysteries. The sleeping area is comfortable and the van comes with all the amenities you need.",
      price: 85000,
      quantity: 4,
      imageUrl:
        "https://cdn.thisiswhyimbroke.com/images/the-mystery-machine-van-idealclassiccars1-640x534.jpg",
    }),
    Products.create({
      name: "Cartoon Fan Van",
      description:
        "This van is perfect for cartoon lovers! The interior is designed with colorful cartoon characters and comes with a built-in projector to watch all your favorite cartoons. It also has a cozy sleeping area and a kitchenette to cook up some cartoon-inspired snacks.",
      price: 75000,
      quantity: 6,
      imageUrl:
        "https://live.staticflickr.com/4730/39480598251_c63ec1b0e1_b.jpg",
    }),
    Products.create({
      name: "Theater Van",
      description:
        "This van is perfect for theater lovers! The interior is designed to look like a theater and comes with a built-in projector to watch all your favorite movies. It also has a comfortable sleeping area and a kitchenette to cook up some theater-inspired snacks.",
      price: 85000,
      quantity: 5,
      imageUrl:
        "https://cdn.trendhunterstatic.com/phpthumbnails/275/275204/275204_1_800.jpeg",
    }),
    Products.create({
      name: "Tailgate Van",
      description:
        "This van is perfect for tailgating! The interior is equipped with a bar, a grill, and a large TV to watch all your favorite sports games. It also has a comfortable sleeping area for when the party is over.",
      price: 90000,
      quantity: 4,
      imageUrl:
        "https://www.extraspace.com/blog/wp-content/uploads/2021/08/Best-Tailgating-Vehicles-Vans.jpeg",
    }),
    Products.create({
      name: "Software Engineer Van",
      description:
        "This van is perfect for software engineers! The interior is designed to give you a productive workspace on the go. It comes with a comfortable desk, a high-speed internet connection, and all the amenities you need to stay productive. It also has a cozy sleeping area for when the workday is over.",
      price: 95000,
      quantity: 3,
      imageUrl:
        "https://bearfoottheory.com/wp-content/uploads/2020/02/California_Joshua-Tree_Sprinter-Van-44-Interior-Working.jpg",
    }),
    Products.create({
      name: "Star Wars Van",
      description:
        "This van is perfect for Star Wars fans! The interior is designed with a Star Wars theme and comes with a comfortable sleeping area. It also features a built-in projector for watching your favorite Star Wars movies.",
      price: 85000,
      quantity: 5,
      imageUrl:
        "https://www.guyswithrides.com/wp-content/uploads/2021/10/727DAF2D-2EE0-40C8-BD46-F90FCCD05269.jpeg",
    }),
    Products.create({
      name: "Harry Potter Bus",
      description:
        "Calling all Harry Potter fans! This van is designed to look like the Hogwarts Express, complete with a comfortable sleeping area and a kitchenette to cook up some magical meals. It also features a built-in library with all your favorite Harry Potter books.",
      price: 300000,
      quantity: 4,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/59945385197aeacc911dc0ba/1587125053604-NXU6W2MRKR5VSKNC3J06/Harry+Potter+tour+bus-min.jpg",
    }),
    Products.create({
      name: "Game of Thrones Van",
      description:
        "This van is perfect for Game of Thrones fans! The interior is designed with a Game of Thrones theme and comes with a comfortable sleeping area. It also features a built-in projector for watching your favorite Game of Thrones episodes.",
      price: 90000,
      quantity: 6,
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ca/c4/c1/game-of-thrones-tours.jpg?w=1200&h=-1&s=1",
    }),
    Products.create({
      name: "Lord of the Rings Van",
      description:
        "Calling all Lord of the Rings fans! This van is designed to look like the Shire, complete with a comfortable sleeping area and a kitchenette to cook up some hobbit-inspired meals. It also features a built-in library with all your favorite Lord of the Rings books.",
      price: 95000,
      quantity: 3,
      imageUrl:
        "https://editorial01.shutterstock.com/wm-preview-1500/766659r/fb1b9b20/Shutterstock_766659r.jpg",
    }),
    Products.create({
      name: "Muppets Van",
      description:
        "This van is perfect for Muppets fans! The interior is designed with a Muppets theme and comes with a comfortable sleeping area. It also features a built-in projector for watching your favorite Muppets movies.",
      price: 80000,
      quantity: 7,
      imageUrl: "https://live.staticflickr.com/34/123645261_4ed3d4643c_b.jpg",
    }),
    Products.create({
      name: "Lego Van",
      description:
        "Calling all Lego fans! This van is designed to look like a giant Lego block, complete with a comfortable sleeping area and a kitchenette to cook up some colorful meals. It also features a built-in collection of Legos to play with.",
      price: 85000,
      quantity: 4,
      imageUrl:
        "https://mymodernmet.com/wp/wp-content/uploads/2019/02/LEGO-volkswagen-camper-1.jpg",
    }),
    Products.create({
      name: "Pirates Van",
      description:
        "Sail the high seas with this custom Pirates Van! Comes with a built-in treasure chest and a plank to walk. The interior is designed with a pirate-themed decor, complete with a cozy sleeping area.",
      price: 90000,
      quantity: 7,
      imageUrl:
        "https://i.pinimg.com/736x/cb/df/da/cbdfdaaeb36e111eda6acffaa7f3fe13--truck-camper-rv-campers.jpg",
    }),
    Products.create({
      name: "Mermaid Van",
      description:
        "Explore the underwater world with this Mermaid Van! The interior is designed with a mermaid-themed decor, complete with a seashell bed and a fish tank. Comes with a built-in swimming pool and a shower to rinse off the saltwater.",
      price: 95000,
      quantity: 4,
      imageUrl:
        "https://i.pinimg.com/originals/86/96/a7/8696a7e0393a5d73e7f98932a409fef1.jpg",
    }),
    Products.create({
      name: "Cowboy Van",
      description:
        "Saddle up and hit the open road with this Cowboy Van! Comes with a built-in lasso and a cowboy hat. The interior is designed with a western-themed decor, complete with a cozy sleeping area and a kitchenette to cook up some cowboy-style meals.",
      price: 85000,
      quantity: 9,
      imageUrl:
        "https://dustfactoryvintage.com/wp-content/uploads/2012/10/horse-on-van.jpg",
    }),
    Products.create({
      name: "NASA Van",
      description:
        "Blast off to space with this NASA Van! Comes with a built-in space shuttle and a mission control center. The interior is designed with a space-themed decor, complete with a comfortable sleeping area and a kitchenette to cook up some space food.",
      price: 100000,
      quantity: 2,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Astrovan_at_KSC_LC-39A.jpg/1200px-Astrovan_at_KSC_LC-39A.jpg",
    }),
    Products.create({
      name: "Vampire Van",
      description:
        "Travel the world of the undead with this Vampire Van! Comes with a built-in coffin and a bat-shaped steering wheel. The interior is designed with a gothic-themed decor, complete with a luxurious sleeping area and a kitchenette to cook up some spooky meals.",
      price: 95000,
      quantity: 6,
      imageUrl:
        "https://i.pinimg.com/originals/72/17/17/7217173dd414fe0b292a5e33b0189fe0.jpg",
    }),
    Products.create({
      name: "Little Mermaid Bus",
      description:
        "This van is perfect for those who love to be 'under the sea'! The interior is decorated with a seaside theme, and includes a custom mermaid tail bedspread. The van also includes a 'fish tank' shower and a built-in aquarium.",
      price: 90000,
      quantity: 6,
      imageUrl:
        "https://live.staticflickr.com/8310/8073072792_46a83f91ed_b.jpg",
    }),
    Products.create({
      name: "Aladdin Van",
      description:
        "A whole new world awaits in this Aladdin-inspired van! The van features intricate Middle Eastern-inspired decor and comes with a custom magic carpet bedspread. The van also includes a built-in hookah lounge and a rooftop deck for stargazing.",
      price: 85000,
      quantity: 5,
      imageUrl: "https://pbs.twimg.com/media/D3KHbo4W4AA3H3s.jpg:large",
    }),
    Products.create({
      name: "Beauty and the Beast Bus",
      description:
        "Experience the magic of 'Beauty and the Beast' in this van! The interior features a library theme, with shelves of books and a custom stained glass window. The van also includes a 'beast's lair' sleeping area and a built-in rose garden.",
      price: 200000,
      quantity: 7,
      imageUrl: "https://pbs.twimg.com/media/DpyryV7WwAAWQaW.jpg:large",
    }),
    Products.create({
      name: "Lion King Bus",
      description:
        "Hakuna matata in this 'Lion King' inspired van! The van is decorated with an African savannah theme and features custom lion king artwork. The van also includes a built-in 'pride rock' sleeping area and a rooftop deck for stargazing.",
      price: 80000,
      quantity: 4,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5be72eea2714e5ddca521530/1632765711327-TSDUMW6FYY5CCF3C591P/Bus+Wrap_Lion+King_Drivers+Side_Full_NYPL_HQ.jpg",
    }),
    Products.create({
      name: "Peter Pan Bus",
      description:
        "Never grow up in this 'Peter Pan' inspired van! The interior features a 'neverland' theme, with a custom pirate ship bed and a built-in 'mermaid lagoon' shower. The van also includes a built-in trampoline and a rooftop deck for stargazing.",
      price: 90000,
      quantity: 6,
      imageUrl:
        "https://mickeyblog.com/wp-content/uploads/2019/11/Peter-Pan-Bus.jpg",
    }),
    Products.create({
      name: "Minnie Mouse Van",
      description:
        "Get in the Disney spirit with this 'Minnie Mouse' inspired van! The interior features classic black and white decor and custom Minnie Mouse artwork. The van also includes a built-in theater screen for movie nights and a rooftop deck for stargazing.",
      price: 75000,
      quantity: 3,
      imageUrl:
        "https://thenewswheel.com/wp-content/uploads/2017/07/Minnie-Van.png",
    }),
    Products.create({
      name: "Barbie Van",
      description:
        "Experience true magic in this 'Barbie' inspired van! The van is decorated with a fairytale theme and includes a custom princess bedspread. The van also includes a built-in rose garden and a rooftop deck for stargazing.",
      price: 95000,
      quantity: 7,
      imageUrl:
        "https://www.travelandleisure.com/thmb/awZ1xH3fVwMZbOsp0Yyr-iiJjyA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/exterior-barbie-camper-rvshare-BARBIERV0422-83300721b8a74c9e91d0ac2af788b9c8.jpg",
    }),
    Products.create({
      name: "Toy Collector Van",
      description:
        "Take your toy collection on the road with this van inspired by Toy Story! The interior is designed to store all your favorite toys and comes with a comfortable sleeping area. It also has a built-in mini movie theater, perfect for watching Toy Story on the go.",
      price: 100000,
      quantity: 10,
      imageUrl:
        "https://www.lichtsinn.com/blog/wp-content/uploads/sites/60/2019/06/IMG_2655.jpg",
    }),
    Products.create({
      name: "Emotion Van",
      description:
        "Experience all the emotions on the road with this van inspired by Inside Out! The interior is designed with vibrant colors and comes with a comfortable sleeping area. It also has a built-in sensory room, perfect for meditating or relaxing after a long day.",
      price: 90000,
      quantity: 5,
      imageUrl:
        "http://carguychronicles.com/wp-content/uploads/2022/12/Van-9-1.jpeg",
    }),
    Products.create({
      name: "Pizza Planet Van",
      description:
        "Join Buzz and Woody on an intergalactic adventure with this Pizza Planet van inspired by Toy Story! The interior is designed with a fun and futuristic theme and comes with a comfortable sleeping area. It also has a built-in kitchenette to make delicious space-themed meals.",
      price: 110000,
      quantity: 7,
      imageUrl:
        "https://thepizzapost.co.uk/blog/wp-content/uploads/2022/01/49260C80-0E7B-4CDA-9C6B-4C0870B27BC3-scaled.jpg",
    }),
    Products.create({
      name: "Ratatouille Bus",
      description:
        "Cook up a storm with this van inspired by Ratatouille! The interior is designed with a French-inspired theme and comes with a comfortable sleeping area. It also has a built-in kitchenette to make delicious meals inspired by the movie.",
      price: 95000,
      quantity: 4,
      imageUrl: "https://pbs.twimg.com/media/Eqkg2i9XUAIVgTm.jpg",
    }),
    Products.create({
      name: "Monsters Bus",
      description:
        "Get ready for a scare with this van inspired by Monsters Inc.! The interior is designed with a monster theme and comes with a comfortable sleeping area. It also has a built-in entertainment system to watch your favorite monster movies.",
      price: 105000,
      quantity: 8,
      imageUrl: "http://marketingmag.ca/wp-content/uploads/2013/06/image1.jpeg",
    }),
    Products.create({
      name: "Stranger Things Van",
      description:
        "This van is perfect for fans of the hit show Stranger Things. It comes equipped with all the necessary equipment for ghost hunting and is perfect for camping out in the Upside Down.",
      price: 120000,
      quantity: 2,
      imageUrl:
        "https://i2-prod.cambridge-news.co.uk/incoming/article16583002.ece/ALTERNATES/s1200c/0_WhatsApp-Image-2019-07-14-at-31831-PMjpeg.jpg",
    }),
    Products.create({
      name: "Fitness Van",
      description:
        "Get fit on the go with this fully equipped gym on wheels! The interior includes a weight lifting station, yoga mat, and treadmill. It also has a small kitchenette to make post-workout smoothies.",
      price: 85000,
      quantity: 4,
      imageUrl:
        "https://i0.wp.com/thevantasticlife.com/wp-content/uploads/2021/02/IMG_4548-scaled.jpg?resize=780%2C400&ssl=1",
    }),
    Products.create({
      name: "Texas Van",
      description:
        "This van is perfect for anyone who loves the Lone Star State! It includes a spacious sleeping area, kitchenette, and a custom built-in barbecue pit for cooking up some Texas-style brisket.",
      price: 80000,
      quantity: 3,
      imageUrl:
        "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/14140161-0-96216291.jpg",
    }),
    Products.create({
      name: "Las Vegas Van",
      description:
        "Take your love for Sin City on the road with this Vegas-themed van! The interior is inspired by classic Vegas hotels and includes a cozy sleeping area and a mini casino complete with slot machines.",
      price: 95000,
      quantity: 6,
      imageUrl:
        "https://xperiencepoland.com/wp-content/uploads/2020/04/party-van-wroclaw-4.jpg",
    }),
    Products.create({
      name: "NoBull Van",
      description:
        "This van is perfect for fans of NoBull footwear! The interior is decked out in NoBull gear and includes a sleeping area and a mini gym complete with a weight lifting station and yoga mats.",
      price: 90000,
      quantity: 7,
      imageUrl:
        "https://www.motorbiscuit.com/wp-content/uploads/2017/08/XV-HD-Announcement-Photo-2-scaled-1.jpeg?w=1200",
    }),
    Products.create({
      name: "Gym Shark Van",
      description:
        "Take your love for Gym Shark on the road with this custom van! The interior includes a sleeping area, small kitchenette, and a mini gym with a weight lifting station and cardio equipment.",
      price: 85000,
      quantity: 4,
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/gray/CCRO2ML3EBMD7LB2BM37TCWUXM.jpg",
    }),
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      ron: users[1],
      chris: users[2],
      ryan: users[3],
    },
    products: {
      products,
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
