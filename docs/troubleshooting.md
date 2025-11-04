# Troubleshooting


Something isn't working right! Daedo is on fire! This page is here to help. If all else fails, please request "Daedo Support" in your TMS ring status.

::: warning 
If you are not 100% sure what you are doing, please request Daedo support instead of trying to fix things yourself. If you are confident in your Daedo skills, proceed with caution. 
:::



## I can't access the scoreboard! / I am trying to change something in the scoreboard, but whenever I exit, everything is reset to a previous round! 

Try starting the round before pausing again + clicking on the scoreboard. You can always reset the round time in the scoreboard. 


For the scoreboard to show up and changes to propagate, a round **must** have been started (time counting down). 

## I accidentally ended a match before confirming the final result! / The center ref wants to confirm the match results, where can I find that?

You will find information about previous matches by going to the Match Logs.

***

::: danger
If you're looking at troubleshooting tips below this, you're truly in the trenches. Something has gone horribly wrong. If you're a computer operator and down here for some reason, ***please*** call for Daedo support.
:::

## I need to enable C Team scoring (no e-hogus), but I can't start a match!

You need to enable the `Joystics Backup System`.
To do this, press `Ctrl + Alt + j` and on the menu on the right, click on the new option to `Enable Joystics Backup System`. 

If you pressed `Ctrl + Alt + j`, but nothing is happening or you can't click on the option, try setting up a new match by going through the `New Match Wizard`  (you do not need to start it)


## The "ECTC" box isn't showing up in the contest selection when I'm setting up a new match!

Looks like the software did a ghost reset! Or it was just reinstalled. If you are a computer operator, please request Daedo support.

### Instructions for Daedo Tech

Go to `Match/Ring Manager` -> `Weight Divisions` and create a new contest called `ECTC`. 
Click on the newly created `ECTC` contest, and click `Manage`.
Add the following weight classes:

|          | Female | Male | Head Level |
| -------- | :----: | :--: | :--------: |
| Light    | 17     |  22  | 5          |
| Middle   | 19     |  24  | 5          |
| Heavy    | 21     |  26  | 5          |



## The connection boxes are grayed out / Nothing is connecting no matter what!
To sanity check, double check that the base station, judge controllers, and hogu transmitters are all on the ***same*** channel. 
This channel should also be the ***same*** as the ring number. 
If you discover that they are indeed on different channels, [click here](./hardware-configuration).

If you've confirmed everything is on the correct channel, and also double + triple checked that the controller IDs you typed into the boxes are correct, then it is possible that the software is borked.

::: info
This state can sometimes be entered into if the base station is plugged into the laptop *before* opening the TkStrike software. 
***Never*** do that. 
If you did this, now you know.
:::

### Instructions for Daedo Tech
1. Uninstall the software.
    1. Go into Windows Settings -> `Apps and Features`.
    2. Find TkStrike Gen 2 and `Uninstall`
2. Remove cached app data.
    1. Open `File Manager` and navigate to `C:\Users\{USER}\AppData\Local`.
       You may need to click on the `View` tab -> `Show/hide` -> Check `Hidden items` for the `AppData` folder to show up
    2. Delete the tkStrikeGen2 folder
3. Reinstall TkStrike Gen2. Download link is #TODO figure out how to distribute this
4. Set up the correct rules in `Configuration` -> `Rules`. The cuurent rules are posted [here] #TODO put rules somewhere. The round time is subject to change per tournament. If you are not sure what the round time is, check with Head Table.
5. Set up the ECTC contest + weight classes. Click [here](#the-ectc-box-isn-t-showing-up-in-the-contest-selection-when-i-m-setting-up-a-new-match) for instructions on how to do that.

