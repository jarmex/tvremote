# TV Remotes

This was a curiosity-driven experiment to learn more about Handlebars partials.
This was a curiosity-driven project on how to controls TV directory from the browser (local network only).

## Setup

### Sony TV Setup

* Turn on your TV
* On the TV go to Settings > Network > Home network setup > Remote device/Renderer > On
* On the TV go to Settings > Network > Home network setup > IP Control > Authentication > Normal and Pre-Shared Key
* On the TV go to Settings > Network > Home network setup > Remote device/Renderer > Enter Pre-Shared Key > 0000 (or whatever you want your PSK Key to be)
* On the TV go to Settings > Network > Home network setup > Remote device/Renderer > Simple IP Control > On

## Running the code

Clone this repo and CD to the directory. Change IP Address, port and Pre-Shared Key in the routes/index.js file.

Run 
```
npm install && npm start
``` 

This will install all of the dependencies and start a local server. Browse http://localhost:3000.

---

Thanks to [waynehaffenden/bravia](https://github.com/waynehaffenden/bravia)