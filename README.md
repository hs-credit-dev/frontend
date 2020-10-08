# Template

Description.

- Production: https://domain.com
- Testing: https://test.domain.com
- Development: https://dev.domain.com

## Installation

### Initial setup

- duplicate _template
- change name to project
- cd project
- valet secure

### Generate vendor folder and key

- composer update
- php artisan key:generate

### Create database and user privileges

- mysql -u root
- create database project;
- use project;
- create user project@localhost  identified by 'project';
- grant create, insert, drop, select, update, delete, index, alter, references on project.* to project@localhost;
- flush privileges;

### Add credentials to project settings and migrate

- edit .env variables
- php artisan migrate

### Other things

- create aws s3 buckets and add credentials
- add socialite credentials
- add chargebee credentials

## Version 0.1

- Login / register / logout
- Image upload to Amazon S3
