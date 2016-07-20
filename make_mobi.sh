#!/bin/bash
mkdir mobi
for f in ./epub/*epub; do KindleGen_Mac_i386_v2_9/kindlegen $f; done