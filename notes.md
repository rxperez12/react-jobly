## APP

state-none
props-none

renders routerlist, nav

## RouterList

state-none
props- none

renders routes for

- /companies/:company -> company brain
- /jobs -> job brain
- /companies -> company brain
- any other routes sends to home

## Nav

-nav bar at top - just shows companies and jobs, links to correct endpoint

## Job Brain - name TBD

- state: jobs
- props: none

- in charge of api calls and all other job related things
- Function to handle search for job from form
- on /jobs, gets data from API and renders list component with jobs

## Company Brain - name TBD

- state: companies like: {loading:true/false, companies: [{company}, ...]} - interrelated, should be tied together, if you reset two states at same time, should just be one
- props: none
- takes in url param for specific company

- calls API and gets correct list of companies,
  put loading message
- function to handleSearch from form
- renders either company details, list component passed in with companies

## Company details TODO: split this out into it's own string thing---

- state:
- props: takes in company, detail, and list of company jobs

renders company info and list component with jobs

## List - display - renders card components

- state: none
- props:
  list of companies or jobs to render
  callback function to handle search

## Company Card - display

- state: none
- Props:
  Name, Description, Picture
  has link for when clicked on that takes user to company route

## Job Card - display

- state: none
- Props:
  title, salary, equity

## Search Form

- state:
  form input

- props:
  callback function to handle click
