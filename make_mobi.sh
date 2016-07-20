#!/bin/bash
for f in ./cloud_portal/*epub; do KindleGen_Mac_i386_v2_9/kindlegen $f; done
