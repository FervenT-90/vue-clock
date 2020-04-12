#!/usr/bin/env sh

# abort on errors
set -e

cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/FervenT-90/vue-clock.git master:gh-pages

cd -