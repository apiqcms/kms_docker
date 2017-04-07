FROM ruby:alpine
MAINTAINER Igor Petrov <garik.piton@gmail.com>
ENV LIBV8_VERSION 3.16.14.18
RUN apk update && apk --update --no-cache add libstdc++ postgresql-client
ENV INSTALL_PATH /kms
# Set Rails to run in production
ENV RAILS_ENV production

RUN gem install rails --no-rdoc --no-ri &&\
    rails new $INSTALL_PATH --skip-test-unit --skip-bundle --database=postgresql

WORKDIR $INSTALL_PATH

RUN echo 'gem "kms"' >> Gemfile

RUN apk --update --no-cache add --virtual build-deps build-base python postgresql-dev nodejs g++; \
  #gem install libv8 -v ${LIBV8_VERSION} && \
  #gem install therubyracer && \
  bundle config build.libv8 --enable-debug && \
  LIBV8_VERSION=$LIBV8_VERSION bundle install --without development test && apk del build-deps

COPY database.yml config/database.yml

RUN SECRET_TOKEN="$(bundle exec rails secret)" DB_ADAPTER=nulldb bundle exec rails assets:precompile

EXPOSE 3000

# Expose a volume so that nginx will be able to read in assets in production.
VOLUME ["$INSTALL_PATH/public"]

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
