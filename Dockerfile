# syntax=docker/dockerfile:1
FROM php:8.3.1-apache

RUN pecl install xdebug && docker-php-ext-enable xdebug

# Copy app files from the app directory.
COPY --chown=app:app ./app /var/www/html 

# PDO support
RUN docker-php-ext-install pdo pdo_mysql

RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Switch to a non-privileged user (defined in the base image) that the app will run under.
# See https://docs.docker.com/go/dockerfile-user-best-practices/
USER www-data
