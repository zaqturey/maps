# maps

## Prerequisites
1. Make sure your have installted 'parcel-bundler' npm package i.e. -> npm install -g parcel-bundler


## Commits History

************************************************************************************************
### Imported 'User' class from './User' file and created an Object of it
================================================================================================
***index.ts***
1. Imported 'User' class from './User' file
2. Created an Object of 'User' class and printed in on the console window
3. Note: you can import multiple classes, fields inside the curly braces from the same file.


************************************************************************************************
### Added class Constructor, and added 'export' keyword to the class
================================================================================================
***User.ts***
1. Added class 'constructor' that initializes class fields using 'faker' i.e. 'name' and 'location'
2. Added 'export' keyword in front of the class so that other files in the project can 'import' it.


************************************************************************************************
### Added User class, insatlled 'faker' and corresponding '@types/faker' package
================================================================================================
***User.ts***
1. Added this class to provide a User info i.e. i.e. 'name' and 'location'
2. faker -> imported 'faker' package to help in generating random 'name' and random 'location'
3. @types/faker -> imported '@types/faker' package to provide 'Type definition file' for 'faker'


************************************************************************************************
### Added first TypeScript file --> 'index.ts'
================================================================================================
***index.ts***
1. Added this new file that prints a console message

***index.html***
1. Added this file that refers 'index.ts' as its 'script' source

***.gitignore***
1. Added '.gitignore' file and added files/folders path that need not to be tracked.