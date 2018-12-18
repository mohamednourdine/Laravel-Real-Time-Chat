# Laravel-Real-Time-Chat

Build a multiuser real time chat system with laravel, pusher, vuejs, bootstrap 4 and laravel echo. Follow the tutorial [https://pusher.com/tutorials/chat-laravel](https://pusher.com/tutorials/chat-laravel)

[![Build Status](https://img.shields.io/travis/gothinkster/laravel-realworld-example-app/master.svg)](https://travis-ci.org/gothinkster/laravel-realworld-example-app) [![Gitter](https://img.shields.io/gitter/room/realworld-dev/laravel.svg)](https://gitter.im/realworld-dev/laravel) [![GitHub stars](https://img.shields.io/github/stars/gothinkster/laravel-realworld-example-app.svg)](https://github.com/gothinkster/laravel-realworld-example-app/stargazers) [![GitHub license](https://img.shields.io/github/license/gothinkster/laravel-realworld-example-app.svg)](https://raw.githubusercontent.com/gothinkster/laravel-realworld-example-app/master/LICENSE)

## Getting Started

Clone the repo or download as zip. Then in your root run composer install and npm install to install the required dependencies. Copy the existing .env.example file and rename it to .env. Now add your database and Pusher credentials in it. Also set the BROADCAST_DRIVER= to pusher. Now head to app.js and add pusher credentials in it too. 

Once its added run the following command to compile it.

npm run dev

Once its completed. Open the app in your browser register a new user and start using it.

```bash
git clone github.com:NourGithub/Laravel-Real-Time-Chat.git
```

If you use https, use this instead

```bash
git clone https://github.com/NourGithub/Laravel-Real-Time-Chat.git
```

After cloning,run:

```bash
composer install
```

Duplicate `.env.example` and rename it `.env`

Then run:

```bash
php artisan key:generate
```

### Prerequisites

#### Setup Pusher

If you don't have one already, create a free Pusher account at [https://pusher.com/signup](https://pusher.com/signup) then login to your dashboard and create an app.

Set the `BROADCAST_DRIVER` in your `.env` file to **pusher**:

```txt
BROADCAST_DRIVER=pusher
```

Then fill in your Pusher app credentials in your `.env` file:

```txt
PUSHER_APP_ID=xxxxxx
PUSHER_APP_KEY=xxxxxxxxxxxxxxxxxxxx
PUSHER_APP_SECRET=xxxxxxxxxxxxxxxxxxxx
PUSHER_APP_CLUSTER=
```

#### Database Migrations

Be sure to fill in your database details in your `.env` file before running the migrations:

```bash
php artisan migrate
```

And finally, start the application:

```bash
php artisan serve
```

and visit [http://localhost:8000/](http://localhost:8000/) to see the application in action.

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Laravel](https://laravel.com) - The PHP Framework For Web Artisans
* [Vue.js](https://vuejs.org) - The Progressive JavaScript Framework

## Acknowledgments

* [Bootsnipp chat snippet](http://bootsnipp.com/snippets/featured/collapsible-chat-widget)
