#--------------------------------------------------------
# SOURCE CONTROL
#--------------------------------------------------------
+ Git: https:https://sogoten6689@dev.azure.com/sogoten6689/ShareMomAndBaby/_git/ShareMomAndBaby
+ Git branch: develop


#--------------------------------------------------------
# STEPS TO START API SERVER
#--------------------------------------------------------
1. Install node.js (version >= 8) --> restart computer (check: node -v)
2. Install mysql  (https://www.postgresql.org/download/) by using EnterpriseDB bundle
3. Go to /server, run: npm install
4. Create pa_tool database. Run database migration to generate db schema.
  + npm install sequelize-cli -g
	+ sequelize db:migrate
	+ sequelize db:seed:all
5. Start server without checking changed: npm start
6. Start server with checking changed
	+ npm install nodemon -g
	+ nodemon server.js


#--------------------------------------------------------
# STEP TO GENERATE API DOCS
#--------------------------------------------------------
1. Run command: npm install apidoc -g
2. Go to /server folder
3. Run command: npm run apidoc

4. Open file: server/apidoc/index.html