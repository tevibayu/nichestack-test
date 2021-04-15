<?php

use Illuminate\Database\Seeder;
use App\Book;
use Illuminate\Support\Str;
// use Faker\Generator as Faker;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for($i = 0; $i < 30; $i++) {

            $date = $faker->numberBetween($min = 1, $max = 5);

            $book = Book::create([
                'book_name' => 'Book_'.($i+1),
                'author' => $faker->name.', '.$faker->name,
                'created_at' => date('Y-m-d H:i:s', strtotime("- $date days"))
            ]);

        }
    }
}
