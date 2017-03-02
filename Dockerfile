FROM ruby:latest
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client nodejs --fix-missing --no-install-recommends
ENV INSTALL_PATH /kms

RUN gem install rails --no-rdoc --no-ri &&\
    rails new $INSTALL_PATH --skip-test-unit --skip-bundle --database=postgresql
    
WORKDIR $INSTALL_PATH

RUN echo 'gem "kms"' >> Gemfile

RUN bundle install --without development test

COPY database.yml config/database.yml

RUN DB_ADAPTER=nulldb bundle exec rails g kms:install &&\
  DB_ADAPTER=nulldb bundle exec rails kms:install:migrations
  
# Set Rails to run in production
ENV RAILS_ENV production

RUN DB_ADAPTER=nulldb bundle exec rails assets:precompile

EXPOSE 3000

# Expose a volume so that nginx will be able to read in assets in production.
VOLUME ["$INSTALL_PATH/public"]

CMD bundle exec rails s -p 3000
