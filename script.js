// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else if (navbar) {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product data with multiple images for carousel
const products = {
    'product1': {
        images: [
            'hand-tufted-lightsaber-keyboard-armrest-pad-in-use-Mustafar.webp',
            'hand-tufted-lightsaber-armrest-red-sith.webp',
            'hand-tufted-lightsaber-armrest-blue-jedi.webp',
            'hand-tufted-lightsaber-armrest-red-sith-back.webp',
            'hand-tufted-lightsaber-armrest-blue-jedi-back.webp'
        ],
        title: 'Hand-Tufted Lightsabre Keyboard Armrest',
        description: 'Upgrade your desk setup with this hand-tufted red Sith lightsaber armrest, the perfect Star Wars-themed ergonomic accessory for fans, gamers, and remote workers alike. Crafted using high-quality materials, the durable design offers wrist support during long typing sessions. Ideal for use with keyboards, laptops, and workstations.',
        price: 'R 350.00',
        features: [
            'Height: 2.5 cm',
            'Width: 13 cm',
            'Length: 74 cm',
        ]
    },
    'product2': {
        images: [
            'naruto_akatsuki_cloud_rug.webp',
			'naruto_akatsuki_cloud_rug_back.webp'
        ],
        title: 'Handmade Tufted Naruto Cloud Akatsuki Rug',
        description: 'Introducing the Naruto Cloud Rug by Bangarang Crafts: a hand-tufted homage to the iconic imagery of Naruto. Soft, durable, and whimsically designed, it brings the serene essence of floating clouds into your home. Elevate any space with this unique blend of fandom and comfort, perfect for any Naruto enthusiast or lover of artisanal decor.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 69cm',
            'Length: 102cm'
        ]
    },
    'product3': {
        images: [
            'DarthVader_Tufted_Rug.webp',
			'DarthVader_Tufted_Rug_Back.webp'
        ],
        title: 'Handmade Tufted Darth Vader Rug',
        description: 'Step into the Star Wars universe with this striking handmade Darth Vader rug. With its bold design and cinematic vibes, this piece is a must-have for any true fan of the Empire.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 73cm',
            'Length: 80cm'
        ]
    },
    'product4': {
        images: [
            'StarWars_StormTrooper_TuftedRug.webp',
			'StarWars_StormTrooper_TuftedRug_Back.webp'
        ],
        title: 'Handmade Tufted Stormtrooper Rug',
        description: 'Transform your space with this bold and unique tufted rug featuring the iconic Stormtrooper helmet.Handmade with love and precision, this piece brings character and fandom flair to any room, perfect for your gaming corner, bedroom, home theater, or collector’s display.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 74cm',
            'Length: 78cm'
        ]
    },
    'product5': {
        images: [
            'gray-xenomorph-alien-tshirt-handcarved-print-full.webp',
			'gray-xenomorph-alien-tshirt-handcarved-print.webp'
        ],
        title: 'Xenomorph Alien T-Shirt – Hand-Carved Stamp Print',
        description: 'Featuring a hand-carved stamp print of the iconic alien from the Alien franchise. Printed on a soft, high-quality cotton tee, this design brings raw detail and underground style to your wardrobe. Each print is inspired by traditional block printing, giving every shirt a unique, gritty look that fans of H.R. Giger and classic sci-fi horror will love.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product6': {
        images: [
            'Blanka-Street-Fighter-T-Shirt-Red-Block-Printed-Retro-Gamer-Tee-Large-edited.webp',
			'blanka-street-fighter-tshirt-red-retro-gamer-tee-1.webp'
        ],
        title: 'Blanka Street Fighter T-Shirt – Block Printed Retro Gamer Tee',
        description: 'This bold tee features a striking linocut-style design of Blanka in his iconic crouched pose—block printed for a crisp, bold, and timeless look. Each shirt is carefully printed using traditional block printing methods, giving it a unique texture and feel that stands out from mass-produced prints. Its the perfect wearable for fans of classic arcade action, handmade quality, and bold graphic style.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product7': {
        images: [
            'blue-hand-printed-totoro-inspired-block-print-tshirt-002.webp',
			'blue-hand-printed-totoro-inspired-block-print-tshirt-001.webp'
        ],
        title: 'Hand-Printed Totoro-Inspired T-Shirt – Block Print Fan Art Tee',
        description: 'This Totoro-inspired t-shirt is hand printed using block printing techniques, giving each piece a unique artisan touch. Featuring the beloved forest spirit with an umbrella alongside a young girl, this fan art shirt captures the charm of My Neighbor Totoro. Made from soft, breathable cotton fabric, this unisex tee blends comfort with handmade creativity. Perfect for Studio Ghibli fans, anime lovers, and anyone who enjoys whimsical graphic tees.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product8': {
        images: [
            'light-red-hand-printed-skull-block-print-tshirt-002.webp',
			'light-red-hand-printed-skull-block-print-tshirt-001.webp'
        ],
        title: 'Hand-Printed Skull T-Shirt – Block Print Gothic Streetwear',
        description: 'This skull t-shirt is hand printed using traditional block printing techniques, making every piece unique. The bold black skull design adds an edgy gothic streetwear vibe, perfect for fans of alternative fashion, festivals, and casual everyday style. Crafted with care on soft, breathable fabric, this unisex graphic tee combines comfort with handmade artistry. A one-of-a-kind skull shirt for those who love originality in their wardrobe.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product9': {
        images: [
            'groot.webp',
			'Groot02.webp',
			'Groot03.webp',
			
        ],
        title: 'Groot Planter Pot – Small Concrete Plant Pot',
        description: 'Introducing our stunning Rustic Mini Planter, meticulously crafted to seamlessly complement both indoor and outdoor spaces. Each planter is individually cast and thoroughly inspected to maintain our commitment to superior quality.',
        price: 'R 150.00',
        features: [
            'Height: 10cm',
            'Width: 9.1cm',
            'Length: 9.6cm',
			
        ]
    },
	'product10': {
        images: [
            'Skull.webp',
			'Skull01.webp',
			'Skull02.webp',
			
        ],
        title: 'Mini Skull Cement Planter Pot',
        description: 'Introducing our stunning Rustic Mini Planter, meticulously crafted to seamlessly complement both indoor and outdoor spaces. Each planter is individually cast and thoroughly inspected to maintain our commitment to superior quality.',
        price: 'R 100.00',
        features: [
            'Height: 7cm',
            'Width: 7.6cm',
            'Length: 9.9cm',
			
        ]
    },
	'product11': {
        images: [
            'Mini_Bulbasaur_Cement_Planter_Handmade_Pokémon_Succulent_Pot_1.webp',
			'Mini_Bulbasaur_Cement_Planter_Handmade_Pokémon_Succulent_Pot_2.webp',
			'bbs003.webp',
			
        ],
        title: 'Mini Bulbasaur Cement Planter – Pokémon Succulent Pot',
        description: 'Introducing our stunning Rustic Mini Planter, meticulously crafted to seamlessly complement both indoor and outdoor spaces. Each planter is individually cast and thoroughly inspected to maintain our commitment to superior quality.',
        price: 'R 100.00',
        features: [
            'Height: 7.6cm',
            'Width: 8.7cm',
            'Length: 9.8cm',
			
        ]
    },
	'product12': {
        images: [
            'skull_cement_ashtray_01.webp',
			'skull_cement_ashtray_02.webp',
			'skull_cement_ashtray_03.webp',
			
        ],
        title: 'Skull Cement Ashtray',
        description: 'Elevate your space with our stunning Skull Cement Ashtray, meticulously crafted with a rustic charm that seamlessly blends indoor and outdoor aesthetics. Each piece is cast individually, ensuring impeccable quality and durability, while our meticulous quality checks guarantee consistent excellence.',
        price: 'R 60.00',
        features: [
            'Height: 2cm',
            'Width: 10cm',
            'Length: 11cm',
			
        ]
    },
	'product13': {
        images: [
            'Twist003.webp',
			'Twist002.webp',
			'Twist004.webp',
			
        ],
        title: 'Twisted Concrete Planter',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 80.00',
        features: [
            'Height: 8cm',
            'Width: 10cm',
            'Length: 10cm',
			
        ]
    },
	'product14': {
        images: [
            'Round+Tray004.webp',
			'Round+Tray002.webp',
			'Round+Tray003.webp',
			'Round+Tray005.webp',
			
        ],
        title: 'Round+Tray Concrete Planter',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 60.00',
        features: [
            'Height: 7cm',
            'Width: 10cm',
            'Length: 10cm',
			
        ]
    },
	'product15': {
        images: [
            'x3Hex003.webp',
			'x3Hex004.webp',
			'x3Hex005.webp',
			
			
        ],
        title: 'X3 Hex Concrete Planters',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 100.00',
        features: [
            'Height: 5cm',
            'Width: 11cm',
            'Length: 11cm',
			
        ]
    },
	'product16': {
        images: [
            'x4Honey002.webp',
			'x4Honey005.webp',
			'x4Honey006.webp',
			
			
			
        ],
        title: 'X4 Honeycomb Concrete Planters',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 100.00',
        features: [
            'Height: 5cm',
            'Width: 10cm',
            'Length: 10cm',
			
        ]
    },
	'product17': {
        images: [
            'DartVader.webp',
			'DarthVader_Back.webp',
			'DartVader02.webp',
			'DartVader03.webp',
			
			
        ],
        title: 'Mini Darth Vader Planter',
        description: 'Introducing our exquisite Mini Planter, featuring a meticulously designed 3D-printed shell that adds a modern twist to any space, indoors or out. Each planter is cast individually and undergoes rigorous quality checks to ensure flawless craftsmanship and consistent excellence.',
        price: 'R 250.00',
        features: [
            'Height: 7cm',
            'Width: 10.8cm',
            'Length: 11.44cm',
			
        ]
    },
	'product19': {
        images: [
            'CloneTrooper 01.webp',
			'CloneTrooper 02.webp',
			'CloneTrooper 03.webp',
			
			
			
        ],
        title: 'Mini Clone Trooper Planter',
        description: 'Introducing our exquisite Mini Planter, featuring a meticulously designed 3D-printed shell that adds a modern twist to any space, indoors or out. Each planter is cast individually and undergoes rigorous quality checks to ensure flawless craftsmanship and consistent excellence.',
        price: 'R 250.00',
        features: [
            'Height: 7cm',
            'Width: 11cm',
            'Length: 11cm',
			
        ]
    },
	'product20': {
        images: [
            'Yoda001.webp',
			'Yoda002.webp',
			'Yoda003.webp',
			'Yoda004.webp',
			
			
			
        ],
        title: 'Mini Yoda Planter Pot',
        description: 'Introducing our exquisite Mini Planter, featuring a meticulously designed 3D-printed shell that adds a modern twist to any space, indoors or out. Each planter is cast individually and undergoes rigorous quality checks to ensure flawless craftsmanship and consistent excellence.',
        price: 'R 250.00',
        features: [
            'Height: 7cm',
            'Width: 11cm',
            'Length: 11cm',
			
        ]
    },
	'product21': {
        images: [
            'upscaled-skull-planter-pot-black-3d-print-concrete.webp',
			'upscaled-skull-planter-pot-green-3d-print-concrete.webp',
			'upscaled-skull-planter-pot-white-3d-print-concrete.webp',
			'upscaled-skull-planter-pot-green-white-3d-print-concrete.webp',
			
			
			
        ],
        title: 'Large Skull Planter Pot',
        description: 'Add a striking statement piece to your space with this handcrafted Upsized Skull Planter Pot. The outer shell is 3D printed for precise detailing, then filled with solid concrete for weight, durability, and a unique textured finish. Available in black, white, or green, this planter blends gothic charm with modern craftsmanship. Perfect for indoor plants, succulents, or as a bold decorative accent for your desk, shelf, or garden. Handmade, sturdy, and designed to stand out in any setting.',
        price: 'R 350.00',
        features: [
            'Height:130mm',
            'Width:140mm',
            'Length:160mm',
			
        ]
    },
	'product22': {
        images: [
            'BS001-removebg-preview.webp',
			'BS002-removebg-preview.webp',
			'BS003-removebg-preview.webp',
			
			
			
			
        ],
        title: 'Large Bulbasaur Planter Pot',
        description: 'Introducing our Upsized Bulbasaur Planter, a delightful fusion of nature and nostalgia. Featuring a meticulously 3D-printed design, this larger-than-life planter brings the beloved Pokémon to your home or garden. Each planter is individually cast and undergoes thorough quality checks to ensure exceptional craftsmanship and durability.Handcrafted with care by Bangarang Crafts, this Bulbasaur planter isn’t just a functional vessel for your plants—it’s a whimsical work of art. Perfect for adding charm to any space, this statement piece combines fun and functionality in a way that will make your decor truly unique.',
        price: 'R 350.00',
        features: [
            'Height: 140mm',
            'Width: 150mm',
            'Length: 170mm',
			
        ]
    },
	'product18': {
        images: [
            'hex-cement-display-tile-display.webp',
			'frida-kahlo-classic-hex-cement-display-tile.webp',
			'frida-kahlo-red-hair-hex-cement-display-tile.webp',
			'frida-kahlo-teal-hair-hex-cement-display-tile.webp',
			'naruto-akatsuki-cloud-hex-cement-display-tile.webp',
			'pokemon-charizard-hex-cement-display-tile.webp',
			'pokemon-gengar-hex-cement-display-tile.webp',
			'skull-hex-cement-display-tile-gothic-desk-decor.webp',
			'star-wars-x-wing-hex-cement-display-tile.webp',
			'teenage-mutant-ninja-turtle-donatello-hex-cement-tile.webp',
			'teenage-mutant-ninja-turtle-leo-hex-cement-tile.webp',
			'totoro-hex-cement-display-tile-desk-decor.webp',
			'hex-cement-display-tile-back.webp',
			
        ],
        title: 'Hex Cement Display Tiles',
        description: 'Show off your favourite fandoms with these handcrafted hexagonal cement display tiles, each featuring a 3D printed design embedded directly into the tile for lasting detail and texture. Choose from iconic characters and symbols like Totoro, Star Wars X-Wing, Naruto’s Akatsuki cloud, Pokémon, Teenage Mutant Ninja Turtles, and Frida Kahlo. Each tile includes a small stand, making it perfect for desks, shelves, and collector displays. Durable, unique, and made for fans who love to combine art with everyday life.',
        price: 'R 150.00',
        features: [
            'Height:145mm',
            'Width: 20mm',
            'Length: 117.50mm',
			
        ]
    },
	'product23': {
        images: [
            'oversized-3d-printed-d20-dice-unique-giant-gaming-accessory-for-d-d-rpgs-collectors-multi-colored.webp',
			'oversized-3d-printed-d20-dice-unique-giant-gaming-accessory-for-d-d-rpgs-collectors-black.webp',
			
        ],
        title: 'Oversized 3D-Printed D20 Dice',
        description: 'Stand out at your next game night with this custom oversized 3D-printed D20 dice a must-have for tabletop gamers, Dungeons & Dragons (D&D) enthusiasts, and collectors! Handcrafted with precision, this giant D20 dice combines striking design with perfect balance for a satisfying roll every time.  ',
        price: 'R 60.00',
        features: [
            'Height: 55.65mm',
            'Width: 59.50mm',
            'Length: 68.66mm',
			
        ]
    },
	'product24': {
        images: [
            'Hex Pot Mould001.webp',
			'Hex Pot Mould003.webp',
			
        ],
        title: 'Hex Pot Mould (STL Files)',
        description: 'This mould allows you to create modern, faceted concrete planters with a sleek, geometric look, perfect for adding a touch of industrial style to any space. Ideal for both DIY enthusiasts and small business owners, this mould design is durable and reusable, ensuring consistent, high-quality results every time.',
        price: 'R 250.00',
        features: [
            'Height: 58.60mm',
            'Width: 122mm',
            'Length: 130mm',
			
        ]
    },
	'product25': {
        images: [
            'HCD001.webp',
			'HCD002.webp',
			
        ],
        title: 'Honeycomb Mould (STL Files)',
        description: 'This mould allows you to create modern, faceted concrete planters with a sleek, geometric look—perfect for adding a touch of industrial style to any space. The honeycomb-inspired design also enables stackable displays, giving you versatile styling options.',
        price: 'R 250.00',
        features: [
            'Height: 60mm',
            'Width: 106mm',
            'Length: 120mm',
			
        ]
    },
	'product26': {
        images: [
            '001.webp',
			
        ],
        title: 'Bonsai Mould (STL Files)',
        description: 'This mould allows you to create modern, faceted concrete planters with a sleek, geometric look, perfect for adding a touch of industrial style to any space. Ideal for both DIY enthusiasts and small business owners, this mould design is durable and reusable, ensuring consistent, high-quality results every time.',
        price: 'R 250.00',
        features: [
            'Height: 60mm',
            'Width: 106mm',
            'Length: 120mm',
			
        ]
    },
	'product27': {
        images: [
            'Hand-Tufted-One-Piece-Rug-Straw-Hat-Pirates-Carpet-Anime-Luffy-Floor-Mat.webp',
			'Hand-Tufted-One-Piece-Rug-Straw-Hat-Pirates-Carpet-Anime-Luffy-Floor-Mat-Back.webp',
			
        ],
        title: 'Handmade Tufted Straw Hat Jolly Roger Rug',
        description: 'Elevate your space with this premium hand-tufted rug, featuring the iconic Straw Hat Pirates Jolly Roger. This soft, durable one-piece carpet is the perfect tribute to Monkey D. Luffy and his crew, making it a must-have for any One Piece fans room, game room, or anime den.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 80cm',
            'Length: 100cm',
			
        ]
    },
	'product28': {
        images: [
            'Hand-Tufted-Gengar-Rug-Pokemon-Plush-Carpet-Ghost-Type-Fan-Art.webp',
			'Hand-Tufted-Gengar-Rug-Pokemon-Plush-Carpet-Ghost-Type-Fan-Art-Back.webp',
			
        ],
        title: 'Handmade Tufted Gengar Rug',
        description: 'Add a touch of playful spookiness to your space with this premium hand-tufted Gengar rug. Featuring fan-art of the iconic Ghost-type Pokemon, this incredibly soft and plush carpet is the perfect way to show your love for Pokemon. A must-have for any trainers bedroom, gaming room, or living space.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 73cm',
            'Length: 80cm',
			
        ]
    },
	'product29': {
        images: [
            'TMNT-Leonardo-Rug-Retro-90s-Turtle-Squad-Floor-Art-Handmade-Decor.webp',
			'TMNT-Leonardo-Rug-Retro-90s-Turtle-Squad-Floor-Art-Handmade-Decor_Back.webp',
			
        ],
        title: 'Handmade Tufted TMNT Leo Rug',
        description: 'Cowabunga, dude! Bring turtle power directly into your space with this absolutely radical TMNT hand-tufted rug that celebrates the heroes in a half shell who have been kicking shell and taking names since the 1980s. Transform any room into the ultimate turtle lair with these iconic designs that capture the essence of New Yorks greatest reptilian defenders.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 70cm',
            'Length: 100cm',
			
        ]
    },
	'product30': {
        images: [
            'hellcat_logo_02.webp',
			'hellcat_logo.webp'
        ],
        title: 'Hand-Printed Hellcat T-Shirt – Block Print Gothic Streetwear',
        description: 'This Hellcat T-Shirt is hand printed using traditional block printing techniques, making every piece unique. The bold black Hellcat design adds an edgy gothic streetwear vibe, perfect for fans of alternative fashion, festivals, and casual everyday style. Crafted with care on soft, breathable fabric, this unisex graphic tee combines comfort with handmade artistry. A one-of-a-kind Hellcat shirt for those who love originality in their wardrobe.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product31': {
        images: [
            'Kuromi_Hand_Tufted_Rug_01.webp',
			'Kuromi_Hand_Tufted_Rug_02.webp'
        ],
        title: 'Kuromi Hand-Tufted Rug',
        description: 'Add a touch of cheeky gothic charm to your decor with this premium hand-tufted Kuromi rug. Featuring fan art of the beloved Sanrio character, this ultra-soft and plush piece brings both cuteness and attitude to any room. Perfect for fans of bold, playful aesthetics, a must-have addition to your bedroom, gaming area, or cozy creative corner.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 70cm',
            'Length: 100cm',
        ]
    },
	
};

// Projects data with customizable buttons
const projects = {
    'project1': {
        images: [
            'LL001.webp',
            'LL002.webp',
            'LL003.webp',	
			'LL004.webp',
			'LL005.webp',
			'LL006.webp',
        ],
        title: 'Word Practice App',
        description: 'This little project started as a simple idea:What if I could practise new words without getting lost in clutter or ads? So I built a lightweight vocabulary tool that lets you create your own word lists, test yourself quickly, and track how you improve over time. It’s clean, simple, and focused—perfect for learners who just want to practise words and actually remember them. The app is still a work in progress, and I’m adding new features as I go, but it’s already fully usable and great for daily practice. Download it, try it out, and feel free to send feedback if you have ideas for improvements!',
        features: [
			'Windows Aplication',
            'Create & Manage Your Own Word Lists',
            'Smart Practice Mode',
            'Automatic Progress Tracking',
            'User Profiles',
            'Built-In Database System',
			'Compact & Beginner-Friendly'
			
			
        ],
        button: {
            type: 'download', // 'url', 'download', or 'contact'
            text: 'Free Download',
            link: 'Word_Practice.exe',
            download: 'Word_Practice.exe'
        }
    },
    'project2': {
        images: [
            'KD001.webp',
            'KD002.webp',
			'KD003.webp'
        ],
        title: 'Knight vs Dragon',
        description: 'This game began as a fun experiment: “What if I could create a whole adventure using just one custom 3D-printed dice? And so Knight vs Dragon was born a quick, table-friendly battle between bravery and fire, where every roll shapes the story. The rules are simple, the pace is fast, and the charm comes from that chunky little 3D-printed dice that decides your fate. Will your knight strike true… or will the dragon roast you on the spot? The game is still a work in progress, and I’m refining the balance and adding new ideas as I go. But it’s already fully playable, fun, and perfect for a coffee-table clash of hero vs monster. Download it, print the dice, and enjoy the fight!',
        features: [
            'Custom 3D-Printed Dice Gameplay',
            'Quick to Learn, Fast to Play',
            'Print-and-Play Friendly',
            'Replayable Mini-Battle',
            'Small Game, Big Character',
			'Actively Being Updated'
        ],
        button: {
            type: 'download',
            text: 'Free Download',
            link: 'KNIGHT vs DRAGON.zip',
            download: 'KNIGHT vs DRAGON.zip'
        }
    },
    'project3': {
        images: [
            'project3-image1.webp',
            'project3-image2.webp',
            'project3-image3.webp',
            'project3-image4.webp'
        ],
        title: 'Event Display Setup',
        description: 'Complete convention booth setup featuring custom displays, interactive elements, and branded merchandise. This project highlights our expertise in creating engaging event experiences that attract and retain visitor attention.',
        features: [
            'Custom interactive displays',
            'Branded merchandise and giveaways',
            'Booth layout and design',
            'Interactive NFC technology integration',
            'Visitor engagement solutions'
        ],
        button: {
            type: 'contact',
            text: 'Get Quote for Your Event',
            link: null,
            download: null
        }
    }
};

// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projects[projectId];
    
    if (project && modal) {
        console.log('Opening project modal:', projectId);
        
        // Update project info
        document.getElementById('projectModalTitle').textContent = project.title;
        document.getElementById('projectModalDescription').textContent = project.description;
        
        // Update features list
        const featuresList = document.getElementById('projectModalFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Build project carousel (not the product one)
        buildProjectCarousel(project.images, project.title);
        
        // Update button based on type
        const buttonContainer = document.getElementById('projectButtonContainer');
        buttonContainer.innerHTML = '';
        
        const button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.textContent = project.button.text;
        
        switch (project.button.type) {
            case 'url':
                button.onclick = function() {
                    window.open(project.button.link, '_blank');
                };
                break;
                
            case 'download':
                button.onclick = function() {
                    const link = document.createElement('a');
                    link.href = project.button.link;
                    link.download = project.button.download || 'download';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                };
                break;
                
            case 'contact':
                button.onclick = function() {
                    closeProjectModal();
                    setTimeout(() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }, 100);
                };
                break;
        }
        
        buttonContainer.appendChild(button);
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Reset scroll position
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        console.log('Project modal opened successfully');
    } else {
        console.error('Project not found or modal missing:', projectId);
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        const modalInfo = modal.querySelector('.modal-info');
        
        if (modalContent) modalContent.scrollTop = 0;
        if (modalInfo) modalInfo.scrollTop = 0;
        
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close project modal when clicking outside content
const projectModal = document.getElementById('projectModal');
if (projectModal) {
    projectModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProjectModal();
        }
    });
}

// Close project modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Service data for modals
const services = {
    'service1': {
        image: 'NFC.webp',
        title: 'Custom NFC Business Card',
        description: 'Transform your networking game with our cutting-edge Custom NFC Business Cards. These sleek, tech-savvy cards allow you to share your contact details, social media profiles, websites, and more instantly! Perfect for professionals, entrepreneurs, and creatives who want to make a memorable impression.',
        features: [
            'Instant Sharing – Exchange contact details and links with just a tap',
            'Smart & Sleek – Modern design meets next-gen technology',
            'Eco-Friendly – Go paperless and reduce waste',
            'Fully Customizable – Tailor your card to match your brand and style',
            'Quick Setup – Easy to program and start using immediately'
        ]
    },
    'service2': {
        image: '3d.webp',
        title: '3D Printing',
        description: 'Turn your ideas into reality with our Custom 3D Printing Services! Using eco-friendly PLA (Polylactic Acid), we create durable, high-quality, and precision-crafted 3D prints perfect for prototypes, creative projects, or functional parts. Whether you need a single prototype or a small batch, we deliver exceptional results.',
        features: [
            'Precision Printing – High-quality, detailed results for any project',
            'Eco-Friendly Materials – Made with sustainable PLA filament',
            'Versatile Applications – Ideal for prototypes, art, and functional parts',
            'Bring Ideas to Life – Turn your concepts into tangible creations',
            'Fast Turnaround – Quick production without compromising quality'
        ]
    },
    'service3': {
        image: 'Tufting.webp',
        title: 'Custom Tufting',
        description: 'Bring your creative visions to life with our handcrafted tufted creations! Using high-quality yarns and expert techniques, we design vibrant, textured, and durable tufted pieces—perfect for custom rugs, wall hangings, home décor, or unique gifts. Whether you want a personalized design, a bold statement piece, or a cozy addition to your space, our tufting services deliver artistry and craftsmanship in every stitch.',
        features: [
            'Handcrafted Artistry – Each piece made with care, skill, and creativity',
            'Premium Quality – Durable, vibrant designs using high-grade yarns',
            'Custom Made for You – From rugs to wall art, tailored to your vision',
            'Texture That Tells a Story – Add warmth, personality, and style to any space',
            'Unique Designs – No two pieces are exactly alike'
        ]
    }
};

// Project Carousel functionality
let currentProjectSlide = 0;

function buildProjectCarousel(images, title) {
    const carousel = document.getElementById('projectCarousel');
    const dotsContainer = document.getElementById('projectCarouselDots');
    
    if (!carousel || !dotsContainer) return;
    
    // Clear previous content
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create carousel items
    images.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <img src="${image}" alt="${title} - Image ${index + 1}" class="carousel-img">
        `;
        carousel.appendChild(carouselItem);
        
        // Create dot indicator
        const dot = document.createElement('span');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => goToProjectSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Reset to first slide
    currentProjectSlide = 0;
    updateProjectCarousel();
}

function nextProjectSlide() {
    const items = document.querySelectorAll('#projectCarousel .carousel-item');
    currentProjectSlide = (currentProjectSlide + 1) % items.length;
    updateProjectCarousel();
}

function prevProjectSlide() {
    const items = document.querySelectorAll('#projectCarousel .carousel-item');
    currentProjectSlide = (currentProjectSlide - 1 + items.length) % items.length;
    updateProjectCarousel();
}

function goToProjectSlide(index) {
    currentProjectSlide = index;
    updateProjectCarousel();
}

function updateProjectCarousel() {
    const items = document.querySelectorAll('#projectCarousel .carousel-item');
    const dots = document.querySelectorAll('#projectCarouselDots .carousel-dot');
    
    // Hide all items
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current item
    if (items[currentProjectSlide]) {
        items[currentProjectSlide].classList.add('active');
        dots[currentProjectSlide].classList.add('active');
    }
}

// Product Modal with Carousel functionality
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const product = products[productId];
    
    if (product && modal) {
        // Update product info
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalPrice').textContent = product.price;
        
        // Update features list
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Build carousel
        buildCarousel(product.images, product.title);
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Reset scroll position to top
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        // Also reset carousel to first image
        currentSlide = 0;
        updateCarousel();
    }
}

// Service Modal Functions
function openServiceModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const service = services[serviceId];
    
    if (service && modal) {
        // Update service info
        document.getElementById('serviceModalTitle').textContent = service.title;
        document.getElementById('serviceModalDescription').textContent = service.description;
        document.getElementById('serviceModalImage').src = service.image;
        document.getElementById('serviceModalImage').alt = service.title;
        
        // Update features list
        const featuresList = document.getElementById('serviceModalFeatures');
        featuresList.innerHTML = '';
        service.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Reset scroll position
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function closeServiceModalAndScrollToContact() {
    closeServiceModal();
    
    // Small delay to ensure modal is closed before scrolling
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
}

// Close service modal when clicking outside content
const serviceModal = document.getElementById('serviceModal');
if (serviceModal) {
    serviceModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeServiceModal();
        }
    });
}

// Close service modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        // Reset scroll position when closing too
        const modalContent = modal.querySelector('.modal-content');
        const modalInfo = modal.querySelector('.modal-info');
        
        if (modalContent) modalContent.scrollTop = 0;
        if (modalInfo) modalInfo.scrollTop = 0;
        
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Carousel functionality
function buildCarousel(images, title) {
    const carousel = document.getElementById('carousel');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!carousel || !dotsContainer) return;
    
    // Clear previous content
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create carousel items
    images.forEach((image, index) => {
        // Create image element
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <img src="${image}" alt="${title} - Image ${index + 1}" class="carousel-img">
        `;
        carousel.appendChild(carouselItem);
        
        // Create dot indicator
        const dot = document.createElement('span');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Reset to first slide
    currentSlide = 0;
    updateCarousel();
}

let currentSlide = 0;

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    
    // Hide all items
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current item
    if (items[currentSlide]) {
        items[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
}

// Close modal and scroll to contact section
function closeModalAndScrollToContact() {
    closeProductModal();
    
    // Small delay to ensure modal is closed before scrolling
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, 100);
}

// Open WhatsApp with product inquiry message
function openWhatsApp() {
    const productTitle = document.getElementById('modalTitle').textContent;
    const message = `Hi, I'm interested in the product: ${productTitle}. Could you please provide more information and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/27765202303?text=${encodedMessage}`;
    
    // Close modal first
    closeProductModal();
    
    // Small delay to ensure modal closes before opening new window
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
    }, 100);
}

// Open Hearthforge website
function openHearthforgeWebsite() {
    // Close modal first
    closeProductModal();
    
    // Small delay to ensure modal closes before opening new window
    setTimeout(() => {
        window.open('https://hearthforge.co.za/collections/bangarang-crafts', '_blank');
    }, 100);
}

// Close modal when clicking outside content
const productModal = document.getElementById('productModal');
if (productModal) {
    productModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

// Product card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product and service cards
document.querySelectorAll('.product-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Create mailto link with proper formatting
		const subject = `Message from ${name} - Bangarang Crafts Contact Form`;
		const body = `Name: ${name}
		Email: ${email}

		Message:
		${message}`;
		const mailtoLink = `mailto:christo.bangarang@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Open email client with pre-filled data
        setTimeout(() => {
            window.location.href = mailtoLink;
            showNotification('Thank you for your message! Please send the email that opened in your email client.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255,255,255,0.2)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
    
    closeBtn.addEventListener('click', function() {
        notification.remove();
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

/// Updated Product Filter Functionality with Scroll to Top
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productsSection = document.querySelector('#products');
    
    console.log('Filter buttons found:', filterBtns.length);
    console.log('Product cards found:', productCards.length);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Filter button clicked:', btn.getAttribute('data-filter'));
            
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                    console.log('Showing all products');
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                        console.log('Showing product:', card.querySelector('.product-title').textContent);
                    } else {
                        card.classList.add('hidden');
                        console.log('Hiding product:', card.querySelector('.product-title').textContent);
                    }
                }
            });
            
            // Scroll to top of products section with smooth animation
            setTimeout(() => {
                if (productsSection) {
                    const productsTop = productsSection.offsetTop - 100; // Offset for sticky filters and navbar
                    window.scrollTo({
                        top: productsTop,
                        behavior: 'smooth'
                    });
                    console.log('Scrolling to products section');
                }
            }, 300); // Small delay to allow filter animation to complete
        });
    });
}


// Sticky Filter Enhancement
function initStickyFilters() {
    const filterContainer = document.querySelector('.filter-container');
    const productsSection = document.querySelector('.products');
    
    if (!filterContainer || !productsSection) return;
    
    // Calculate when filters should become sticky
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    filterContainer.classList.add('scrolled');
                } else {
                    filterContainer.classList.remove('scrolled');
                }
            });
        },
        { 
            rootMargin: '-80px 0px 0px 0px', // Adjust based on your navbar height
            threshold: 0
        }
    );
    
    // Observe the products section
    observer.observe(productsSection);
    
    // Alternative simple scroll approach
    window.addEventListener('scroll', () => {
        const productsTop = productsSection.getBoundingClientRect().top;
        if (productsTop < 80) { // When products section reaches top
            filterContainer.classList.add('scrolled');
        } else {
            filterContainer.classList.remove('scrolled');
        }
    });
}

// Update your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing...');
    
    // Update copyright year
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
    
    // Preload critical images first
    preloadCriticalImages();
    
    // Initialize product filters
    initProductFilters();
    
    // Initialize sticky filters
    initStickyFilters();
    
    // Initialize image loader
    setTimeout(() => {
        ImageLoader.init();
    }, 100);
    
    console.log('Bangarang Crafts website loaded successfully!');
});

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing filters...');
    
    // Update copyright year
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
    
    // Initialize product filters
    initProductFilters();
    
    console.log('Bangarang Crafts website loaded successfully!');
});

// Fallback initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductFilters);
} else {
    // DOMContentLoaded has already fired
    setTimeout(initProductFilters, 100);
}
