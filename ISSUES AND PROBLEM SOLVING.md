### ISSUES AND PROBLEM SOLVING

#INSTALLING MYSQL AND MYSQL WORKBENCH AND XAMPP

- I had to downgrade to a version for Catalina for all three programs;

#PROBLEM INITIALIZING PHPMYADMIN

- I found out a solution: 
  - Locate config.sample.inc.php
  - Change
    - $cfg[ 'Servers' ][$i]['host'] = 'localhost';
  - into
    - $cfg[ 'Servers' ][$i]['host'] = '127.0.0.1;
  - Save it.
  - Then remove "sample" from the name.

