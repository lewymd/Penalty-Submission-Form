# Penalty Submission Form - GO Regional Edition

This project allows you to create a dynamic penalty form for your premier events. 

This project uses Google Sheets and App Script so is free to set up.

You will need the project permission to view/edit your google sheets so we encourage you to check the code post both here and viewable from Apps Script as well. 

## Demo

You can try the live demo here (not yet updated for GO)

## Setup

This setup guide is for desktop users, once set up the forms can be used on mobile.

Visit this [sheet and make a copy](https://docs.google.com/spreadsheets/d/1isK93EJfhw7n6ixIBOe4miT1NUdB5HQ1Yh5PlKPMAhs/edit?usp=sharing) `File` -> `Make a copy`

This also makes a copy of the Apps Script, you can review to ensure you are happy with the scripts being run on your account.

Share the sheet with all users you wish to allow access using `File` -> `Share`. Make sure they have edit permissions. 

We now need to grant them acces to the form, go to `Extensions` and select `Apps Script`.

In `Code.gs` edit the emails in `allowedUsers` to add your allowed users.

Click `Deploy` then `New Deployment`, give it a `description` and change 
`Execute as` to `User accessing the web app` and `Who has Access` to `Anyone with a Google account` otherwise your staff won't be able to use the form.

Click `Deploy` and then you'll need to Authorize Access. Select your Google Account. 

You will get an error about this app not being verified, click `Advanced` and then `Go to Penalty Submission (unsafe)`, finally click `allow` 

Copy the generated URL, this is the form your staff will use to submit and view penalties.

If you make changes to the allowed users you will need to follow the deploy steps again.

## Inputting Data

In the `Players` tab add all your players, `Player ID` is only needed if you want auto generate a penalty report as well.

In the `Staff` tab add all your staff, `Player ID` is only needed if you want auto generate a penalty report as well.

## Generating penalty report for support

If you need to generate a penalty report to submit after your event this will be preformatted for you in `Penalty Report` just add your `Tournament ID` and then `File` -> `Download` -> `Comma Separated Values (.csv)`

## Using for a new event

You can either follow the instructions here again to make a new sheet or just clear the data in `Penalties`, `Players` & `Staff` leaving the headers as they are. 