## APP

state- will have user info
props-none

handleLogout fn
handleSet user

renders routerlist, nav

## Homepage

state- none
props- none

renders buttons form login and signup forms - links

## Sign Up brain

state- none
props - handleSet user fn called in app to set user

handleSign up fn to handle signup form

renders sign up form

## Login Brain

state-none
props - handleSet user fn called in app to set user

login fn to handle login from form
renders login form

## Profile Brain

state-none
props - userInfo, setUserCallback

handle change profile info fn
renders login form

## LogIn form

State- formData
Props - handleSubmit

Form for login

## Sign/Edit form

state- formData
Props - handleSubmit, isEdit

Same form for edit user and sign in, just will take in different functions and is edit- true false, and if edit, will also contain user data to populate form

## RouterList

state-none
props- userInfo

renders routes for

TODO: checks if user logged in and if not navigates back home
TODO: can't navigate back to login or signup if already logged in

- /profile -> profile brain
- /signup -> signup brain
- /login -> login brain
- /companies/:company -> company details
- /jobs -> job brain
- /companies -> company brain
- any other routes sends to home

## Nav

-props - userInfo

TODO: only shows jobs and companies, profile, logout in case of logged in user, otherwise shows login and signup

-nav bar at top - just shows companies and jobs, links to correct endpoint

## Job Brain - name TBD

- state: jobs
- props: userInfo

- in charge of api calls and all other job related things
- Function to handle search for job from form
- on /jobs, gets data from API and renders list component with jobs
- function to handle apply TODO:

## Company Brain - name TBD

- state: companies like: {loading:true/false, companies: [{company}, ...]} - interrelated, should be tied together, if you reset two states at same time, should just be one
- props: userInfo
- takes in url param for specific company

- calls API and gets correct list of companies,
  put loading message
- function to handleSearch from form
- renders either company details, list component passed in with companies

## Company details

- state:
- props: takes in company, detail, and list of company jobs

renders company info and list component with jobs

## List - display - renders card components

- state: none
- props:
  list of companies or jobs to render
  callback function to handle search
  callback fn to handle apply click for jobs TODO:

## Company Card - display

- state: none
- Props:
  Name, Description, Picture
  has link for when clicked on that takes user to company route

## Job Card - display

TODO: set apply button that saves into user jobs that you've applied to

- state: none
- Props:
  title, salary, equity, fn to handle apply click

## Search Form

- state:
  form input

- props:
  callback function to handle click
