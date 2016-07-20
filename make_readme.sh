#!bin/bash
OUTPUT="../README.md"
cd cloud_portal
echo "<ul>" > $OUTPUT
for f in ./*; do
	echo "<li><a href=\"" $f ">" $f "</a></li>" >> $OUTPUT
done
echo "</ul>" >> $OUTPUT