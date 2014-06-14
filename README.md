'Mother's Day Movie Title Replacer
=================================

##About
Using TMDb API to randomly select movies and add variations of Mom into the title.
The app pull's a Movie's Title, Poster & Release Date.

##Live Link
[See it live here](http://wzaghal.github.io/movieWordReplacer/)

##Installation
We used Yeoman, Bower & Grunt to  make our lives easier. You must have those tools installed, to play around with the code. Click [here](http://mmcfadyen.ca/blog/wtf-is-yeoman-bower-grunt/') for more info.

Then run:

	sudo npm install

And after entering your password, update bower:

	bower update

Then you can start a local server with grunt:

	grunt serve

Finally, go to your [localhost](http://localhost:9000/), and edit the files and watch your changes appear! When you're happy and want to deploy, run the command:

	grunt
This creates a directory called 'dist' that has all the files you need to deploy.

Note: You must use your own API key. The API key used is limited to my own domain. To get an API key is free, just [register](https://www.themoviedb.org/account/signup) and follow the links to the API section.

##Authors
- [Wisam Zaghal](http://twitter.com/_wzaghal)
- [Matt McFadyen](http://twitter.com/mattmcfad)
