## Nichestack Test
Created with Next JS, using Laravel Backend API.


First, run the development server for FrontEnd App:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### ENV
Default API_URL=http://localhost:8888/nichestack-test/backend/public/api/book-list
Please change to your localhost server (Laravel)

### Dependencies
`next` is package for NextJS.

`prop-types` is package for defining prop types on components.

`swr` is package for caching and revalidating fetched data.

`unstated-next`is package for the state management.


### Folder /components
This folder is to group components files

`/common/*` is for all component that present in more than one pages.

`/[pages]/*` is for all component thet just appear in that `[pages]`.


### Folder /modules
`/modules/[module]/*` is for handle data request per module


### Folder /lib
lib folder contains custom utils, like filter, sort, etc.

`/lib/hooks/*` contains custom hooks files, including Context.


### Folder /proxy
`/proxy/index` is for combining all proxy. This file is used in `/next.config.js` for applying proxy rewrites.

`/proxy/*` is for defining proxy API per module.


Second, run the development server for BackEnd App:

```bash
composer install
create DB "nichestack" in MySQL
php artisan migrate
composer dump-autoload
php artisan db:seed --class=BookTableSeeder

```

Open [http://localhost/nichestack-test/backend](http://localhost/nichestack-test/backend) with your browser to see the result.

### Folder Controller Function
/app/Http/BookController.php