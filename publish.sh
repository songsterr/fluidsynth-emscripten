#!/bin/bash
# Publishes package.json's name@version to its publishConfig registry, unless that version is already there.
set -e
name=$(node -p "require('./package.json').name")
version=$(node -p "require('./package.json').version")
registry=$(node -p "require('./package.json').publishConfig.registry")

if out=$(npm view "${name}@${version}" version --registry "$registry" 2>&1); then
    echo "${name}@${version} is already published, skipping"
    exit 0
elif ! grep -q "E404" <<<"$out"; then
    # Anything but "no such version" (401, network, ...) must not fall through to a publish attempt.
    echo "$out"
    exit 1
fi
npm publish "$@"
