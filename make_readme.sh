#!bin/bash
OUTPUT="../README.md"
cd cloud_portal
echo "<h1>Radical Ebooks, Get Your Radical Ebooks Here!!!</h1></br><ul>" > $OUTPUT
for f in *; do
	echo "<li><a href=\"https://spookmango.github.io/e-slingshot/$f\">$f</a></li>" >> $OUTPUT
done
echo "</ul>" >> $OUTPUT