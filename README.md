# Penalty Submission Form

This project allows you to create a dynamic penalty form for your premier events. 

This project uses Google Sheets and App Script so is free to set up.

You will need the project permission to view/edit your google sheets so we encourage you to check the code post both here and viewable from Apps Script as well. 

## Demo

You can try the live demo here (The Demo is only TCG but GO and VG forms are available)

[Data Sheet](https://docs.google.com/spreadsheets/d/16kKjrTR04BzWKrgnhJcaiP6986TlZCl2fhhYZLQ2sAw/edit?usp=sharing)

[Form](https://script.google.com/macros/s/AKfycbwP3_jRpuHYxdeCRkgMa2R7DeRPcy_zrmMeeDue8kHA7kqFc7QtFZIQ6xhCLASK1BCK2Q/exec)

## Setupx

This setup guide is for desktop users, once set up the forms can be used on mobile.

Visit the correct sheet for your game and make a copy `File` -> `Make a copy`

[TCG](https://docs.google.com/spreadsheets/d/1DGdwMcAGmVjL0X-f1E_JxmOo39cp-ivYQX0hK25JWEo/edit?usp=sharing) 
[VG](https://docs.google.com/spreadsheets/d/1VGqdJeL1RNFToeborvD6Jn1ZUxaZechkds0yJP8ytso/edit?usp=sharing)
[GO](https://docs.google.com/spreadsheets/d/1f1LrxDvb9fqgVkHcUfTMnS9WVV6IMqj4ZNSLW8AHwts/edit?usp=sharing)

This also makes a copy of the Apps Script, you can review to ensure you are happy with the scripts being run on your account.

Once copied go to `Extensions` and select `Apps Script`.

Click `Deploy` then `New Deployment`, give it a `description` and change `Who has Access` to `Anyone` otherwise your staff won't be able to use the form.

Click `Deploy` and then you'll need to Authorize Access. Select your Google Account. 

You will get an error about this app not being verified, click `Advanced` and then `Go to Penalty Submission (unsafe)`, finally click `allow` 

Copy the generated URL, this is the form your staff will use to submit and view penalties.


## Inputting Data

In the `Players` tab add all your players, `Player ID` is only needed if you want auto generate a penalty report as well.

In the `Staff` tab add all your staff, `Player ID` is only needed if you want auto generate a penalty report as well.

## Generating penalty report for support

If you need to generate a penalty report to submit after your event this will be preformatted for you in `Penalty Report` just add your `Tournament ID` and then `File` -> `Download` -> `Comma Separated Values (.csv)`

## Using for a new event

You can either follow the instructions here again to make a new sheet or just clear the data in `Penalties`, `Players` & `Staff` leaving the headers as they are. 

## GO Regional Version

If you wish to use this for GO at a regional level event please contact me so we can ensure you are set up correctly, @lewymd on discord, twitter etc. 