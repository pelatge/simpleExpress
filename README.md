# Express-mongoose-setup

Repo ini untuk belajar backend dengan framework expressjs sebagai web server dan databasenya menggunakn mongodb.

# Feature

## library
 - Expressjs
 - Mongoose
 - Nodemon
 - Gulp 
 - MongoDb atlas cloud 
 - Babel
 - JsonWebToken  *//untuk security server*
 - Ngrok *//untuk mockup via tunneling remote*
 
## Environment
### Desktop
 - Node v12.22.5
 - Npm 8.2.0
 - Linux (Distro kalilinux)
 - IDE Sublimetext
 
### Android
 - Termux
 - Node v17.4.0
 - Npm 8.4.0
 - IDE Code Editor Rhytm software


# Cara penggunaan

- Buka terminal
- **Ketik** *git clone https://github.com/pelatge/simpleExpress.git* 

## Details
- **npm start** untuk mode development menggunakan fitur hot reload nodemon 
- **npm run dev** untuk mode development 
- **npm run build** untuk mode production


# Isues
## Mongoose
1.**Bad authentification failed**
### **problem**
Terletak pada kesalahan password di URL mongoDb atlas,ex;
*mongodb+srv://**< userdb >**:**< password >**@****.ifxtu.mongodb.net/productDb?retryWrites=true&w=majority*
### **solusi**
- hilangkan tanda **< >** pada password
- jangan menggunakan escape karakter kecuali di encoding terlebih dahulu
- Harus dibedakan <password> di URL mongodb atlas bukan password yang digunakan ketika login masuk ke situs mongodb,tapi password ini adalah password database,cara ceknya buka
 **Security>>Database Acces>>Actions>>Edit>>password**

# Author
**pelatge**