#!/bin/bash

NODE_ENV=production
echo $NODE_ENV
npm run knex migrate:latest