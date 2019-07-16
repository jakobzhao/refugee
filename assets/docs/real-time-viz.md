# real-time data visualization

## Systematic Architecture

- Data tier:
  - Mongodb stores the timely crawlled dataset
  - `Git` regularly push the latest data (in json or csv) to the git repo hub
- Service tier:
  - Python-based crawler (refer to https://github.com/jakobzhao/crawler-template)
    > Crawle real-time data: twitter, instagram, Google, usgs monitoring station, etc. Please pay attention to the **Crawlling ethics** - `Robots.txt`
    > Or using official or third-party APIs
  - [Crontab](https://www.ostechnix.com/a-beginners-guide-to-cron-jobs/)
    > trigger several sequential events on the server-end
    - trigger the crawler to harves the latest data feeds and store them in the data base every half day
    - trigger `git command` to push the newly-harvested data in geojson or csv to the github repository every half day
- Server tier:
  - Apache 2 on an Ubuntu server
    > Installation tutorials should be availble on digital ocean website.
  - Digital Ocean
    > username: jakobzhao@gmail.com, pwd: nanjing1212
    > grant index: J2307B
    > send an email to Jim to pay for this service to the end of this year.

- Client tier:
  > pay attention to the cross-domain issue.
  - $.json or d3.json
    ```js
        for (var i = 0; i < data.length; i++) {
          d3.csv("http://www.domainname.com/data/employees.csv", function(data) {
            console.log(data[i].Name);
            console.log(data[i].Age);
        }
    });
    ```

## Pilot study and test

download ubuntu as an application from windows store. check [here](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?SilentAuth=1&wa=wsignin1.0&activetab=pivot:overviewtab)

[a tutorial on how to install ubuntu on windows 10](https://tutorials.ubuntu.com/tutorial/tutorial-ubuntu-on-windows#0)

## Crawling Ethics
Robots.txt for twitter crawler
```
# Every bot that might possibly read and respect this file.
User-agent: *
Allow: /*?lang=
Allow: /hashtag/*?src=
Allow: /search?q=%23
Disallow: /search/realtime
Disallow: /search/users
Disallow: /search/*/grid
```
