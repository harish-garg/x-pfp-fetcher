const Replicate = require("replicate");
require('dotenv').config();


async function runReplicate() {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  try {
    const output = await replicate.run(
      "fofr/face-to-sticker:a99a32fdaa9a9650cfc7900d54323d0d247dac69f7abb05eac0e742687a25662",
      {
        input: {
          image: "https://replicate.delivery/pbxt/KU1AG0cit5nc3xIG1BBZ6DKkhunvvGsZXmEZzuW9HPYVkj8o/MTk4MTczMTkzNzI1Mjg5NjYy.webp",
          steps: 20,
          width: 1024,
          height: 1024,
          prompt: "cyborg vampire",
          upscale: false,
          upscale_steps: 10,
          negative_prompt: "",
          prompt_strength: 7,
          ip_adapter_noise: 0.5,
          ip_adapter_weight: 0.2,
          instant_id_strength: 1
        }
      }
    );
    console.log(output);
  } catch (error) {
    console.error("Error running Replicate:", error);
  }
}

runReplicate();
