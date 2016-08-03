# JobDB

#Description: 
JobDB allows students seeking jobs in the software engineering market to find openings that match their skills and level of experience. Currently, job search apps do not allow users to search by the required skillset of the provider. Key features include
	- A comprehensive search page with a variety of relevant filters
	- A posting board for freelancing/contract projects
	- An indicator for jobs with connections to past members/founders of Horizons

#Wireframe:
	Refer to Monster/Dice/Indeed/etc.

#Models:
	-Jobs
	-Projects
#Views:
	-Home/Filter input
	-Search results
	-Posting board
	-Profile?
#Routes/Controller:
	-GET /
	-GET /search?query...
	-GET /projects
	-POST /projects
	-GET /profile ?

#Prioritized features:
	- Basic scraping functionality to populate DB:
		- Start with tech specific sites
		- Expand to general job search sites
		- Find specific opportunities at Wealthfront/Breakoutlist
	- Create search
	- Create freelancing/contracts board

