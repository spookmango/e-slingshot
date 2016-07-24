#!/bin/bash

# optional step before make_readme.sh if you want to support kindle 

# download kindlegen from here https://www.amazon.com/gp/feature.html?docId=1000765211 and modify the line below as needed

for f in ./cloud_portal/*epub; do KindleGen_Mac_i386_v2_9/kindlegen $f; done
