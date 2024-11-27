# remove contents of results folder
rm -rf ../results/*.json

# run tests
# bru run Attendance\ Tool/test-suite --env $1 --output ../results/results-at.json --env-var azure-client-secret=$2

# merge results
node ../results/merge-results.mjs