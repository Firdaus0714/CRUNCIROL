# Video Backend API

API ini digunakan untuk menyimpan dan mengambil data video dari MongoDB.

## Cara Deploy ke Render

1. Upload folder ini ke GitHub
2. Buka https://render.com > New > Web Service
3. Hubungkan repo dan atur:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add Environment Variable:
     - `MONGODB_URI = mongodb+srv://...` (URI Atlas kamu)
4. Klik Create dan tunggu hingga status Live

Setelah live, kamu bisa akses:
- `GET /videos`
- `POST /videos`
