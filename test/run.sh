#!/bin/bash

set -e

echo "building test.."
carp -b test.carp

echo "running test.."
./out/stemmer-test < words-and-stems.txt

echo "done"
