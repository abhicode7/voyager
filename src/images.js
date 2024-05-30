const images = [
    {
      imageUrl: "https://cdn.midjourney.com/2b01f757-2dd7-4c82-afed-6addc305526d/0_3.png",
      prompt: "You are an artist. You create beautiful paintings.",
      nprompt: "messy, unorganized",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/aeec47d0-3608-4ad8-86c9-e1c73b3fd4d2/0_1.png",
      prompt: "A woman in her 40s with sleek back blonde hair. She is wearing silver earrings. She is walking into a bathroom. The bathroom features modern design elements like a stainless steel sink, mirror, and bench near the entrance. There is no bathtub or toilet visible. Lighting creates high contrast shadows, highlighting details like chrome fixtures and blue mosaic tiled walls.",
      nprompt: "no bathtub, no toilet",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/0ce749fa-2f99-4d57-9b89-2c4a5755b2bb/0_3.png",
      prompt: "bed room, Comfortable, spacious",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/aa6add14-7335-4a66-9d25-5d44820e186c/0_0.png",
      prompt: "Create a vibrant and appetizing image of a plate of yakisoba. The dish should feature stir-fried noodles that are golden brown, glistening with a savory sauce. Include colorful of shredded cabbage, julienned carrots, and bell pepper strips, interspersed with tender pieces of pork. Garnish the yakisoba with a sprinkling of sliced green onions, pickled ginger, and a light dusting of seaweed flakes. Set the dish on a traditional Japanese ceramic plate, and include chopsticks resting beside the plate. The background is inviting atmosphere. Japan magazine photography. Award winning photography. Advertising photography. Commercial photography. 16K",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/a3fb1612-bc70-402a-8e5d-be6163924199/0_3.png",
      prompt: "cartoon style version, a Chinese girl wearing a red star hat and white gray uniform dress with black shoes in the head of a character in the style of Pixar on a solid background, simple cute style, chibi figure, toycore, high detail, best quality",
      nprompt: "simple, chibi figure",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/c4b89828-2099-465b-804c-61f425f44ff7/0_3.png",
      prompt: "young caucasian good looking couple, school graduation, fun, gen-z style, cinematic",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/36bd1880-d8b5-4795-9ee6-fef0abd58f44/0_0.png",
      prompt: "A photograph shows a young women standing without moving in front of the tennis court at San Diego's Mantree Audubon apache cushion park in front of palm trees. Rear view. She is wearing a white skirt with a striped shirt. The photo was taken in the style of Slim Aarons using a Leica M6 camera with Portra film.",
      nprompt: "rear view",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/a92d7b15-fc06-4ceb-a7b4-a70bcc4e271f/0_3.png",
      prompt: "graphic comic style black hero in action pose. Bold letters spell 'ONE LIFE TO LIVE' on a dirty road",
      nprompt: "dirty road",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/bbcaf6e8-7cee-4bc1-90df-9303f239cac3/0_0.png",
      prompt: "8 bit eye, embroidery design file simple simple, minimalism, ultra minimal, very basic, very simple, simplicity logo, icon sheet, ultra minimal 5px simple basic hard lines simple line drawing all seeing Eye in the style of trendy and hipster , white ink on flat black vector background , white ink on flat black vector background , white ink on flat black vector background , white ink on flat black vector background",
      nprompt: "8 bit, simple, minimalism, ultra minimal, very basic, very simple, simplicity, ultra minimal 5px, simple, basic, hard lines, simple line drawing",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/6d9951f5-0d45-4180-a4f3-fe0c4c3e4679/0_0.png",
      prompt: "Jim Kazanjian's photograph depicting a steampunk dinosaur, colossal scale , being worked on by a mechanic, deadly, virtual reality , Shadowed lighting , highly detailed , steampunk,epic view with bokeh effect and in Arnold rendering",
      nprompt: "shadowed lighting, bokeh effect",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/cfd72349-424c-4edd-b8b3-10cfb96650c4/0_2.png",
      prompt: "The cover of a modern romantic fiction novel. A professional couple from Dublin in their late 30s. She is good-looking, with natural blonde hair, light blue eyes and is wearing gym gear. He is handsome, with short dark hair and dark blue eyes and is wearing a button shirt with the top button open. In the background is their master bedroom.",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/9bd70b47-cdd5-4556-9349-9c6bc0f5f769/0_3.png",
      prompt: "Create a realistic photo of a young woman in a photo studio setting. She is wearing a light pink hoodie with a purple heart design in the center, containing the text 'Spoiled Brat.' The woman has a casual and confident look, with her hair styled simply, possibly in a ponytail or loose waves. She is posing naturally, either standing or sitting, with a plain white or light-colored background to keep the focus on the hoodie. The lighting is soft and even, typical of a professional photo shoot, ensuring that the details of the hoodi",
      nprompt: "casual, simply",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/d0e50492-dabf-4f28-b995-aa05dc75e632/0_0.png",
      prompt: "design an streetwear style outfit for a hispanic male, 23, slim tall athletic build, black supreme beanie, tan racing jacket, black shirt, pants, and jordan sneakeers, fashion pose",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/b59748c8-097c-4c6f-bf4a-af5bc7fa8b26/0_2.png",
      prompt: "there are family whose sit down beside electric car and looking up to sky because stars over there. all people are asian. there smile like cozy. the important thing is that car is kia ev9",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/caf45598-162a-431e-b75b-906d786cf265/0_3.png",
      prompt: "POV, looking at your hands losing your mind in a decrepit dying circus carnival from another era, dilapidated tents, haunting atmosphere, ominous allure, captured with a vintage film camera, using a fisheye lens, during the twilight hours, in a gothic-style photograph, shot on expired Ilford HP5 black and white film",
      nprompt: "decrepit, dying, dilapidated, haunting, ominous, expired",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/7f0b6534-7f69-4d98-9540-8a07ab28821f/0_0.png",
      prompt: "explosion of flowers, verdant, wondrous, volumetric lighting, epic scene, 4k octane render, insanely detailed, hyper-realistic + [realistic, hyperdetailed , photograph, cinematic, unreal engine]",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/c221aaf7-cb83-4d6c-8df5-b738f29a191d/0_0.png",
      prompt: "chaotic, extremely super large concert crowd of super chaotic super partying crowd of excited little blue birds, simple kids drawing of poorly drawn crowd of blue birds in blue crayon, they are acting funny, goofy, and all are dancing happily, crayon textured, , speckles of colors, on paper,",
      nprompt: "chaotic, extremely, super, super, poorly drawn, funny, goofy, crayon textured, speckles of colors",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/d33c523b-59a0-4220-9519-a9f1d8784f47/0_0.png",
      prompt: "A futuristic sci-fi style lunar rover, mech shaped, beautifully designed exterior, body in dark white and sky blue, with modern glass, spacious interior, background moon and universe, cyberpunk elements, full body photo, front view, bright picture, realistic painting style, striking details, impressive panorama, Ultra-realistic and surreal Unreal Engine rendering, 3D rendering, C4D,8K, high detail,",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/2b499de3-1b27-4a12-bc58-20b043c3cef9/0_0.png",
      prompt: "Chinese ink wash style DNA with textured brushstrokes against a clean, pure background Disney Pixar. Art, 8k",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/4a0544af-4525-485b-bdb0-0cc06c4cb440/0_3.png",
      prompt: "Fire Burning Miao village, red sunset, vector illustration,",
      nprompt: "fire burning",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/1dcca49f-f285-40c9-8ca5-aff28dfb6e7a/0_0.png",
      prompt: "photo of a man, drawing, graphic recording, ipad",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/4b01b540-83e0-46d8-8791-9275016c88cd/0_0.png",
      prompt: "gorilla turned back dark fantasy style, heroic",
      nprompt: "dark fantasy",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/397efdbe-9159-456e-8461-3dcecffb7433/0_0.png",
      prompt: "fashion photography, photorealistic, full body photograph of a beautiful human male model with white stylish hair. His skin is a pale complexion and his eyes are closed. He is wearing a fashionable, white jumper suit standing inside of a large glass box with red smoke and a crowd surrounding the box looking inside the box in a white room, soft studio lighting",
      nprompt: "pale complexion, eyes are closed, red smoke",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/c20294e0-bbc4-4549-839c-a05286392639/0_0.png",
      prompt: "photorealistic scene of a dragon walking towards the viewer, teeth bared, eyes filled with aggression, scales glistening under the bright sun. The background is a desert landscape with sand dunes and a clear blue sky. The lighting is harsh, casting sharp shadows and bright highlights on the dragon's scales. Created Using: high-definition photography, cinematic lighting, detailed texturing, digital painting, photorealistic rendering, HDR effects, dynamic contrast, intense color grading, realistic desert environmen",
      nprompt: "teeth bared, aggression, harsh lighting, sharp shadows",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/0157f764-9f16-41f3-824c-b7085a4c662a/0_0.png",
      prompt: "wo hands holding a red heart-shaped symbol of health, surrounded by a variety of nutritious foods including fruits, vegetables, and legumes on a light wooden surface",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/89702d2c-c960-425c-ac30-21e627e1a9c6/0_0.png",
      prompt: "all asian holding laptop, keep the look and feel but change the position, red neon light background, keep skin color, photography, minimalist, photo-realism, ultra-realism, hyper-realistic, high quality, Use a high-resolution 24k camera, Canon DSLR, f/8, ISO 100, 1/250 second, HDR, a raw style, 30 degree perspective view and a quality setting of 2",
      nprompt: "red neon light background",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/c7b63831-1b80-49cf-bb1c-30ff61afdd96/0_0.png",
      prompt: "3d render of office, 3d render of smart office, An office where many people are busy working, various tasks, and spaces are separated, style of clay animation,simple, no fine details, clay material, art toy, schematic, city, point color orange, blender style",
      nprompt: "simple, no fine details, clay material, art toy, schematic",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/ecc2d5be-8e80-421a-9bc4-31f53efb5ec3/0_2.png",
      prompt: "A golden koi short boot, women's shoe with lightning, side profile, light gray background, minimalism, science fiction, photography grade effect, super realistic, documentary photography",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/43f0105f-a825-4d77-a8e9-bb92c6c33b02/0_1.png",
      prompt: "a silvery white shad fish swim in a deep lake, you can see rocks and woods, in the style of National Geographic. Capturing light and shadows in high resolution hyperrealism.",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/dd38da32-a0a9-456d-8cf5-e65725cb4aef/0_3.png",
      prompt: "Pixar style, very cute elderly man scientist sitting at his desk, on the desk yellow vaccination passport cute and cute expression, minimalist style, simple and clean light baby blue background, cinema, volume light, soft and advanced colorsBubble Mart, 3D, C4D, super detail, super precision",
      nprompt: "very cute, cute and cute expression, minimalist style, simple, clean, baby blue background",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/30ad19fa-b40b-45e5-8feb-348afee5ac54/0_0.png",
      prompt: "wealthy business man holding an ethereum coin. close up on her hand 85mm f2",
      nprompt: "close up",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/dfd8c86d-6093-4f6a-9242-ac9109011e5e/0_2.png",
      prompt: "wide angle,16k, HD, Canon camera shooting, aerial shooting, ceiling starry ceiling, overall light luxury noble style, large living room with sofa and chandelier, future style gorgeous, white and beige, surface decoration subtle, villa, five floors, spiral stairs, large glass, Windows, outside the window is endless sea view, soft and dreamy atmosphere, professional, detailed, high quality, RAW photos, best quality, best quality, Masterpiece, Extremely fine, best quality, super detail, high quality",
      nprompt: "wide angle, light luxury, subtle, soft and dreamy",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/fc8fe8ee-aeef-4450-ae81-e0400868b3f8/0_0.png",
      prompt: "Create a highly detailed snow-covered mountain scene at night with a dark, moody background. Ensure the mountain's features and textures are clearly visible, with sharp peaks and ridges. The sky should be dark, emphasizing the tranquility and stillness of the landscape. The snow should have a realistic texture and depth, highlighting the contours of the mountain. No snowstorm, just a serene, detailed night-time mountain landscape.",
      nprompt: "dark, moody, no snowstorm",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/3b0b8a4a-b655-431e-a43d-401cadf95af8/0_0.png",
      prompt: "A cute cat girl with silver hair and purple eyes, she is wearing black with white accents. Her dress features stars on it, holding an ornate crystal ball filled with a starry galaxy against a celestial background, in the style of Nyoer Fowle, fantasy illustration.",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/34078de9-326e-422c-bc04-4072a69867e6/0_3.png",
      prompt: "A picture showing tree dropping a colorful harvest of 12 types of fruit and 12 types of jewel/gemstones",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/fcf3b138-7091-489b-843a-d4d44cabce77/0_2.png",
      prompt: "in a refrigerated room with hanging beef carcass A dramatic, highly stylized photograph A striking fashion portrait set in a dystopian apocalyptic wasteland, featuring alien models strutting down an eerie catwalk. The fashionable outfits consist of dark, metallic attire with futuristic, edgy elements, contrasting with the desolate environment. The models have unique, otherworldly features, with bold makeup and intricate hairstyles. The background showcases ruined buildings and a dark, ominous sky, adding to the eerie atmosphere., portrait photography, fashion",
      nprompt: "refrigerated room, hanging beef carcass, dystopian, apocalyptic, eerie, desolate, otherworldly, bold makeup, dark, ominous",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/c45cef3e-130e-4170-980c-935e966f6b54/0_1.png",
      prompt: "A photo of an elegant Chinese woman in black high heels and dark gray long coat, jumping in the air with both legs stretched out and apart before and after, with her umbrella over the streets of kunming, gray sky, photo realism, high resolution, extreme details,black and white film photography, in the style of Richard Avedon",
      nprompt: "gray sky, black and white",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/2d5cae6e-c2b8-4092-a769-208181052509/0_3.png",
      prompt: "A breathtaking scene of colorful hot air balloons soaring majestically over the dramatic and surreal landscapes of Cappadocia at sunrise. The balloons, adorned with the text 'nevade.com', float gracefully amidst the golden hues of dawn, casting long shadows over the unique rock formations and fairy chimneys below. The sky is painted with shades of pink and orange, creating a cinematic and hyper-realistic atmosphere that captures the awe-inspiring beauty and mystique of this iconic location.",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/442b158a-d7d6-4da4-b46a-4e139141905f/0_0.png",
      prompt: "preview for the YouTube channel of the series Shogun 4k ultrarealism bright saturated colors",
      nprompt: "bright saturated colors",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/cbb7e63c-a896-43f7-9c7a-e0dffebcc1b2/0_0.png",
      prompt: "A white sheet ghost with red hair covering its face against a dark background in the style of a scary horror movie poster.",
      nprompt: "scary horror",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/c30e6aea-0403-4e78-99f5-b758b89afcf2/0_0.png",
      prompt: "The red man in the foreground is on the basketball court, the basketball is in the air, and the back is next to the Oriental Pearl TV Tower in Shanghai, with a 3D cartoon effect",
      nprompt: "3D cartoon effect",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/07bc76b5-4dfc-4330-a0af-c2215f32f703/0_1.png",
      prompt: "A stylish living room featuring a sleek black leather sofa with tufted cushions, photographed from a slight angle to the front. The room is well-lit by natural light from large windows on the left, highlighting a potted green plant and a Transparent sphere. The wall behind the sofa is adorned with elegant paneling and a large artwork of tall trees. A small wooden coffee table in front of the sofa holds a game set and a cup. The floor is covered with a light-patterned rug, and an armchair with a black and white abstract design is placed to the right. Shot with a Nikon D850, 50mm f/1.8 lens, aperture f/4.5, ISO 400, focal length 50mm.",
      nprompt: "slight angle, small coffee table",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/59a5ab6b-8616-4028-adbd-1a300b699d4c/0_0.png",
      prompt: "Dark red background, a pure black corgi dog, real photo style, studio lighting,4K.",
      nprompt: "dark red background",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/e1af5792-52b8-4825-a952-90b9072c4134/0_0.png",
      prompt: "the burning man festival in the black rock desert, nevada. Burning man festival themed elements floating chaotically in the air such as beautiful woman in swimming suit with scarves on their faces and ski goggles riding bicycles, post-apocalyptic cocktails, post-apocalyptic sculptures and Works of art lit in neon colors. Madness and Chaos. Dust. Blue Sky. White flat ground. Salt desert. Beige colors.",
      nprompt: "chaotically, madness and chaos, dust",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/73795975-3087-4351-9bd6-5c13f67fec31/0_0.png",
      prompt: "Transparent cosmetics, product photography, center composition, elevation Angle",
      nprompt: "transparent",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/288cdc20-59cc-4f19-9193-2a4cfe84f638/0_0.png",
      prompt: "Abstract photography, beautiful woman with flowing hair wearing sheer black fabric blowing in the wind, soft beige background, ethereal, soft focus, dreamy, soft lighting, surreal, motion blur, cinematic",
      nprompt: "abstract, sheer, soft focus, dreamy, soft lighting, surreal, motion blur",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/26b0ebd3-d21f-4974-adfd-ae0eedf155b1/0_3.png",
      prompt: "A 2D map of West Asia, from Israel, Gaza, Lebanon to Iran. 3 Small Israeli Airforce F35 fighter jets are flying at the top of the image. Silhouettes of IDF Merkabah tanks and a platoon of Israeli soldiers wearing combat-gear in action are seen at the right-bottom of the image, close to an edge of a clif. Deep navy-blue. Some smoky and fog of war. Motif of dark camouflage texture. Military radar screen in opacity is peaking from the left side of the image. military sureal. HD resolution, 3D image with depth and realsim, for an image to be used as a PowerPoint Presentation backgroumd",
      nprompt: "small, silhouettes, smoky, fog of war, dark camouflage, opacity, surreal",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/ebda97f1-88df-44b9-b4ef-627efd421e6c/0_1.png",
      prompt: "cinematic scene depicting a deranged priest sick with a skin-eating plague giving a sermon, dark fantasy, mediaeval",
      nprompt: "deranged, skin-eating plague, dark fantasy",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/b74a631b-73dc-4418-a1c3-838e091b34f1/0_3.png",
      prompt: "Design an image of a person bent down to tie the shoelaces of another, who is distracted and looking elsewhere, holding a trophy, emphasizing that the first person's needs are secondary and overlooked. The background is a busy street scene, suggesting the rush of life moving around them, yet this personal neglect remains significant and poignant.",
      nprompt: "bent down, distracted, overlooked, busy street scene, neglect",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/9634fd5e-45a5-420a-8a40-261e9873fdf2/0_0.png",
      prompt: "A luxurious square fountain pool, intricate stone edges, European style lines, detailed carvings, exuding elegance and luxury. Surrounding the fountain are lush gardens with manicured hedges and blooming flowers, the water sparkling under golden sunlight. Created Using: marble carving tools, Renaissance art movement, high-resolution photography, natural light, warm hues, intricate detailing, opulent design, 4k quality",
      nprompt: "n/a",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/a74d2b8e-c940-4918-a87c-0f418d91abc4/0_3.png",
      prompt: "he staff at the busy photo shoot site, fashionable Asian model in the middle, high definition, Anirlevovitz photo, fancy, style, 32K UHD",
      nprompt: "busy",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/fc22c71e-cb9d-454e-95ca-39c6ceb5d034/0_3.png",
      prompt: "A large Chinese blue dragon with clear red eyes, swimming in the sky with its whole body, fairy tale world view, sunlight 4K illustration style background Photoreal",
      nprompt: "fairy tale, illustration style",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/f49f52cd-4127-431c-82a1-5ae9c59b0658/0_0.png",
      prompt: "full length image, 300k UHD Real Cinematic white punk rock teen Girl smiling, standing in a brand new kitchen, wearing a black the north face nuptse 700 cropped down filled puffer jacket, black vinyl leggings, dark brown hair in a tight pony tail, black aviator sunglasses, iw 3, cref,",
      nprompt: "punk rock, brand new kitchen",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/a714b6cc-5463-47cc-9846-9bb8b57bd3ad/0_1.png",
      prompt: "a table shown and on the table a pack of sweet placed and in the background a indian family shown who is enjoy in a festive background which is blur, Realistic,",
      nprompt: "blur",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/d312710c-5e63-4a28-b304-dc4f547b720a/0_3.png",
      prompt: "A close-up of the clock face, with the hands pointing precisely at 1:00 AM. The details of the clock are sharp, and the background is fully blurred. The lighting is dim, adding to the suspenseful mood. High saturation colors,",
      nprompt: "blurred, dim lighting, suspenseful",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/8af4868c-4039-4139-b626-55ca805c85b7/0_3.png",
      prompt: "Portrait of a very happy beautiful girl wearing sunglasses, a white T-shirt and a jeans skirt. Beautiful girl posing in the street on a summer day. POP art style street.",
      nprompt: "pop art style",
      generator: "Midjourney"
    },
    {
      imageUrl: "https://cdn.midjourney.com/50648ccb-6713-4f59-b983-d08f9c744bd6/0_0.png",
      prompt: "A photo of the side view, real business building, ，Add a company name plaque with 'YUANTU TECH' to the building in this photo. The plaque should look professional and be placed prominently near the entrance ,in London city center, grey sky background, daylight, shot by Canon EOS70D camera using an EFS lens,",
      nprompt: "side view, grey sky",
      generator: "Midjourney"
    },
    {
        imageUrl: "https://cdn.midjourney.com/4d9ecdc1-05bf-4d37-a220-ca193b548dbb/0_1.png",
        prompt: "A modern day American soldier in tactical gear, holding an assault rifle with the American flag behind him, detailed illustration in the style of Artgerm, dressed for the 4th of July in red, white, and blue, realistic illustration, high detail, high resolution, full body portrait, high quality, sharp focus, cinematic lighting, HDR.",
        nprompt: "illustration style",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/ea219f5a-3fae-4797-8be5-44298d6eeebb/0_1.png",
        prompt: "A beautiful young Chinese female hotel service staff wearing a black short-sleeved uniform with a green collar and apron is smiling, holding coffee in one hand on the dining table of an American restaurant with white plates, bright lighting, and green accents. It is a high definition, full body portrait in the style of a high resolution, indoor scene. The background features wood grain walls, bright colors, soft tones, and natural light. The background features wood grain walls, bright colors, soft tones, and natural light.",
        nprompt: "n/a",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/7ed1cdd6-64cf-4283-99b9-3c4d0d18d9ea/0_0.png",
        prompt: "A polar bear is swimming across the sea ice, leaving behind an endless trail of water ripples. The scene captures its elegant movements as it glides through icy waters, creating long curved tracks on the snow-covered ocean surface.",
        nprompt: "n/a",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/096bbacd-57d4-4d56-88f9-a75f35f6d844/0_2.png",
        prompt: " Two optical fibers are fused together using a fusion splicer, creating a seamless and sturdy connection. Under the microscope, the fusion point is clearly visible, showing the neat and precise alignment of the fiber ends. The detailed image captures the intricate structure of the fused fibers, with the fiber ends clearly visible, displaying a smooth and strong connection. Isometric anime,Pencil drawing,Bottom view,Pablo Picasso,16K UHDP",
        nprompt: "isometric, pencil drawing",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/266261f5-6a38-4abd-a27a-4a0feaab3e5e/0_3.png",
        prompt: "Photo of a man with the head of a brown bear, who is dressed in a blue Adidas tracksuit and full white sneakers, standing with his arms crossed, against the background of a modern office of the estimating bureau, where employees are working at their desks with computers, ultra realistic, hi quality, hi res",
        nprompt: "man with the head of a brown bear",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/221b204b-2b0e-486a-b9a3-018d344aa911/0_0.png",
        prompt: "a magical, fantastic, exciting scene. portrait of a pretty woman of 25 years old with long hair. dancing in the middle of a wheat field. dressed in a light dress, sparkles are visible on the dress. shining butterflies fly around the girl. sunlight, romantic scene, photorealistic, canon r5, lens 50mm f/1.8.",
        nprompt: "sparkles are visible",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/2754721a-605d-40c7-bde7-8992f53933c9/0_1.png",
        prompt: "the mountains of saudi arabia covered with lavendre flowers, the sky is gloomy with heavy clouds, in the middle of the scene there is a saudi man we see him from the back, the man is holding a very big white flag.",
        nprompt: "gloomy, heavy clouds",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/b8f835c9-d451-46ae-a69d-bba4d9de765e/0_3.png",
        prompt: "a photo of an attractive korean woman sitting in cafe, black tights with red flowers on it, smiling at the camera, long hair, posted to reddit in 2019",
        nprompt: "posted to reddit",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/68027610-747b-49d2-9121-af815d6919b1/0_3.png",
        prompt: "a black and white photo taken with a film Leica camera of a blind young beautiful witch, long flowing dark hair, subtle lightning bolts from eyes, levitating, dark cloak, ethereal smoke, cave",
        nprompt: "blind, subtle lightning bolts, levitating, ethereal smoke",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/0fbfe0e0-303c-42db-ba0e-cd4fd109ef9f/0_2.png",
        prompt: "A pond covered with coins, a group of shimmering golden koi fish swimming gracefully, one radiant koi leaping through an ornate archway, the pond adorned with intricate patterns, surrounded by lush greenery and translucent flowers, high-definition photography, captured with a Canon EOS R5 and 35mm lens at f/4,",
        nprompt: "n/a",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/778fd19c-efc4-474f-8f63-140f8d9cae9f/0_0.png",
        prompt: "Collage of the streets of Kyiv and Paris in one photo, cheerful atmosphere, magic, summer mood, cafe, Eiffel Tower",
        nprompt: "collage",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/503ac014-d541-46a1-9717-d6c6787d4032/0_2.png",
        prompt: "A detailed illustration of the 'Lithiumbranch' system, showing multiple battery boxes connected to an inverter charger and power MOD with wires leading from them. The setting is dark grey on black background, emphasizing contrast between the sleek white illustrations and dark shadows. High resolution, high detail, hyper realistic, sharp focus, depth of field. The style emphasizes contrast between sleek white illustrations and dark shadows in the style of hyper realistic detail.",
        nprompt: "illustration, dark grey on black background",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/8ea89df0-ae6f-4ecc-a142-0fd295da12eb/0_0.png",
        prompt: " poster of a Korean drama shows a man and a woman with short hair and a white shirt looking in fear at broken glass on the floor. An Asian man wearing a black suit has his hand placed over half of his face. The movie name 'Side by Side' is written above them in a realistic photo style.",
        nprompt: "fear, broken glass",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/77a33dd3-9747-4277-9c89-bd03880b4de4/0_2.png",
        prompt: "business environment that promotes health and safety and well being. Use a high-resolution 32k image with a 16:9 aspect ratio, a raw style, and a quality setting of 2,--v 6.0",
        nprompt: "n/a",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/ad756667-8e87-4c1a-af24-152ef6ce0ec3/0_3.png",
        prompt: "a model with nordic eyes walking down on cobble stone pathway wearing a flowing ancient irish styled gown with unique irish jewellery add a touch of royalty. full length image. Very High end fashion. Editorial shot",
        nprompt: "a touch of royalty",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/bc5bb40b-020e-48be-9fc2-982e553e88ec/0_0.png",
        prompt: "Studio light, Low-angle front view, some black blocks lying on the white ground, white background",
        nprompt: "low-angle, some black blocks",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/d6a90779-7bcb-497a-90fd-db49d1a046d9/0_2.png",
        prompt: "Create an image of an old TV placed on a wooden stool. The scene should have a retro feel, capturing the nostalgic atmosphere with appropriate lighting and details",
        nprompt: "old",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/e5e6643b-a6ab-4e43-ae99-de5b07c6e51c/0_3.png",
        prompt: "a young lady performing a pedicure on her self at home",
        nprompt: "n/a",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/f6f10ed8-8129-4231-b9e6-d8b1e28c1ebd/0_1.png",
        prompt: "a girl with green hair and horns, and neon green, in the style of cyberpunk manga, social media portraiture, chinapunk, light pink and dark black, colorful costumes, hd, meticulous design",
        nprompt: "neon green, cyberpunk manga, social media portraiture",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/32e83183-7188-4c0e-8678-9fcfd4ca7129/0_2.png",
        prompt: "a series of huge glass pannels stood vertical stacked closely behind each other in a line, in a black studio environment",
        nprompt: "black studio environment",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/6c0a590e-7b28-426f-bfee-f3eeaf2ffc6d/0_1.png",
        prompt: "a zombie version of Margaret thatcher campaigning on a London Street",
        nprompt: "zombie version",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/4bbf5e52-1583-4301-898c-43f8d5a38800/0_2.png",
        prompt: "nautilus space colony , organic personal space fleet line the futuristic streets aquatic refractions enlightening the space at magic hour, sakuga animation cel",
        nprompt: "animation cel",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/9d0a1e03-068e-435c-a9eb-41f894cf9c72/0_0.png",
        prompt: "decopunk, Glitch art illustration, android at a fancy party, elegant, rule of thirds. Atmospheric,",
        nprompt: "glitch art illustration",
        generator: "Midjourney"
      },
      {
        imageUrl: "https://cdn.midjourney.com/165a5373-4f6b-4828-a254-6320dc2fa21a/0_3.png",
        prompt: "The coffee machine is shaped like an adorable cat, with blue and white porcelain patterns on its body, adorned with gold trimmings. It sits atop the counter of a café, pouring hot espresso into two cups placed beside it. The setting includes delicate flower arrangements, adding to the overall ambiance of elegance. The focus is on the cat's face.",
        nprompt: "n/a",
        generator: "Midjourney"
      }

]

export default images