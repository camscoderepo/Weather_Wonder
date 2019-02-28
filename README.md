#  About Weather Wonder
Weather Wonder is a open source weather bot that currently uses the apixu api for weather data. It is a bot that is built for the messenger platform. All the code is setup at the moment to run on that platform. It is regex based and is very simple at the moment. I built it for educational purposes and that is what it should be used for.

## Installation
1.clone or download repo into git or github
2.Install the modules were using each command below
axios: npm i axios
body-parser: npm i body-parser
express: npm i express
moment: npm i moment
request: npm i request
xregexp: npm i xregexp
nodemon: npm i nodemon


## Features

Currently Weather Wonder can provide feedback on the weather today and tomorrow.
I also recently added a help feature, it is very basic at the moment but hope for updates in the near future.

## Usage
Once everything is installed if you want to run the project locally you will have to download and use ngrok as a local webhook.

If you want to deploy the project to a server everything is already setup for a deployment to heroku. If you choose a different option that will be on you to setup all of the requirements to run in that environment.

Everything is setup to use the messenger platform and these instructions are meant for setup on that platform.

1.Create or login to your facebook developer account and create a new app.
2.Add a page to the app and you can name it whatever you would like.
3.Add the messenger product to your application and generate a page access token, place this into development.json as pageAccessToken.
4.Add an event to the webhook option, this should create a new product called webhooks you can add a webhook too.
5.Make sure ngrok is installed and open another terminal and navigate to the ngrok directory(wherever you stored ngrok) and run ngrok http 3000.
6.In a different terminal run node and hit enter. type what is below to create a unique verification token. Put this token in the verifyToken spot in development.json.
```
require('crypto').randomBytes(24).toString('hex')
```
7.Add the ngrok https address provided to the webhooks product subscription in your facebook app and make sure the page you made is selected and add the verifyToken in as the second option. This is for local only, if you are running this on a server you would add the heroku url or wherever the server can be accessed.
8.Subscribe your page to the webhook and you should be able to message yourself at this point.
9.Go to basic settings and find the app secret and copy it. Paste the app secret in development.json as appSecret
10.If you want your app public, you must submit an app review to facebook and provide them with all the necessary requirements.

##Disclaimer

Weather Wonder is for educational and legal purposes only, I and anyone affiliated with Weather Wonder are not responsible for misuse of this product by anyone. Please help keep weather wonder a great and useful weather predicting machine for everyone around the world!
