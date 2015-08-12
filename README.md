A demonstration of building a Backbone.js App


```
drush qd;
drush en blog;
drush dl devel;
drush en devel_generate -y;
drush genc 30 --types=blog;
cd sites/all/modules
wget http://github.com/catblog.zip
cd catblog
unzip catblog.zip
drush en catblog -y
drush cc menu
curl http://gist.github.com/rjsteinert/drupal_cors.raw >> sites/default/settings.php
```


```
drush dl services
drush en service_rest
drush vset ...
```

```
bower install jdrupal --save
bower install jdrupal_backbone --save
sed
```
- Modify the Blog sync adapter
- Test in console
```
yo backbone:view BlogFull
```
- add `blog/:id` route
- instantiate blog model
- instantiate BlogFull with model
- attach to main and tell model to fetch
