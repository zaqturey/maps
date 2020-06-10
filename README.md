# maps

## Prerequisites
1. Make sure your have installted 'parcel-bundler' npm package i.e. -> npm install -g parcel-bundler


## Commits History

**********************************************************************************************************
### installed '@types/googlemaps' NPM module, added 'CustomMap' class (refactored 'index.ts' to use it)
==========================================================================================================
***Index.html***
1. Added a new 'script' Tag to thats a 'google api' url to display a 'google map'
2. Added a div element (i.e. div id="map") to display the google Map
3. Installed NPM '@types/googlemaps', so that 'google' can be recognised as a global variable by the TypeScript

***CustomMaps.ts***
1. Added a new class that declares an instance of 'Map' class from 'google.maps'
2. addMarker -> a method thats take a 'Mappable' parameter and displays a marker on Google Map.
3. Mappable -> an interface that defines argument for 'addMarker' 

***index.ts***
1. customMap -> Created an object of 'CustomMap' (passing 'map' as Constructor argument value for 'divId')
2. Twice called the 'addMarker' method of 'CustomMap' class (passing 'user' and 'compnay' as argument value for 'Mappable')


**********************************************************************************************************
### Added 'Company' class, its Constructor, and added 'export' keyword to the class
==========================================================================================================
***Company.ts***
1. Added 'Company' class to provide a Company info i.e. 'companyName', 'catchPhrase' and 'location'
1. Added class 'constructor' that initializes class fields using 'faker'.
2. Added 'export' keyword in front of the class so that other files in the project can 'import' it.

***index.ts***
1. Imported 'Company' class from './Company' file
2. Created an Object of 'Company' class and printed in on the console window


**********************************************************************************************************
### Imported 'User' class from './User' file and created an Object of it
==========================================================================================================
***index.ts***
1. Imported 'User' class from './User' file
2. Created an Object of 'User' class and printed in on the console window
3. Note: you can import multiple classes, fields inside the curly braces from the same file.


**********************************************************************************************************
### Added class Constructor, and added 'export' keyword to the class
==========================================================================================================
***User.ts***
1. Added class 'constructor' that initializes class fields using 'faker' i.e. 'name' and 'location'
2. Added 'export' keyword in front of the class so that other files in the project can 'import' it.


**********************************************************************************************************
### Added User class, insatlled 'faker' and corresponding '@types/faker' package
==========================================================================================================
***User.ts***
1. Added this class to provide a User info i.e. i.e. 'name' and 'location'
2. faker -> imported 'faker' package to help in generating random 'name' and random 'location'
3. @types/faker -> imported '@types/faker' package to provide 'Type definition file' for 'faker'


**********************************************************************************************************
### Added first TypeScript file --> 'index.ts'
==========================================================================================================
***index.ts***
1. Added this new file that prints a console message

***index.html***
1. Added this file that refers 'index.ts' as its 'script' source

***.gitignore***
1. Added '.gitignore' file and added files/folders path that need not to be tracked.