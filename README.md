Just pull this image, link with Postgres container, create db and migrate in running container and that's it.

Or let Docker Compose to make this job done (https://github.com/apiqcms/kms_docker/blob/master/docker-compose.yml):

```
version: '3'
services:
  db:
    image: postgres
  web:
    image: webgradus/kms
    command: bundle exec rails s -p 3000 -b '0.0.0.0'
    environment:
      SECRET_TOKEN: abc
      RAILS_SERVE_STATIC_FILES: 'true'
    volumes:
      - .:/kms
    ports:
      - "3000:3000"
    depends_on:
      - db
```

Environment variables you should care about are:
* `SECRET_TOKEN` - for secrets.yml
* `RAILS_SERVE_STATIC_FILES` - for serving static files by Rails
* `DATABASE` - database name prefix. Entire name is ENV['DATABASE'] + '_production'
* `POSTGRES_PASSWORD` - which is used for "Postgres" image
