FROM ruby:alpine
MAINTAINER Igor Petrov <garik.piton@gmail.com>
ENV INSTALL_PATH /kms
# Set Rails to run in production
ENV RAILS_ENV production

RUN apk update && apk --update --no-cache add libstdc++ postgresql-client tzdata && mkdir $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY Gemfile Gemfile

RUN apk --update --no-cache add --virtual build-deps build-base python postgresql-dev nodejs g++; \
  bundle install --without development test && apk del build-deps

COPY . .

#RUN bundle exec rails kms:install:migrations \
#   && SECRET_TOKEN="$(bundle exec rails secret)" DB_ADAPTER=nulldb bundle exec rails assets:precompile

EXPOSE 3000

# Expose a volume so that nginx will be able to read in assets in production.
VOLUME ["$INSTALL_PATH/public"]

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
