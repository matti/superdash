#!/usr/bin/env bash
set -euo pipefail

_term() {
  echo "TERM"
  exit 0
}

trap "_term" TERM

action=${1:-}
echo "starting: $action"

case "$action" in
  hang)
    echo "hang"

    tail -f /dev/null &
    wait $!
  ;;
  dev)
    npx next dev &
    wait $!
  ;;
  export)
    npm run export
    cd out
      ls -la
      /app/node_modules/.bin/static -a 0.0.0.0 -p 4000 &
      wait $!
  ;;
  *)
    echo "error: unknown action"
    exit 1
  ;;
esac
