const express= require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const mongoose=require('mongoose');
const authRoutes=require('./routes/auth');

dotenv.config();

const app=express();
app.use(cors());

app.use(express.json());
app.use('/api/auth',authRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log('MongoDB connected');
})
.catch((error)=>{console.error('MongoDB connection error:', error);
});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
