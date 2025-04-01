# *Deployment Guide for React (Vite) + Node.js (Express) Application*  

## *Project Overview*  
This document provides step-by-step instructions to set up, run, and deploy the project.  

---

## *1. Clone the Repository*  
Before starting, ensure you have *Git, Node.js, and MongoDB* installed on your system.  

1. Open a terminal and run:  
   git clone https://github.com/Harshsinghh06/ChessGame
   cd <project-folder>
   
2. Ensure you are on the latest branch:  
   sh
   git pull origin main
   

---

## *2. Backend Setup (Node.js + Express + MongoDB)*  

### *A. Navigate to the Backend Directory*  
cd backend


### *B. Install Dependencies*  
npm install


### *C. Configure Environment Variables*  
Create a .env file in the *backend* folder and add the following variables:  
PORT=5000
OPENAI_API_KEY=your-openai-api-key
GEMINI_API_KEY=AIzaSyBvuXrgz18pDq_cw31CL9yiQ8ujmisKSYg


### *D. Start the Backend Server*  
npm run dev

- The server should now be running at **http://localhost:5000**.  

## *3. Frontend Setup (React + Vite)*  

### *A. Navigate to the Frontend Directory*  
cd frontend


### *B. Install Dependencies*  
sh
npm install


### *C. Configure Environment Variables*  
Create a .env file in the *frontend* folder and add the following:  
sh
VITE_API_URL=http://localhost:5000


### *D. Start the Frontend Server*  
sh
npm run dev

- Open **http://localhost:5173** in your browser.  

---

## *4. Deployment Process*  

### *A. Deploy Backend to Render/Railway/Vercel*  
1. *Push code to GitHub*:  
   sh
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   
2. *Select a deployment platform* (e.g., Render, Railway, AWS).  
3. *Deploy the Node.js server* and get the live API URL.  
4. **Update the Frontend .env file** with the live backend URL:  
   sh
   VITE_API_URL=https://your-live-backend.com
   

### *B. Deploy Frontend to Vercel/Netlify*  
1. *Push code to GitHub*.  
2. *Go to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)*.  
3. *Connect your GitHub repository* and deploy the project.  

---

## *5. Final Testing*  
- Open the *frontend live URL*.  
- Check for CORS issues (fix in the backend if necessary).  


## *7. Contact & Support*  
For any issues, open a GitHub issue or contact the team.  

🚀 *Your project is now live!*
