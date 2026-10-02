const express = require("express")
const app = express()
const connect = require("./config/connectDb")
const dotenv = require("dotenv")
const cors = require("cors");
const Color = require("./model/colour")
const Walls = require("./model/Walls")
dotenv.config()
connect(); 
const Carpets = require("./model/carpets")
const {upload , cloudinery} = require("./config/cloudinary")
app.use(cors())
const Replicate = require("replicate");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.post("/addcarpet",async(req,res)=>{
    try{
         const {name , image  , price , color,slug} = req.body;
                 let colorArray = [];
        if (Array.isArray(color)) {
            colorArray = color;
        } else if (typeof color === 'string') {
            colorArray = color.split(',').map(c => c.trim()); // "Red, Blue" -> ["Red", "Blue"]
        }

        if (colorArray.length === 0) {
            return res.status(400).json({ success: false, message: "Kam se kam ek color toh dalna padega bhai!" });
        }

        // 2. Har color ko check karein aur agar naya hai toh Color collection mein save karein
        for (const col of colorArray) {
            const existColor = await Color.findOne({ name: col });
            if (!existColor) {
                await Color.create({ name: col });
            }
        }

         const Carpet = await Carpets.create({
            name , image : image || req.file.secure_url , price , color: colorArray,slug
         })
         res.status(200).json({
            success:true,
            message:"Product add succefully",
            Carpet
         })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})
app.get("/carpets" , async(req,res)=>{
    try{
        const carpets = await Carpets.find();
        res.status(200).json({
            success:true,
            message:"Succeffuly loaded Carpets",
            carpets
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})
app.get("/carpets/:slug",async(req,res)=>{
    try{
        const {slug} = req.params;
        const carpet = await Carpets.findOne({slug})
        res.status(200).json({
            success:true,
            message:"The Specific Carpet is loaded",
            carpet
        })
    }catch(error){
        res.status(500).json({
            
            success:false,
            message:error.message
        })
    }
})

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN
});

app.post(
  "/apply-carpet",
  upload.fields([
    { name: "room", maxCount: 1 },
    { name: "carpet", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const room = req.files.room?.[0];
      const carpet = req.files.carpet?.[0];

      if (!room || !carpet) {
        return res.status(400).json({
          success: false,
          message: "Room aur carpet dono images required hain",
        });
      }

      const roomUrl = room.path;
      const carpetUrl = carpet.path;

      console.log("Room URL:", roomUrl);
      console.log("Carpet URL:", carpetUrl);

      // STEP 1: Floor ka mask nikalo (SAM model se)
      console.log("Floor detect ho raha hai...");
      const maskOutput = await replicate.run(
        "meta/sam-2:fe97b453a6455861e3bac769b441ca1f1086110da7466dbb65cf1eecfd60dc83",
        {
          input: {
            image: roomUrl,
          },
        }
      );

      const maskUrl = Array.isArray(maskOutput) ? maskOutput[0] : maskOutput;

     console.log("Carpet apply ho raha hai...");
      const finalOutput = await replicate.run(
        "stability-ai/stable-diffusion-inpainting:95b7223104132402a9ae91cc677285bc5eb997834bd2349fa486f53910fd68b",
        {
          input: {
            image: roomUrl,
            mask: maskUrl,
            prompt:
              "photorealistic carpet flooring texture, matching room lighting and perspective, seamless, high detail, natural shadows",
            num_inference_steps: 30,
          },
        }
      );

      const resultUrl = Array.isArray(finalOutput) ? finalOutput[0] : finalOutput;

      res.json({
        success: true,
        message: "Carpet successfully apply ho gaya",
        roomUrl,
        carpetUrl,
        maskUrl,
        resultUrl, 
      });
    } catch (error) {
      console.error("Apply carpet error:", error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);
app.get("/colors" ,async(req,res)=>{
  try{
    const ress = await Color.find();
    res.status(201).json({
      success:true,
      message:"Colors",
      ress
    })
  }catch(error){
    res.status(500).json({
      success:false,
      message:error.message 
    })
  }
})
app.post("/walls", upload.single("image"), async (req, res) => {
  try {
     const { image } = req.body;

    const wall = await Walls.create({
      image:image,
    });

    res.status(201).json({
      success: true,
      message: "Wall added",
      wall,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/walls",async(req,res)=>{
  try{
    const walls = await Walls.find()
    res.status(201).json({
      success:true,
      message:"Walls are succfully loaded",
      walls
    })
  }catch(error){
    res.status(500).json({
      success:false,
      message:error.message 
    })
  }
})
app.listen(5000)