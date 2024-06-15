#!/user/bin/env sh

set -e 

npm run build

cd dist

git init
git add -A
git commit -m 'new Deployment'
git push -f igt@github.com:priyankakothyari/guest_house.git master:gh-pages

cd -
