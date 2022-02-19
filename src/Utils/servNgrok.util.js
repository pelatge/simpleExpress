 import dotenv from 'dotenv'
 import ngrok from 'ngrok'
 dotenv.config()

 export default function servNgrok(){
 ngrok
  .connect({
    proto:"http",
    authtoken: process.env.NGROK_TOKEN,
    addr: process.env.PORT,
    // onLogEvent: data => {console.log(data);},
    //configPath: '~/.ngrok2/ngrok.yml',
    // region: process.env.NGROK_REGION,
    // hostname: process.env.FLYPAPER_API_URL.replace("https://", "")
  })
  .then((url) => {
    console.log(`ngrok tunnel opened at: ${url}`);
    console.log("Open the ngrok dashboard at: http://localhost:4040\n");
  })
  .catch((error) => {
    console.error("Error opening ngrok tunnel: ", error);
    process.exitCode = 1;
  });
// (async function() {
//     dotenv.config();
// const url = await ngrok.connect({
//   proto: 'http', // http|tcp|tls, defaults to http
//   addr: process.env.PORT || 3000, // port or network address, defaults to 80
//   auth:process.env.NGROK_PWD, // http basic authentication for tunnel
//   //subdomain: 'alex', // reserved tunnel name https://alex.ngrok.io
//   authtoken: process.env.NGROK_TOKEN, // your authtoken from ngrok.com
//   region: 'us', // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
//   //configPath: '~/git/project/ngrok.yml', // custom path for ngrok config file
//  // binPath: path => path.replace('app.asar', 'app.asar.unpacked'), // custom binary path, eg for prod in electron
//   onStatusChange: status => {console.log(status);}, // 'closed' - connection is lost, 'connected' - reconnected
//   onLogEvent: data => {console.log(data);}, // returns stdout messages from ngrok process
// });
// })();

};

