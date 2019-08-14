# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-wdi-production.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
