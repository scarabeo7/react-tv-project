This is personal stretch on a TV-project that was originally built using vanilla JS. I have decided to implement the same project using React.
The project is split into various tasks.

Level 100 - All episodes must be shown
For each episode, AT LEAST following must be displayed:
the episode's name
the season number
the episode number
the episode's medium-sized image
the episode's summary text
You should combine season number and episode number into an episode code:
Each part should be zero-padded to two digits.
Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.

Level 200 - Add Search
Complete all requirements from Level 100
Add a "live" search input:
Only episodes whose summary OR name contains the search term should be displayed
The search should be case-insensitive
The display should update immediately after each keystroke changes the input.
Display how many episodes match the current search
If the search box is cleared, all episodes should be shown.
If you have been fetching the episode data from the API, be careful not to cause many frequent requests with this search feature. The search should look through an in-memory copy of the episode list. Do not fetch the data again each time something is typed!